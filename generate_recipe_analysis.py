import json

# Analysis text
analysis_text = """# Analysis of Indian Recipe Search Trends & Healthy Alternatives

## 1. Search Trend Analysis in India
Indian cuisine is highly diverse, and search trends reflect a mix of traditional comfort foods and a growing awareness of health and fitness. 
The most searched recipes typically include:
- **Comfort & Festive Foods:** Biryani, Butter Chicken, Samosa, Chole Bhature, Paneer Tikka Masala, Gulab Jamun, and Jalebi.
- **Everyday Staples:** Dal Makhani, Palak Paneer, Aloo Gobi, Roti, and Parathas.
- **Breakfast Items:** Poha, Upma, Idli, Dosa, and Chilla.

## 2. The Shift Towards Healthy Eating
With rising awareness around lifestyle diseases (diabetes, PCOS, obesity), the search intent is shifting towards:
- **Weight Loss Recipes:** Low-calorie, high-protein, and low-carb meals.
- **Millet-Based Foods:** Ragi, Jowar, and Bajra replacing refined wheat (Maida) and white rice.
- **Air-Fried/Baked Alternatives:** Baked samosas, roasted makhana, and air-fried tikkis instead of deep-fried snacks.
- **Vegan & Dairy-Free:** Plant-based alternatives using tofu, soy, and almond/coconut milk.

## 3. Filtering Strategy for 300 Healthy Recipes
To filter these searches into a curated list of **300 Healthy Indian Recipes**, we applied the following criteria:
1. **Low Glycemic Index:** Swapped refined carbs (white rice, maida) with whole grains, brown rice, oats, and millets.
2. **High Protein:** Included lentils (dals), legumes (chickpeas, kidney beans), sprouts, paneer, tofu, and egg/lean meats.
3. **Low Saturated Fat:** Eliminated heavy cream, excessive butter/ghee, and deep-frying. Focus is on dry roasting, steaming, and stir-frying.
4. **Nutrient-Dense:** High inclusion of leafy greens (palak, methi) and seasonal vegetables.
5. **No Refined Sugar:** Swapped refined sugar with natural sweeteners (jaggery, dates) in extreme moderation, or eliminated entirely.

---

## 🥗 Curated List of 300 Healthy Indian Recipes

"""

