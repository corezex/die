# Recipe Image Generation Status & Instructions for Next Agent

## Project Context
The user requested the generation of **538 healthy Indian recipes** and their corresponding AI-generated food photography.
The recipes and JSON structure are complete. Because of the image generation caps (10 per session), the user is generating images across multiple chat sessions and pushing them to various remote branches.

## Current Progress Status
- **Total Recipes in Database:** 538 recipes
- **Location of Database:** `app/data/recipes.json`
- **Location for Generated Images:** `public/image/recipes/`
- **Current Number of Unique Mapped Images:** 283 images (files present in `public/image/recipes/`)
- **Remaining Images to Generate:** 417 recipes still on fallback `/image/homeimage.jpg` (generation rate: 10 per session)
- **Mapped in recipes.json (real image paths):** 121 recipes
- **Fallback to `/image/homeimage.jpg`:** 417 recipes (these are the ones whose images are not generated yet)

---

## Session Log (2026-08-05 — branch arena/019fd09d-die)

### Generation session 1 — Batch 1 (10 images) — DONE, pushed as `df02dca`
Generated AI food photography for these 10 recipes (all mapped to `recipes.json`):
almond-banana-milkshake-no-sugar, horsegram-idli, adai-dosa, akki-roti-with-added-greens, sorghum-pancake, amaranth-porridge, buckwheat-upma, vegetable-sevai-vermicelli, egg-white-omelette-with-spinach, mushroom-omelette.
- Image generation cap: **10 per session** (hit the limit; no more generations possible in this session).
- **To continue:** next session should generate the next 10 from the fallback list (recipes whose `coverImage` is `/image/homeimage.jpg`, in `recipes.json` order): tomato-omelette-besan-based, spinach-mushroom-scramble, tofu-bhurji, soya-bhurji, idiyappam-with-kadala-curry, ragi-puttu, kuttu-ka-paratha, singhare-ka-cheela, mooli-thepla-stuffed-radish-flatbread, dal-tadka-minimal-oil.
- Prompt style used: "Professional food photography of [dish], [description], healthy Indian breakfast, natural daylight, rustic wooden table, appetizing, overhead/45-degree angle".

### Fetch & consolidation session (earlier, same date)
- Fetched all remote branches (`origin/arena/019f9c0f-die`, `origin/arena/019fc7e0-die`, `origin/arena/019fc829-die`, `origin/arena/019fc83a-die`).
- Checked out `public/image/recipes/` (273 images) from the consolidation branch `origin/arena/019fc7e0-die` (its set is a superset; `019fc829-die` = 59 images and `019fc83a-die` = 273 images are both fully contained in it).
- Checked out `app/data/recipes.json` (538 recipes) and the static recipe pages (`app/recipe/[slug]/page.tsx`, `app/recipe/page.tsx`) from `origin/arena/019fc7e0-die`; deleted the obsolete client-side recipe files (`actions.ts`, `error.tsx`, `loading.tsx`, `recipe.tsx`, `layout.tsx`).
- Ran `map_all_images.py` (below) — exact slug match → substring match → fallback `/image/homeimage.jpg`.
- Verified with `npm run build`: 563 static pages generated, all 538 `/recipe/[slug]` pages SSG.
- Note: full build requires access to fonts.googleapis.com (Inter font). In sandboxes where Google Fonts is unreachable, temporarily swap the font in `app/layout.tsx` to verify the build, then revert.

---

## Instructions for the Next Agent

The user generates images in separate chat branches. When they open a new chat with you and say "I generated X images in other branches, please fetch and map them", you should:

### 1. Fetch from All Branches
Run `git fetch --all` to pull down the latest refs from the user's remote repository.

### 2. Extract Images from the Remote Branches
Locate the user's recent branches (e.g. via `git ls-remote --heads origin` or `git branch -r`). You can loop through these branches and checkout the `public/image/recipes/` directory directly into the current active branch.
Example:
```bash
# First make sure we have references to all origin branches locally
git fetch origin "refs/heads/*:refs/remotes/origin/*"

# Iterate over remote branches (excluding main/HEAD and the current active branch)
for branch in $(git branch -r | grep -v 'origin/HEAD' | grep -v 'origin/main' | grep -v "origin/$(git branch --show-current)"); do
  echo "Checking $branch for images..."
  git checkout $branch -- public/image/recipes/ 2>/dev/null || echo "No images in $branch"
done
```

### 3. Generate Mapping Script & Map the New Images
Create and run a python script to scan the `public/image/recipes/` directory and match every valid image to its corresponding recipe in `app/data/recipes.json` based on the slug.
*Note: Any recipe that does not have an image must safely default back to `/image/homeimage.jpg`.*

Here is the exact `map_all_images.py` script you should write and run:

```python
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
    else:
        # Try a substring match
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
            if recipe.get("coverImage") != "/image/homeimage.jpg":
                recipe["coverImage"] = "/image/homeimage.jpg"
                updated_count += 1

with open(json_path, "w", encoding="utf-8") as f:
    json.dump(recipes, f, indent=2)

print(f"Total images found in directory: {len(image_files)}")
print(f"Updated JSON with {updated_count} image mappings (or fallbacks).")
```

Run it:
```bash
python3 map_all_images.py
```

### 4. Verify and Build
Run `npm run build` to ensure the JSON mapping is valid and Next.js can generate the static pages.

### 5. Commit and Push
```bash
git add public/image/recipes/ app/data/recipes.json
git commit -m "Pull in newly generated recipe images from other branches and map to json"
git push origin <current-active-branch>
```
