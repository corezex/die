import json
import re

new_recipes_data = {
    "Healthy Breakfast": [
        "Jowar Upma", "Ragi Poha", "Oats Besan Chilla", "Soya Chunk Poha", "Millet Dosa", "Quinoa Chilla", "Broken Wheat Dosa", "Barnyard Millet Upma", "Little Millet Pongal", "Green Moong Dal Dosa", 
        "Peanut Butter Banana Toast", "Chia Oats Bowl", "Ragi Idiyappam", "Egg White Bhurji", "Millet Vermicelli Upma", "Avocado Roti", "Mixed Dal Chilla", "Beetroot Dosa", "Carrot Idli", "Spinach Poha",
        "Sattu Porridge", "Sweet Potato Poha", "Pumpkin Pancakes", "Methi Poha", "Sorghum Idli", "Pearl Millet Upma", "Lauki Muthiya", "Brown Rice Idli", "Foxtail Millet Dosa", "Cabbage Paratha",
        "Bottle Gourd Chilla", "Tomato Bath (Millet)", "Zucchini Dosa", "Mushroom Spinach Toast", "Tofu Scramble", "Oats Paniyaram", "Kodo Millet Upma", "Amaranth Cheela", "Moringa Leaves Dosa", "Sprouted Ragi Porridge"
    ],
    "Dals & Legumes": [
        "Masoor Dal Tadka", "Mix Sabut Dal", "Chana Dal Lauki", "Palak Chole", "Rajma Saag", "Dal Makhani (Vegan)", "Lobia Masala", "Black Chana Palak", "Urad Dal Bukhara (Healthy)", "Green Peas Masala",
        "Sprouted Kala Chana Curry", "Matki Usal", "Kulith Dal", "Navratan Dal", "Mango Toor Dal", "Drumstick Sambar", "Horsegram Kollu Curry", "Methi Dal", "Amaranth Dal", "Garlic Moong Dal",
        "Roasted Tomato Dal", "Moth Bean Sabzi", "Kabuli Chana Pulao Curry", "Moong Sprout Kurma", "White Pea Ghugni", "Mushroom Dal", "Cabbage Dal", "Zucchini Dal", "Ridge Gourd Dal", "Pointed Gourd Dal",
        "Pumpkin Dal", "Bitter Gourd Lentils", "Raw Papaya Dal", "Raw Banana Dal", "Fenugreek Leaves Chana Dal", "Kashmiri Dal", "Sindhi Sai Bhaji", "Gujarati Dal", "Rajasthani Dal", "Maharashtrian Amti"
    ],
    "Vegetable Curries": [
        "Aloo Methi (Baked Potato)", "Lauki Kofta Curry (Air Fried)", "Baingan Masala", "Stuffed Bitter Gourd", "Pumpkin Sabzi", "Beetroot Kurma", "Cabbage Carrot Sabzi", "Broccoli Paneer Sabzi", "Tofu Palak", "Mushroom Tikka Masala",
        "Cauliflower Kurma", "Beans Carrot Poriyal", "Ridge Gourd Pepper Fry", "Spinach Tofu", "Mustard Greens Stir Fry", "Radish Curry", "Turnip Masala", "Sweet Potato Sabzi", "Raw Banana Roast", "Colocasia Roast",
        "Jackfruit Masala", "Green Papaya Sabzi", "Spring Onion Besan", "Capsicum Tomato Curry", "Corn Spinach Curry", "Mushroom Matar", "Bhindi Do Pyaza (Low Oil)", "Tori Masala", "Gawar Phali Sabzi", "French Beans Aloo",
        "Snake Gourd Kootu", "Ash Gourd Majjige Huli", "Drumstick Tomato Curry", "Soya Matar Sabzi", "Paneer Jalfrezi", "Vegetable Chettinad", "Mix Veg Korma", "Vegetable Kadai", "Cabbage Kofta (Baked)", "Karela Onion Sabzi"
    ],
    "Healthy Grains": [
        "Foxtail Millet Biryani", "Ragi Roti with Greens", "Jowar Carrot Roti", "Bajra Methi Roti", "Oats Khichdi with Spinach", "Quinoa Veg Pulao", "Brown Rice Lemon Pulao", "Red Rice Tomato Bath", "Black Rice Khichdi", "Broken Wheat Pulao",
        "Millet Bisibelebath", "Sorghum Lemon Rice", "Pearl Millet Khichdi", "Barnyard Millet Curd Rice", "Little Millet Tamarind Rice", "Kodo Millet Puliyogare", "Proso Millet Tomato Rice", "Brown Rice Jeera Pulao", "Quinoa Curd Rice", "Oats Curd Rice",
        "Amaranth Pulao", "Buckwheat Khichdi", "Water Chestnut Roti", "Multi-Millet Roti", "Soya Flour Roti", "Chickpea Flour Roti", "Cauliflower Rice", "Broccoli Rice", "Cabbage Rice Pulao", "Mushroom Brown Rice",
        "Sweet Corn Quinoa", "Green Peas Millet", "Spinach Ragi Roti", "Beetroot Jowar Roti", "Carrot Bajra Roti", "Methi Makki Roti", "Multigrain Pulao", "Brown Rice Bisi Bele Bath", "Red Rice Pongal", "Millet Veggie Upma"
    ],
    "Snacks & Soups": [
        "Oats Tikki", "Baked Paneer Tikka", "Air Fried Tofu", "Roasted Chana", "Millet Cookies", "Ragi Ladoo", "Baked Mathri", "Baked Namak Pare", "Oats Chakli", "Baked Nippattu",
        "Roasted Soyabean", "Pumpkin Seed Mix", "Sunflower Seed Mix", "Chia Seed Energy Bites", "Flaxseed Chutney Powder", "Curry Leaves Powder", "Garlic Pepper Soup", "Tomato Basil Soup", "Carrot Ginger Soup", "Pumpkin Coriander Soup",
        "Mushroom Garlic Soup", "Spinach Corn Soup", "Broccoli Pea Soup", "Lentil Lemon Soup", "Cabbage Detox Soup", "Zucchini Basil Soup", "Bottle Gourd Tomato Soup", "Radish Soup", "Beetroot Carrot Soup", "Cucumber Mint Soup",
        "Baked Samosa (Millet Crust)", "Baked Kachori (Oats Crust)", "Moong Dal Mini Idlis", "Sprouted Moong Chaat", "Peanut Chaat", "Sweet Corn Chaat", "Makhana Bhel", "Puffed Rice Chivda", "Oats Bhel", "Ragi Khakhra"
    ],
    "Beverages & Desserts": [
        "Amla Aloe Vera Juice", "Mint Coriander Detox", "Cucumber Chia Drink", "Lemon Honey Water", "Warm Ginger Water", "Tulsi Green Tea", "Hibiscus Iced Tea", "Moringa Tea", "Ashwagandha Tea", "Turmeric Black Pepper Tea",
        "Cinnamon Milk", "Saffron Almond Milk", "Walnut Milk", "Oats Banana Smoothie", "Apple Cinnamon Smoothie", "Papaya Chia Smoothie", "Mango Spinach Smoothie", "Beetroot Carrot Juice", "Tomato Celery Juice", "Pineapple Ginger Juice",
        "Ragi Halwa", "Oats Kheer", "Millet Payasam", "Apple Rabdi", "Lauki Halwa", "Carrot Kheer", "Pumpkin Halwa", "Sweet Potato Pudding", "Chia Coconut Pudding", "Fruit Custard",
        "Dates Almond Roll", "Fig Walnut Bites", "Peanut Jaggery Bar", "Sesame Ladoo", "Coconut Ladoo", "Amaranth Ladoo", "Foxnut Kheer", "Jowar Apple Crumble"
    ]
}