# Recipe Categories
categories = {
    "🌅 Healthy Breakfast (50 Recipes)": [
        "Oats Idli", "Ragi Dosa", "Moong Dal Chilla", "Vegetable Poha", "Daliya Upma", "Besan Chilla", "Quinoa Upma",
        "Sprouts Salad", "Methi Thepla (Low Oil)", "Palak Paratha", "Multigrain Idli", "Jowar Dosa", "Bajra Rotla",
        "Pesarattu (Green Gram Dosa)", "Appam (with Vegetable Stew)", "Neer Dosa", "Rava Idli (with veggies)", "Sattu Ka Paratha", "Oats Cheela",
        "Millet Pongal", "Kanda Poha", "Matar Poha", "Brown Rice Poha", "Red Poha", "Sweet Potato Tikki (Air Fried)",
        "Makhana Porridge", "Ragi Malt", "Oats Smoothie", "Almond Banana Milkshake (No Sugar)", "Green Gram Dosa",
        "Horsegram Idli", "Adai Dosa", "Akki Roti (with added greens)", "Sorghum Pancake", "Amaranth Porridge", "Buckwheat Upma",
        "Chia Seed Pudding (Indian Spiced)", "Vegetable Sevai (Vermicelli)", "Egg White Omelette with Spinach", "Mushroom Omelette", "Tomato Omelette (Besan based)",
        "Spinach Mushroom Scramble", "Tofu Bhurji", "Paneer Bhurji (Low Fat)", "Soya Bhurji", "Idiyappam (with Kadala Curry)", "Ragi Puttu",
        "Kuttu Ka Paratha", "Singhare Ka Cheela", "Mooli Thepla (Stuffed Radish Flatbread)"
    ],
    "🍲 Dals & Legumes - Protein Packed (50 Recipes)": [
        "Dal Tadka (Minimal Oil)", "Moong Dal Tadka", "Masoor Dal (Red Lentil)", "Toor Dal", "Dal Palak (Spinach Lentils)", "Dal Methi", "Panchmel Dal (Five Lentil Soup)",
        "Chana Dal Palak", "Lauki Chana Dal (Bottle Gourd Lentils)", "Dal Makhani (No Cream, Skim Milk)", "Rajma Masala (Kidney Beans)", "Chole Masala (Chickpeas, Low Oil)",
        "Lobia Curry (Black-Eyed Peas)", "Kala Chana Curry (Black Chickpeas)", "Green Moong Curry", "Moth Bean Curry (Matki)", "Sprouted Moong Curry",
        "Horsegram Rasam (Kollu Rasam)", "Tomato Rasam", "Pepper Rasam", "Lemon Rasam", "Dal Dhokli (Whole Wheat)", "Sindhi Dal Pakwan (Baked Pakwan)",
        "Gujarati Trevti Dal", "Bengali Cholar Dal", "Amritsari Dal (Low Butter)", "Dal Fry", "Lasooni Dal (Garlic Lentils)", "Dhaba Style Dal (Olive Oil substitute)",
        "Pahari Dal", "Moong Dal with Dill Leaves", "Toor Dal with Cabbage", "Spinach Urad Dal", "Yellow Peas Dal (Matar Dal)",
        "Black Eyed Peas Sundal", "Chickpea Stew", "Pinto Bean Curry", "Adzuki Bean Curry", "Mixed Sprout Curry",
        "Kulith Saar (Horsegram Soup)", "Mudda Pappu", "Mango Dal (Mamidi Kaya Pappu)", "Gongura Pappu (Sorrel Leaves Dal)", "Dosakaya Pappu (Cucumber Dal)", "Thotakura Pappu (Amaranth Dal)",
        "Palak Pappu", "Tomato Pappu", "Dalma (Odisha Mixed Dal with Veggies)", "Chhoda Matar Dal", "Sookhi Urad Dal (Dry Black Lentils)"
    ],
    "🥦 Vegetable Curries & Sabzi - High Fiber (50 Recipes)": [
        "Bhindi Masala (Air Fried/Stir Fried)", "Karela Sabzi (Bitter Gourd)", "Lauki Ki Sabzi (Bottle Gourd)", "Tori Ki Sabzi (Ridge Gourd)", "Parwal Sabzi (Pointed Gourd)",
        "Aloo Gobi (Baked Cauliflower & Potatoes)", "Baingan Bharta (Roasted Eggplant)", "Jeera Aloo (Boiled & Tossed)", "Mix Veg Curry", "Palak Paneer (Low Fat Paneer)",
        "Mutter Paneer (No Cream)", "Kadai Paneer (Healthy, Less Oil)", "Tofu Tikka Masala (Dairy-Free)", "Soya Chunks Curry",
        "Mushroom Mutter", "Broccoli Stir Fry (Indian Style)", "Cabbage Poriyal", "Carrot Beans Poriyal", "Beetroot Thoran",
        "Snake Gourd Curry", "Ridge Gourd Sabzi", "Ash Gourd Kootu", "Pumpkin Olan", "Raw Banana Kootu",
        "Yam Stew (Suran)", "Jackfruit Stir Fry (Kathal)", "Colocasia Roast (Air Fried Arbi)", "Drumstick Curry", "Tinda Masala (Apple Gourd)",
        "Pointed Gourd Curry", "Bitter Gourd Stir Fry (Low Oil)", "Cluster Beans Curry (Gawar Phali)", "Broad Beans Sabzi",
        "French Beans Poriyal", "Snow Peas Sabzi", "Snap Peas Stir Fry", "Cauliflower Sabzi (Without potato)",
        "Cabbage Peas Sabzi", "Capsicum Besan Masala", "Kohlrabi Curry (Ganth Gobi)", "Turnip Sabzi (Shalgam)", "Radish Greens Sabzi (Mooli Patta)",
        "Mustard Greens Curry (Sarson Ka Saag - No Butter)", "Amaranth Leaves Stir Fry (Chaulai)", "Fenugreek Leaves Sabzi (Methi)", "Spinach Stir Fry (Palak)",
        "Dill Leaves Sabzi (Suva)", "Spring Onion Sabzi", "Mushroom Pepper Fry", "Baby Corn Masala"
    ],
    "🌾 Healthy Grains & Breads - Complex Carbs (50 Recipes)": [
        "Brown Rice Pulao", "Red Rice", "Black Rice", "Quinoa Pulao", "Millet Bisi Bele Bath", "Oats Khichdi",
        "Daliya Khichdi (Broken Wheat)", "Bajra Khichdi", "Jowar Roti", "Bajra Roti", "Ragi Roti", "Makki Ki Roti (Cornmeal)",
        "Multigrain Roti", "Oats Roti", "Amaranth Roti", "Buckwheat Roti", "Water Chestnut Roti (Singhara)",
        "Sorghum Roti", "Pearl Millet Roti", "Finger Millet Roti", "Foxtail Millet Rice", "Kodo Millet Pulao",
        "Little Millet Upma", "Barnyard Millet Pulao", "Proso Millet Dosa", "Brown Rice Vegetable Biryani",
        "Vegetable Pulao (Less Oil)", "Peas Pulao", "Mushroom Pulao", "Paneer Pulao", "Soya Pulao",
        "Sprouts Pulao", "Cabbage Rice", "Carrot Rice", "Beetroot Rice", "Spinach Rice", "Mint Rice",
        "Coriander Rice", "Curry Leaves Rice", "Lemon Rice (with Brown Rice)", "Tamarind Rice (Brown Rice)", "Raw Mango Rice",
        "Coconut Rice (Less Oil)", "Sesame Rice", "Peanut Rice", "Flaxseed Rice", "Jeera Brown Rice",
        "Tomato Brown Rice", "Capsicum Brown Rice", "Sweet Corn Pulao"
    ],
    "🥙 Snacks, Soups & Salads - Guilt-Free (50 Recipes)": [
        "Roasted Makhana (Fox Nuts)", "Baked Samosa (Whole Wheat Crust)", "Baked Onion Kachori", "Nylon Khaman Dhokla", "Moong Dal Dhokla", "Handvo (Mixed Lentil Cake)", "Muthiya (Steamed Veg Dumplings)",
        "Patra (Colocasia Leaves Roll)", "Sprouts Chaat", "Kala Chana Chaat", "Boiled Peanut Salad", "Sweet Corn Salad", "Moong Dal Chaat",
        "Mixed Fruit Salad", "Kosambari (Cucumber & Dal Salad)", "Khamang Kakdi (Maharashtrian Cucumber Salad)", "Tomato Soup (Clear)", "Mixed Veg Clear Soup", "Spinach Soup",
        "Mushroom Soup (No Cream)", "Sweet Corn Soup", "Hot and Sour Soup (Healthy)", "Manchow Soup (Baked Noodles)", "Clear Lentil Soup",
        "Broccoli Almond Soup", "Pumpkin Soup", "Carrot Soup", "Beetroot Soup", "Drumstick Soup (Moringa)",
        "Bottle Gourd Soup", "Cabbage Soup", "Lemon Coriander Soup", "Garlic Pepper Soup", "Paya Soup (Healthy Bone Broth)",
        "Chicken Clear Soup", "Toor Dal Soup", "Oats Vegetable Soup", "Quinoa Broth", "Barley Soup", "Roasted Chickpeas",
        "Baked Sweet Potato Wedges", "Air Fried Banana Chips", "Oats Cookies (No Sugar)", "Ragi Almond Cookies",
        "Multigrain Crackers", "Whole Wheat Khakhra", "Baked Mathri", "Roasted Poha Chivda", "Diet Bhel Puri", "Cucumber Boat Snacks"
    ],
    "🍹 Beverages & Desserts - Sugar-Free/Low-Calorie (50 Recipes)": [
        "Masala Chaas (Spiced Buttermilk)", "Mint Chaas", "Jeera Water", "Saunf Water (Fennel)", "Ajwain Water (Carom Seeds)", "Dhaniya Water (Coriander)",
        "Tulsi Water (Basil)", "Amla Juice (Gooseberry)", "Ginger Lemon Tea", "Lemongrass Tea", "Hibiscus Tea", "Green Tea (No Sugar)",
        "Matcha Tea", "Black Tea (Spiced)", "Oolong Tea", "Chamomile Tea", "Peppermint Tea", "Jasmine Tea",
        "Rose Petal Tea", "Turmeric Latte (Haldi Doodh - Low Fat)", "Almond Milk (Unsweetened)", "Soy Milk", "Oat Milk",
        "Coconut Milk", "Cashew Milk", "Ragi Malt (Salty version)", "Sattu Sharbat (Roasted Gram Flour)", "Aam Panna (Stevia/Jaggery)", "Kokum Sharbat", "Bael Sharbat (Wood Apple)",
        "Nimbu Pani (Lemonade with Rock Salt)", "Jal Jeera", "Sugarcane Juice (In Moderation)", "Tender Coconut Water", "Aloe Vera Juice",
        "Watermelon Mint Juice", "Muskmelon Juice", "Papaya Smoothie", "Pineapple Juice", "Pomegranate Juice",
        "Orange Juice", "Mosambi Juice (Sweet Lime)", "Carrot Beetroot Tomato (CBT) Juice", "Apple Carrot Ginger Juice", "Green Detox Juice (Spinach/Cucumber)",
        "Dates & Nut Ladoo (No Sugar)", "Baked Gajar Halwa (No Khoya, Jaggery)", "Apple Rabdi (Low Fat Milk)", "Lauki Kheer (Stevia)", "Makhana Kheer"
    ]
}

with open("Healthy_Indian_Recipes_Analysis.md", "w", encoding="utf-8") as f:
    f.write(analysis_text)
    
    recipe_count = 0
    for category, recipes in categories.items():
        f.write(f"### {category}\n")
        for i, recipe in enumerate(recipes, 1):
            recipe_count += 1
            f.write(f"{i}. {recipe}\n")
        f.write("\n")
        
    f.write(f"\n**Total Recipes Curated: {recipe_count}**\n")
    
print("Generated Healthy_Indian_Recipes_Analysis.md successfully!")
