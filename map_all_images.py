import json
import os

recipes_dir = "public/image/recipes"
json_path = "app/data/recipes.json"

# Get all image files
image_files = {}
if os.path.exists(recipes_dir):
    for f in os.listdir(recipes_dir):
        if f.endswith(('.jpg', '.png', '.jpeg', '.webp')):
            name = os.path.splitext(f)[0]
            image_files[name] = f"/image/recipes/{f}"

with open(json_path, "r", encoding="utf-8") as f:
    recipes = json.load(f)

updated_count = 0
for recipe in recipes:
    slug = recipe["slug"]
    
    # Check for exact match first
    if slug in image_files:
        if recipe.get("coverImage") != image_files[slug]:
            recipe["coverImage"] = image_files[slug]
            updated_count += 1
        elif recipe.get("coverImage") == image_files[slug]:
            # Already set
            pass
    else:
        # Try a substring match (e.g. 'methi-thepla-low-oil' -> 'methi-thepla.jpg')
        matched = False
        for img_name in image_files:
            if img_name in slug or slug in img_name:
                if recipe.get("coverImage") != image_files[img_name]:
                    recipe["coverImage"] = image_files[img_name]
                    updated_count += 1
                matched = True
                break
        
        # If no match is found, ensure it uses the common image
        if not matched:
            recipe["coverImage"] = "/image/homeimage.jpg"

with open(json_path, "w", encoding="utf-8") as f:
    json.dump(recipes, f, indent=2)

print(f"Successfully mapped a total of {len(image_files)} unique images to the recipes.")
