import json

image_map = {
    "oats-idli": "/image/recipes/oats-idli.jpg",
    "ragi-dosa": "/image/recipes/ragi-dosa.jpg",
    "moong-dal-chilla": "/image/recipes/moong-dal-chilla.jpg",
    "vegetable-poha": "/image/recipes/vegetable-poha.jpg",
    "daliya-upma": "/image/recipes/daliya-upma.jpg",
    "besan-chilla": "/image/recipes/besan-chilla.jpg",
    "quinoa-upma": "/image/recipes/quinoa-upma.jpg",
    "sprouts-salad": "/image/recipes/sprouts-salad.jpg",
    "methi-thepla-low-oil": "/image/recipes/methi-thepla.jpg"
}

with open("app/data/recipes.json", "r", encoding="utf-8") as f:
    recipes = json.load(f)

updated_count = 0
for recipe in recipes:
    slug = recipe["slug"]
    if slug in image_map:
        recipe["coverImage"] = image_map[slug]
        updated_count += 1

with open("app/data/recipes.json", "w", encoding="utf-8") as f:
    json.dump(recipes, f, indent=2)

print(f"Successfully updated {updated_count} recipes with new images.")
