# Recipe Image Generation Status & Instructions for Next Agent

## Project Context
The user requested the generation of **538 healthy Indian recipes** and their corresponding AI-generated food photography. 
The recipes and JSON structure are complete. Because of the image generation caps (10 per session), the user is generating images across multiple chat sessions and pushing them to various remote branches.

## Current Progress Status
- **Total Recipes in Database:** 538 recipes
- **Location of Database:** `app/data/recipes.json`
- **Location for Generated Images:** `public/image/recipes/`
- **Current Number of Unique Mapped Images:** ~217 images
- **Remaining Images to Generate:** ~321 images

---

## Instructions for the Next Agent

The user generates images in separate chat branches. When they open a new chat with you and say "I generated X images in other branches, please fetch and map them", you should:

### 1. Fetch from All Branches
Run `git fetch --all` to pull down the latest refs from the user's remote repository.

### 2. Extract Images from the Remote Branches
Locate the user's recent branches (e.g. via `git ls-remote origin` or `git branch -r`). You can loop through these branches and checkout the `public/image/recipes/` directory directly into the current active branch.
Example:
```bash
mkdir -p temp_images && for branch in arena/branch-name-1 arena/branch-name-2; do
  git fetch origin $branch
  git checkout FETCH_HEAD -- public/image/recipes/ 2>/dev/null || echo "No images in $branch"
done
```

### 3. Map the New Images to the JSON Database
Run the `map_all_images.py` script. This script scans the `public/image/recipes/` directory and matches every valid image to its corresponding recipe in `app/data/recipes.json` based on the slug. 
*Note: Any recipe that does not have an image will safely default back to `/image/homeimage.jpg`.*

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