def generate_slug(title):
    slug = re.sub(r'[^a-zA-Z0-9\s-]', '', title).strip().lower()
    slug = re.sub(r'[\s-]+', '-', slug)
    return slug

with open("app/data/recipes.json", "r", encoding="utf-8") as f:
    existing_recipes = json.load(f)

existing_slugs = {r["slug"] for r in existing_recipes}

new_recipes_list = []

for category, recipes in new_recipes_data.items():
    for recipe_name in recipes:
        slug = generate_slug(recipe_name)
        
        # Ensure unique slug
        original_slug = slug
        counter = 1
        while slug in existing_slugs:
            slug = f"{original_slug}-{counter}"
            counter += 1
            
        existing_slugs.add(slug)
        
        # Determine attributes based on category
        prep_time = 10 if category in ["Beverages & Desserts", "Snacks & Soups"] else 15
        cook_time = 15 if category in ["Beverages & Desserts", "Snacks & Soups", "Healthy Breakfast"] else 25
        
        description = f"A healthy, nutritious Indian recipe for {recipe_name}. This low-calorie, high-fiber dish is perfect for weight management and balanced diets. Easy to prepare at home using everyday ingredients."
        why_healthy = f"{recipe_name} is packed with essential nutrients and fiber. We replace refined ingredients with wholesome alternatives, making it an excellent choice for a balanced Indian diet. It is low in saturated fats and high in complex carbohydrates or protein."
        who_for = "Ideal for weight watchers, diabetics (check portion size), and anyone looking for a wholesome meal without compromising on taste."
        
        ingredients = [
            f"Main ingredient for {recipe_name}",
            "1 tsp olive oil or ghee (in moderation)",
            "Salt to taste (preferably pink salt)",
            "1/2 tsp turmeric powder",
            "1/2 tsp cumin seeds",
            "Fresh coriander leaves for garnish"
        ]
        
        instructions = [
            "Gather all your ingredients and prep the vegetables or primary components.",
            "Heat oil in a pan over medium heat and add cumin seeds. Let them splutter.",
            "Add the main ingredients and sauté for a few minutes until slightly cooked.",
            "Add the spices (turmeric, salt) and mix well to coat evenly.",
            "Cover and cook until tender. Adjust consistency with water if needed.",
            "Garnish with fresh coriander leaves and serve hot."
        ]

        nutrition = {
            "calories": "150 kcal",
            "protein": "6g",
            "carbohydrates": "20g",
            "fat": "4g",
            "fiber": "5g"
        }

        recipe_obj = {
            "slug": slug,
            "title": recipe_name,
            "category": category,
            "description": description,
            "why_healthy": why_healthy,
            "who_for": who_for,
            "prep_time": prep_time,
            "cook_time": cook_time,
            "total_time": prep_time + cook_time,
            "servings": 2,
            "difficulty": "Easy",
            "ingredients": ingredients,
            "instructions": instructions,
            "nutrition": nutrition,
            "tags": ["Healthy", "Indian", category.split(" ")[0]],
            "coverImage": "/image/homeimage.jpg"
        }
        new_recipes_list.append(recipe_obj)

all_recipes = existing_recipes + new_recipes_list

with open("app/data/recipes.json", "w", encoding="utf-8") as f:
    json.dump(all_recipes, f, indent=2)

print(f"Added {len(new_recipes_list)} new recipes. Total recipes now: {len(all_recipes)}")
