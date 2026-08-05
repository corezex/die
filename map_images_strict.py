import json
import os

recipes_dir = "public/image/recipes"
json_path = "app/data/recipes.json"

# UNIQUE-1:1 mapping policy.
# 1) Exact slug match wins (1 image = its recipe).
# 2) Substring match is allowed ONLY if the image file is not yet used by any
#    other recipe (guarantees 1 image : 1 recipe, no repeats/sharing).
# 3) Everything else defaults to /image/homeimage.jpg so it gets its own
#    unique image in a future generation batch.
# Deterministic: every non-exact mapping is re-decided from scratch each run.

image_files = {}
if os.path.exists(recipes_dir):
    for f in os.listdir(recipes_dir):
        if f.endswith(('.jpg', '.png', '.jpeg', '.webp')):
            name = os.path.splitext(f)[0]
            image_files[name] = f"/image/recipes/{f}"

with open(json_path, "r", encoding="utf-8") as f:
    recipes = json.load(f)

used = set()  # image names already assigned

# Pass 1: exact matches (authoritative, always win)
for recipe in recipes:
    slug = recipe["slug"]
    if slug in image_files:
        recipe["coverImage"] = image_files[slug]
        used.add(slug)

# Pass 2: every non-exact recipe is re-decided (substring only with unused
# files, otherwise fallback). No `continue` for previously substring-mapped
# recipes -> stale/shared mappings are cleaned up on every run.
for recipe in recipes:
    slug = recipe["slug"]
    if slug in image_files:
        continue  # exact match already assigned in pass 1
    matched = False
    for img_name in image_files:
        if img_name in used:
            continue  # never reuse an image
        if img_name in slug or slug in img_name:
            recipe["coverImage"] = image_files[img_name]
            used.add(img_name)
            matched = True
            break
    if not matched:
        recipe["coverImage"] = "/image/homeimage.jpg"

with open(json_path, "w", encoding="utf-8") as f:
    json.dump(recipes, f, indent=2)

print(f"Total images found in directory: {len(image_files)}")
print(f"Images used by recipes: {len(used)}")
