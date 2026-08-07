import type { StaticImageData } from "next/image";
import supportImage from "@/public/image/Servicesimg1.jpg";
import ozempicHero from "@/public/image/glp1-ozempic-hero.jpg";
import wegovyHero from "@/public/image/glp1-wegovy-hero.jpg";
import rybelsusHero from "@/public/image/glp1-rybelsus-hero.jpg";
import mounjaroHero from "@/public/image/glp1-mounjaro-hero.jpg";
import zepboundHero from "@/public/image/glp1-zepbound-hero.jpg";
import saxendaHero from "@/public/image/glp1-saxenda-hero.jpg";
import victozaHero from "@/public/image/glp1-victoza-hero.jpg";
import trulicityHero from "@/public/image/glp1-trulicity-hero.jpg";
import byettaHero from "@/public/image/glp1-byetta-hero.jpg";
import bydureonHero from "@/public/image/glp1-bydureon-hero.jpg";
import adlyxinHero from "@/public/image/glp1-adlyxin-hero.jpg";
import foundayoHero from "@/public/image/glp1-foundayo-hero.jpg";
import ozempicSupport from "@/public/image/glp1-ozempic-support.jpg";
import wegovySupport from "@/public/image/glp1-wegovy-support.jpg";
import rybelsusSupport from "@/public/image/glp1-rybelsus-support.jpg";
import mounjaroSupport from "@/public/image/glp1-mounjaro-support.jpg";
import zepboundSupport from "@/public/image/glp1-zepbound-support.jpg";
import saxendaSupport from "@/public/image/glp1-saxenda-support.jpg";
import victozaSupport from "@/public/image/glp1-victoza-support.jpg";
import trulicitySupport from "@/public/image/glp1-trulicity-support.jpg";
import byettaSupport from "@/public/image/glp1-byetta-support.jpg";
import bydureonSupport from "@/public/image/glp1-bydureon-support.jpg";
import adlyxinSupport from "@/public/image/glp1-adlyxin-support.jpg";
import foundayoSupport from "@/public/image/glp1-foundayo-support.jpg";

type AccentTheme = {
  panel: string;
  badge: string;
  button: string;
  subtle: string;
  border: string;
  text: string;
};

export type MedicationFaq = {
  question: string;
  answer: string;
};

export type MedicationPoint = {
  title: string;
  text: string;
};

export type GlpMedicationPage = {
  slug: string;
  brand: string;
  generic: string;
  family: string;
  route: string;
  usedFor: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  cardDescription?: string;
  menuLabel?: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  quickAnswer: string;
  intro: string[];
  nutritionPriorities: MedicationPoint[];
  dietitianSupport: MedicationPoint[];
  directAnswers: MedicationPoint[];
  talkToPrescriber: string[];
  ctaTitle: string;
  ctaText: string;
  faqs: MedicationFaq[];
  heroImage: StaticImageData;
  supportImage: StaticImageData;
  accent: AccentTheme;
};

const semaglutideTheme: AccentTheme = {
  panel: "bg-[#262262] text-white",
  badge: "bg-emerald-100 text-emerald-800 border border-emerald-200",
  button: "bg-emerald-600 hover:bg-emerald-700",
  subtle: "bg-emerald-50",
  border: "border-emerald-100",
  text: "text-emerald-700",
};

const tirzepatideTheme: AccentTheme = {
  panel: "bg-[#1f3b5b] text-white",
  badge: "bg-sky-100 text-sky-800 border border-sky-200",
  button: "bg-sky-600 hover:bg-sky-700",
  subtle: "bg-sky-50",
  border: "border-sky-100",
  text: "text-sky-700",
};

const liraglutideTheme: AccentTheme = {
  panel: "bg-[#3a2352] text-white",
  badge: "bg-violet-100 text-violet-800 border border-violet-200",
  button: "bg-violet-600 hover:bg-violet-700",
  subtle: "bg-violet-50",
  border: "border-violet-100",
  text: "text-violet-700",
};

const classicTheme: AccentTheme = {
  panel: "bg-[#374151] text-white",
  badge: "bg-amber-100 text-amber-900 border border-amber-200",
  button: "bg-amber-600 hover:bg-amber-700",
  subtle: "bg-amber-50",
  border: "border-amber-100",
  text: "text-amber-700",
};

const oralTheme: AccentTheme = {
  panel: "bg-[#0f4c5c] text-white",
  badge: "bg-teal-100 text-teal-800 border border-teal-200",
  button: "bg-teal-600 hover:bg-teal-700",
  subtle: "bg-teal-50",
  border: "border-teal-100",
  text: "text-teal-700",
};

export const glpMedications: GlpMedicationPage[] = [
  {
    slug: "ozempic",
    brand: "Ozempic",
    generic: "Semaglutide",
    family: "Semaglutide",
    route: "Weekly injection",
    usedFor: "FDA-approved for type 2 diabetes; some people also ask about nutrition support while using it for physician-guided weight management.",
    primaryKeyword: "Ozempic diet plan",
    secondaryKeywords: ["what to eat on Ozempic", "dietitian for Ozempic users", "Ozempic meal plan"],
    cardDescription: "Support for smaller meals, protein intake, hydration and blood-sugar-friendly food choices while taking Ozempic.",
    menuLabel: "Ozempic",
    metaTitle: "Ozempic Diet Plan: What to Eat on Ozempic",
    metaDescription:
      "Need an Ozempic diet plan? Get dietitian-led nutrition support for people taking Ozempic in Mumbai, Thane or online across India. DietFiniti does not sell or prescribe medication.",
    heroTitle: "Ozempic diet plan and nutrition support",
    quickAnswer:
      "If you are taking Ozempic, the nutrition goal is usually not to eat less and less. The goal is to eat comfortably, keep protein and hydration consistent, support blood-sugar-friendly choices and avoid a pattern where nausea, constipation or very low intake make the routine harder to sustain.",
    intro: [
      "On Ozempic, many people notice earlier fullness, smaller appetite and less interest in larger meals. The challenge is usually learning how to keep meals comfortable, balanced and regular without drifting into very low intake.",
      "DietFiniti provides dietitian support for people already taking Ozempic under medical supervision in Mumbai, Thane and online across India. We do not sell medication and we do not change prescribed doses. The focus is practical nutrition you can actually follow.",
    ],
    nutritionPriorities: [
      { title: "Keep protein visible in the day", text: "A lighter appetite can make people skip dal, curd, eggs, paneer, tofu, fish or chicken without noticing. Protein planning can help you feel steadier and support body composition during weight change." },
      { title: "Build gentler meals when nausea is present", text: "Very greasy, very spicy or very large meals can feel harder on days when Ozempic side effects are stronger. Softer portions, slower eating and simple combinations often feel easier." },
      { title: "Support blood-sugar-friendly meals", text: "Because Ozempic is prescribed for type 2 diabetes, food choices often need to work for both appetite changes and glucose awareness. Balanced meals usually work better than long gaps followed by overeating." },
      { title: "Prevent dehydration and constipation", text: "Low intake, less thirst and nausea can all make fluid and fibre harder to manage. A plan for fluids, fruit, vegetables and easy fibre sources helps many people stay more comfortable." },
    ],
    dietitianSupport: [
      { title: "Meal structure around your real routine", text: "Work shifts, commuting, family meals and diabetes care all affect what is realistic. A personalised plan is usually easier to maintain than generic Ozempic meal charts online." },
      { title: "Portion guidance without fear", text: "People often swing between over-restricting and comfort eating. Dietitian support helps you recognise enough food, not just less food." },
      { title: "Practical Indian food swaps", text: "The right pattern may be khichdi, curd rice, dal-chawal with extra protein, poha with sprouts, or a lighter roti-sabzi combination—not imported diet trends that do not fit your kitchen." },
      { title: "Support between prescriber visits", text: "Medication decisions stay with your doctor. Nutrition support helps you handle the everyday questions that come up between appointments." },
    ],
    directAnswers: [
      { title: "What should you eat on Ozempic?", text: "Meals are often easiest when they include protein, a manageable portion of carbohydrate, vegetables or fruit, and enough fluid across the day. Very heavy meals may feel harder for some people." },
      { title: "Can a dietitian help if you feel too full to eat?", text: "Yes. The work is usually about redistributing food, planning lighter but more nourishing meals, and making sure low intake does not become a habit." },
      { title: "Is an Ozempic diet plan only for weight loss?", text: "No. People also need support with blood-sugar-friendly meal timing, nausea-friendly foods, constipation support and learning how to eat regularly again." },
    ],
    talkToPrescriber: [
      "You cannot keep fluids down or you are vomiting repeatedly.",
      "You have severe abdominal pain, persistent worsening side effects or signs of dehydration.",
      "You are having frequent low blood sugars or your diabetes routine is no longer working well.",
      "You are unsure how Ozempic fits with other medications, planned procedures or your current medical condition.",
    ],
    ctaTitle: "Need help building an Ozempic-friendly eating routine?",
    ctaText:
      "DietFiniti can help you turn reduced appetite into a more balanced routine with protein, hydration and realistic Indian meals—without pretending to replace your prescriber.",
    faqs: [
      { question: "Can DietFiniti prescribe Ozempic?", answer: "No. DietFiniti does not prescribe or sell Ozempic. This page is for dietitian-led nutrition support for people who are already taking the medication under medical supervision." },
      { question: "What are common nutrition issues people face on Ozempic?", answer: "Common concerns include poor appetite, nausea, constipation, long gaps between meals, low protein intake and uncertainty about what to eat when blood sugar and weight goals are both in the picture." },
      { question: "Can I still eat Indian food on Ozempic?", answer: "Yes. Most people do better with practical Indian meals they can repeat consistently. The focus is usually on meal composition, comfort, portion fit and regularity—not on avoiding entire cuisines." },
      { question: "Is an Ozempic meal plan the same for everyone?", answer: "No. Someone taking Ozempic for type 2 diabetes, someone with shift work and someone with strong nausea will need different food structure, timing and support." },
    ],
    heroImage: ozempicHero,
    supportImage: ozempicSupport,
    accent: semaglutideTheme,
  },
  {
    slug: "wegovy",
    brand: "Wegovy",
    generic: "Semaglutide",
    family: "Semaglutide",
    route: "Weekly injection",
    usedFor: "FDA-approved for chronic weight management and for reducing cardiovascular risk in certain adults with overweight or obesity and cardiovascular disease.",
    primaryKeyword: "Wegovy diet plan",
    secondaryKeywords: ["what to eat on Wegovy", "dietitian for Wegovy users", "Wegovy meal plan"],
    menuLabel: "Wegovy",
    metaTitle: "Wegovy Diet Plan: What to Eat on Wegovy",
    metaDescription:
      "Searching for a Wegovy diet plan? DietFiniti offers nutrition support for people taking Wegovy in Mumbai, Thane and online across India. We do not sell or prescribe medication.",
    heroTitle: "Wegovy diet plan and nutrition support",
    quickAnswer:
      "A useful Wegovy diet plan usually focuses on smaller balanced meals, enough protein, enough fluid and a routine you can keep up even when appetite is low. The aim is not to live on almost nothing; it is to create a safer and more sustainable pattern while using the medication.",
    intro: [
      "On Wegovy, people often need help balancing reduced appetite with enough nourishment. The practical questions are usually about smaller meals, protein, hydration and how to eat normally around work, travel and family food.",
      "DietFiniti supports people who are already taking Wegovy and want practical dietitian guidance in Mumbai, Thane or online across India. We do not sell Wegovy and we do not advise on dosing. We help you build an eating pattern around real food and real routines.",
    ],
    nutritionPriorities: [
      { title: "Protect protein while body weight changes", text: "Many people taking Wegovy want to lose weight but not feel weak. Regular protein planning can help meals stay more nourishing even when overall intake drops." },
      { title: "Reduce the ‘nothing all day, too much at night’ cycle", text: "Strong appetite suppression can lead to long daytime gaps. That often backfires later. Even light meals or planned mini-meals can be more comfortable than accidental under-eating." },
      { title: "Make fibre practical, not overwhelming", text: "Wegovy users often need fibre, but very high-fibre meals all at once may not feel good. Building it gradually through fruit, vegetables, oats, dals and seeds is often easier." },
      { title: "Support hydration and satiety separately", text: "People sometimes confuse fullness and fluid needs. A hydration plan matters even when thirst feels low." },
    ],
    dietitianSupport: [
      { title: "Weight-loss support without crash dieting", text: "A dietitian can help you avoid turning Wegovy into an excuse for extreme restriction, which often hurts energy, social eating and long-term consistency." },
      { title: "Travel, restaurant and family-meal strategies", text: "A realistic plan includes what happens on busy days, at events, during travel or when the household is eating something different from your planned meal." },
      { title: "Support for side-effect-friendly meal ideas", text: "Simple foods, lighter cooking methods and portion changes are often more useful than trendy detox plans." },
      { title: "A path toward maintenance habits", text: "The long-term skill is learning how to eat well consistently, not only how to eat while appetite is very low." },
    ],
    directAnswers: [
      { title: "What is the best diet while taking Wegovy?", text: "Usually the best diet is the one you can follow repeatedly: protein-forward, portion-aware, hydration-friendly and built from familiar meals instead of all-or-nothing restrictions." },
      { title: "Can Wegovy users skip meals?", text: "Some people can tolerate lighter intake, but frequent accidental meal skipping can reduce protein, fibre and overall nourishment. Many do better with planned lighter meals rather than complete gaps." },
      { title: "Why work with a dietitian if Wegovy already reduces appetite?", text: "Because appetite reduction does not automatically create a balanced routine. You still need support for protein, meal quality, side effects, social eating and long-term habits." },
    ],
    talkToPrescriber: [
      "You have severe or worsening gastrointestinal symptoms.",
      "You are faint, very weak, or unable to maintain adequate fluids.",
      "You have chest symptoms, persistent reflux or new symptoms you are unsure about.",
      "You are considering stopping, restarting or changing the medication without guidance.",
    ],
    ctaTitle: "Want a realistic Wegovy meal structure?",
    ctaText:
      "DietFiniti can help you plan smaller, steadier meals and high-protein Indian options that work alongside Wegovy and your existing medical care.",
    faqs: [
      { question: "Do you sell or supply Wegovy?", answer: "No. DietFiniti does not sell, prescribe or supply Wegovy. We provide nutrition support for people who are already using it under medical care." },
      { question: "What do people usually want help with on Wegovy?", answer: "Common requests include what to eat when appetite is low, how to hit protein targets, what to do for constipation or nausea, and how to make social or family meals easier." },
      { question: "Can a Wegovy diet plan include regular Indian meals?", answer: "Yes. Many people do best when the plan uses familiar foods such as dal, curd, eggs, paneer, rotis, rice, vegetables, fruit and simple snacks in portions that feel manageable." },
      { question: "Is Wegovy nutrition support only for people trying to lose more weight?", answer: "No. It can also be useful for preserving nourishment, improving meal quality and building sustainable eating habits while you are on the medication." },
    ],
    heroImage: wegovyHero,
    supportImage: wegovySupport,
    accent: semaglutideTheme,
  },
  {
    slug: "rybelsus",
    brand: "Rybelsus",
    generic: "Semaglutide",
    family: "Semaglutide",
    route: "Daily oral tablet",
    usedFor: "FDA-approved oral semaglutide for type 2 diabetes. It has specific timing instructions around the morning dose.",
    primaryKeyword: "Rybelsus diet plan",
    secondaryKeywords: ["what to eat on Rybelsus", "Rybelsus meal plan", "dietitian for Rybelsus users"],
    menuLabel: "Rybelsus",
    metaTitle: "Rybelsus Diet Plan: What to Eat on Rybelsus",
    metaDescription:
      "Get a practical Rybelsus diet plan with dietitian support for people taking Rybelsus in Mumbai, Thane and online across India. DietFiniti does not sell or prescribe medication.",
    heroTitle: "Rybelsus diet plan and nutrition support",
    quickAnswer:
      "With Rybelsus, food questions are often about timing as much as ingredients. Because it is an oral GLP-1 medication, many people need help creating a morning routine that fits the tablet instructions and still leads into a comfortable, balanced breakfast later.",
    intro: [
      "With Rybelsus, food planning often revolves around the morning routine. Many people need a breakfast pattern that feels comfortable, fits the medication timing and still supports a steady day.",
      "DietFiniti offers nutrition support for people taking Rybelsus in Mumbai, Thane and online across India. We do not prescribe or sell Rybelsus. We help you build a food routine that matches your prescriber’s instructions and your real mornings.",
    ],
    nutritionPriorities: [
      { title: "Respect the tablet timing instructions", text: "Rybelsus is taken differently from the injectable semaglutide brands. Many people need help fitting food, other tablets and the morning rush around that schedule. Always follow the prescribing instructions given by your clinician and pharmacist." },
      { title: "Plan the first proper meal of the day", text: "Once the waiting period is over, breakfast still needs to work for appetite, comfort and blood-sugar-friendly eating. This often benefits from more planning than people expect." },
      { title: "Avoid an all-day domino effect", text: "If the morning routine becomes too delayed or unpleasant, the whole day can slide into missed meals, random snacking or over-hunger later." },
      { title: "Support hydration without making mornings harder", text: "Because of the timing rules, some people accidentally drink too little in the first part of the day and then struggle to catch up later." },
    ],
    dietitianSupport: [
      { title: "Morning routine design", text: "A dietitian can help you map wake-up time, medication time, breakfast options, commute and work demands so the plan fits your actual schedule." },
      { title: "Breakfast ideas that feel light but useful", text: "Examples may include curd bowls, eggs, softer upma, toast with protein, oats, idli, poha with add-ons or other easy breakfasts that feel manageable after the tablet timing window." },
      { title: "Food structure for type 2 diabetes", text: "Because Rybelsus is approved for diabetes, meal planning often needs to balance comfort with blood-sugar-friendly routines." },
      { title: "Less confusion around supplements and snacks", text: "People often want clarity on where protein powders, fruit, tea, coffee and supplements can fit into a practical routine. Medication decisions stay with your clinician; food planning support stays with the dietitian." },
    ],
    directAnswers: [
      { title: "What should you eat after taking Rybelsus?", text: "Many people feel best with a light but balanced breakfast after the recommended waiting period—often something easy to digest that still includes protein." },
      { title: "Why is a Rybelsus meal plan different from an Ozempic meal plan?", text: "Because Rybelsus is a tablet with timing instructions, the eating plan often has to work around the morning dose in a way that injectable GLP-1 plans usually do not." },
      { title: "Can a dietitian help if mornings feel chaotic on Rybelsus?", text: "Yes. A good routine can reduce skipped breakfasts, rushed choices and all-day inconsistency." },
    ],
    talkToPrescriber: [
      "You are unsure how to take Rybelsus alongside your other oral medications or supplements.",
      "You are repeatedly unable to follow the dosing instructions because of side effects or routine problems.",
      "You have severe abdominal pain, persistent vomiting or signs of dehydration.",
      "You are planning changes to the dose, timing or medication schedule on your own.",
    ],
    ctaTitle: "Need a morning routine that works with Rybelsus?",
    ctaText:
      "DietFiniti can help you shape breakfast, hydration and meal timing around your Rybelsus routine so the day feels less chaotic and more nourishing.",
    faqs: [
      { question: "Can DietFiniti tell me how to take Rybelsus?", answer: "Medication instructions must come from your doctor, pharmacist and the product guidance. DietFiniti can help you create a food routine around those instructions but does not prescribe or modify medication use." },
      { question: "What is the main nutrition challenge with Rybelsus?", answer: "For many people, it is fitting the morning timing instructions into a realistic breakfast and workday routine without ending up with delayed meals or poor intake later in the day." },
      { question: "Is Rybelsus support only about breakfast?", answer: "No. Breakfast is a common starting point, but protein distribution, hydration, fibre, blood-sugar-friendly meals and side-effect management across the whole day also matter." },
      { question: "Can I still eat regular Indian breakfasts on Rybelsus?", answer: "Usually yes. The right option depends on appetite, glucose goals and the time available after the dose instructions have been followed." },
    ],
    heroImage: rybelsusHero,
    supportImage: rybelsusSupport,
    accent: oralTheme,
  },
  {
    slug: "mounjaro",
    brand: "Mounjaro",
    generic: "Tirzepatide",
    family: "Tirzepatide",
    route: "Weekly injection",
    usedFor: "FDA-approved for type 2 diabetes. Some people also seek nutrition support while using it under physician guidance for weight management.",
    primaryKeyword: "Mounjaro diet plan",
    secondaryKeywords: ["what to eat on Mounjaro", "dietitian for Mounjaro users", "Mounjaro meal plan"],
    menuLabel: "Mounjaro",
    metaTitle: "Mounjaro Diet Plan: What to Eat on Mounjaro",
    metaDescription:
      "Searching for a Mounjaro diet plan? DietFiniti offers nutrition support for people taking Mounjaro in Mumbai, Thane and online across India. We do not sell or prescribe medication.",
    heroTitle: "Mounjaro diet plan and nutrition support",
    quickAnswer:
      "A Mounjaro diet plan usually works best when it focuses on meal quality and consistency rather than chasing the smallest possible intake. Because appetite can drop sharply for some people, planned protein, fluids and side-effect-friendly meals become especially important.",
    intro: [
      "On Mounjaro, appetite can drop sharply for some people. The challenge is often making sure meals still support energy, protein intake, blood sugar and day-to-day functioning.",
      "DietFiniti supports people already taking Mounjaro in Mumbai, Thane and online across India. We do not supply or prescribe Mounjaro. Our role is nutrition support that fits around the medication and the care plan set by your doctor.",
    ],
    nutritionPriorities: [
      { title: "Keep enough food in the day", text: "Some people on Mounjaro drift into unintentionally very low intake because the medication reduces appetite so strongly. A plan can help you avoid under-fuelling." },
      { title: "Choose foods that do more work per bite", text: "When portions shrink, food quality matters more. Protein and nourishing add-ons become important when meal volume is lower." },
      { title: "Make exercise and activity possible", text: "If you are active or trying to preserve strength, the food routine needs to support that. Appetite suppression alone does not create a performance-friendly plan." },
      { title: "Watch digestive comfort", text: "Nausea, fullness, constipation and reflux can all affect what feels manageable. The eating pattern often needs adjusting, not just the shopping list." },
    ],
    dietitianSupport: [
      { title: "A structure for low-appetite days", text: "Dietitian support can help you decide what to do on days when full meals feel difficult, so the whole week does not become nutritionally patchy." },
      { title: "Blood-sugar-aware meal planning", text: "Because Mounjaro is approved for type 2 diabetes, meals often need to support both glucose goals and comfort with reduced appetite." },
      { title: "Protein distribution across smaller meals", text: "Instead of trying to eat one huge protein-heavy meal, many people do better distributing protein over the day in amounts that feel easier." },
      { title: "Support that fits family life", text: "The right plan should still work with shared meals, travel, work and social events. Otherwise it will be hard to sustain." },
    ],
    directAnswers: [
      { title: "What should you eat on Mounjaro?", text: "Most people benefit from familiar, balanced meals with enough protein, manageable portions and regular fluids rather than very rich foods or long gaps without eating." },
      { title: "Can Mounjaro make you eat too little?", text: "For some people, yes. That is one reason dietitian support can be useful: the medication may reduce appetite, but you still need a pattern that supports daily life and health goals." },
      { title: "Does Mounjaro nutrition support replace diabetes care?", text: "No. Food planning supports your medical care; it does not replace medication guidance or diabetes monitoring from your clinician." },
    ],
    talkToPrescriber: [
      "Your appetite suppression feels extreme and you are struggling to eat or drink enough.",
      "You are having significant blood-sugar issues, weakness or worsening side effects.",
      "You have severe abdominal pain, repeated vomiting or signs of dehydration.",
      "You want to change the dose or use pattern without medical guidance.",
    ],
    ctaTitle: "Want a steadier routine while taking Mounjaro?",
    ctaText:
      "DietFiniti can help you plan nourishing smaller meals, protein timing and practical Indian food options that fit around Mounjaro and your existing diabetes or weight-management care.",
    faqs: [
      { question: "Do you provide Mounjaro injections?", answer: "No. DietFiniti does not sell, prescribe or supply Mounjaro. We provide nutrition support for people already taking it under medical supervision." },
      { question: "Why do Mounjaro users seek a dietitian?", answer: "Common reasons include low appetite, uncertainty about how much to eat, nausea, constipation, protein planning and the need for a more practical diabetes-aware meal structure." },
      { question: "Can I follow a vegetarian Mounjaro meal plan?", answer: "Yes. Vegetarian plans can still be built around protein and balanced meals; the right structure depends on your appetite, routine and food preferences." },
      { question: "Is a Mounjaro diet plan only for weight loss?", answer: "No. Many people also need support for comfort, blood sugar, strength, energy and making their intake more consistent." },
    ],
    heroImage: mounjaroHero,
    supportImage: mounjaroSupport,
    accent: tirzepatideTheme,
  },
  {
    slug: "zepbound",
    brand: "Zepbound",
    generic: "Tirzepatide",
    family: "Tirzepatide",
    route: "Weekly injection",
    usedFor: "FDA-approved for chronic weight management and for moderate to severe obstructive sleep apnea in adults with obesity.",
    primaryKeyword: "Zepbound diet plan",
    secondaryKeywords: ["what to eat on Zepbound", "dietitian for Zepbound users", "Zepbound meal plan"],
    menuLabel: "Zepbound",
    metaTitle: "Zepbound Diet Plan: What to Eat on Zepbound",
    metaDescription:
      "Need a Zepbound diet plan? DietFiniti helps people taking Zepbound with practical nutrition support in Mumbai, Thane and online across India. We do not sell or prescribe medication.",
    heroTitle: "Zepbound diet plan and nutrition support",
    quickAnswer:
      "A helpful Zepbound diet plan usually means enough protein, enough fluid and a manageable portion pattern—not skipping food all day. When appetite falls quickly, dietitian support can help you keep the routine nourishing, comfortable and more sustainable.",
    intro: [
      "With Zepbound, many people need a more comfortable structure for smaller meals, fluids and protein. The goal is not simply eating less; it is eating in a way that still feels nourishing and manageable.",
      "DietFiniti works with people already taking Zepbound in Mumbai, Thane and online across India. We do not sell or prescribe Zepbound. We provide practical food guidance that sits alongside the medication and your prescriber’s care.",
    ],
    nutritionPriorities: [
      { title: "Prioritise protein early in the day", text: "If appetite fades as the day goes on, planning protein earlier can make the rest of the day easier and reduce the chance that your intake becomes too low overall." },
      { title: "Prevent weight-loss routines from becoming too restrictive", text: "Because Zepbound is strongly associated with weight loss, some people become overly focused on eating as little as possible. A healthier approach usually aims for structure, not deprivation." },
      { title: "Support sleep-apnea-related lifestyle work where relevant", text: "For people prescribed Zepbound in the context of obesity and sleep apnea, meal timing, alcohol habits and evening comfort may all deserve attention alongside weight-management goals." },
      { title: "Make side-effect management part of the plan", text: "Digestive comfort, fluid intake and simple fallback meals matter more than perfect macros if you are struggling to eat regularly." },
    ],
    dietitianSupport: [
      { title: "Simple meals for low-appetite days", text: "You do not need elaborate wellness recipes. Many people do better with very practical meal ideas they can repeat." },
      { title: "Portion confidence", text: "People often want to know whether the portion they are eating is too much, too little or simply different from what they were used to before. A dietitian can make that less confusing." },
      { title: "Support for protein, fibre and fluids", text: "These three goals often need deliberate planning while using Zepbound; they do not always happen automatically just because the medication is working." },
      { title: "Long-term habit building", text: "The most useful Zepbound support is not only about what to eat this week. It is about building eating skills that remain useful as goals and appetite patterns change." },
    ],
    directAnswers: [
      { title: "What should you eat on Zepbound?", text: "Usually a mix of familiar meals, enough protein, easier-to-digest foods when needed and a clear fluid routine works better than aggressively cutting out everything you enjoy." },
      { title: "Do Zepbound users need a dietitian if the medication already helps weight loss?", text: "Often yes. The medication changes appetite, but a dietitian helps make sure food quality, comfort, protein and practical habits keep pace with those changes." },
      { title: "Can a Zepbound meal plan be vegetarian?", text: "Yes. Protein sources, portion size and digestion-friendly meal structure can all be built into vegetarian or non-vegetarian plans." },
    ],
    talkToPrescriber: [
      "You cannot maintain adequate hydration or food intake.",
      "You have severe gastrointestinal symptoms or significant reflux that is worsening.",
      "You are unsure how the medication fits with sleep-apnea care, planned procedures or other medical treatment.",
      "You want to stop, restart or alter the medication without your doctor’s guidance.",
    ],
    ctaTitle: "Need a more practical Zepbound eating plan?",
    ctaText:
      "DietFiniti can help you simplify meals, keep protein and fluids more consistent and build a routine ttent and build a routine that supports both comfort and long-term habits while taking Zepbound.",
    faqs: [
      { question: "Can DietFiniti provide Zepbound?", answer: "No. DietFiniti does not prescribe, sell or supply Zepbound. We support people who are already taking it under medical supervision." },
      { question: "What do people usually ask about on Zepbound?", answer: "Common questions are about low appetite, protein intake, nausea, constipation, reflux, what to eat on travel days and how to keep weight loss from becoming too restrictive." },
      { question: "Can a Zepbound diet plan include regular Indian meals?", answer: "Yes. In many cases, familiar Indian meals with a few structure changes are more realistic than highly specialised diet menus." },
      { question: "Is Zepbound support the same as Wegovy support?", answer: "There are overlaps, but some people experience stronger appetite changes or have different treatment goals. The best plan depends on the medication, the person and their routine." },
    ],
    heroImage: zepboundHero,
    supportImage: zepboundSupport,
    accent: tirzepatideTheme,
  },
  {
    slug: "saxenda",
    brand: "Saxenda",
    generic: "Liraglutide",
    family: "Liraglutide",
    route: "Daily injection",
    usedFor: "FDA-approved for chronic weight management in adults and in certain adolescents.",
    primaryKeyword: "Saxenda diet plan",
    secondaryKeywords: ["what to eat on Saxenda", "dietitian for Saxenda users", "Saxenda meal plan"],
    menuLabel: "Saxenda",
    metaTitle: "Saxenda Diet Plan: What to Eat on Saxenda",
    metaDescription:
      "Looking for a Saxenda diet plan? DietFiniti offers practical nutrition support for people taking Saxenda in Mumbai, Thane and online across India. We do not sell or prescribe medication.",
    heroTitle: "Saxenda diet plan and nutrition support",
    quickAnswer:
      "Because Saxenda is a daily GLP-1 injection, people often need support building a routine that is steady enough to repeat every day. Smaller meals, protein planning and side-effect-friendly food choices can make the experience easier and more sustainable.",
    intro: [
      "Because Saxenda is used daily, routine matters. Many people need food ideas they can repeat comfortably day after day, especially when appetite or digestion feels different.",
      "DietFiniti works with people already taking Saxenda in Mumbai, Thane and online across India. We do not sell or prescribe the medication. We help you build a structured routine around your goals, food preferences and side effects.",
    ],
    nutritionPriorities: [
      { title: "Build a repeatable daily rhythm", text: "Because Saxenda is taken daily, many people benefit from routine more than complexity. Meals need to be realistic enough for weekdays, weekends and travel." },
      { title: "Keep fullness from becoming accidental under-eating", text: "Daily appetite changes can lead to inconsistent intake. A gentle structure can stop the cycle of eating too little and then overeating later." },
      { title: "Use simple, comfortable foods", text: "Soft, light or familiar foods are often more useful than heavily seasoned or rich dishes when side effects are noticeable." },
      { title: "Review snacks and add-ons", text: "Some people feel too full for meals but continue to consume low-protein extras that do not improve nourishment. Reworking snacks can help." },
    ],
    dietitianSupport: [
      { title: "Daily routine support", text: "A plan that fits recurring days usually works better than a plan that only looks good on paper." },
      { title: "Meal ideas for nausea-prone days", text: "When full meals are difficult, lighter but still useful options matter." },
      { title: "Weight-management support without extremes", text: "Saxenda is a tool, not a reason to stop caring about food quality or nourishment." },
      { title: "Practical family-food adaptation", text: "Your plan can work around shared meals, not just separate “diet food”." },
    ],
    directAnswers: [
      { title: "What should you eat on Saxenda?", text: "Simple balanced meals, enough protein, easy fluids and portion sizes that feel manageable tend to work well for many people." },
      { title: "Can a dietitian help with daily appetite swings on Saxenda?", text: "Yes. One of the main jobs is to reduce day-to-day confusion and make the routine steadier." },
      { title: "Is the best Saxenda meal plan very low calorie?", text: "Not usually. Extremely low-calorie routines can make side effects, low energy and poor adherence worse." },
    ],
    talkToPrescriber: [
      "You have side effects that are making it hard to eat or drink adequately.",
      "You feel unusually weak, dizzy or unwell.",
      "You have severe abdominal symptoms or persistent vomiting.",
      "You want to make medication changes outside your prescribed plan.",
    ],
    ctaTitle: "Want a steady daily routine while taking Saxenda?",
    ctaText:
      "DietFiniti can help you create simpler daily meals, better protein distribution and realistic Indian food choices that work alongside Saxenda.",
    faqs: [
      { question: "Do you prescribe Saxenda?", answer: "No. DietFiniti does not prescribe, sell or supply Saxenda. We provide nutrition support for people already taking it under medical care." },
      { question: "What do people struggle with most on Saxenda?", answer: "Common issues are unpredictable appetite, nausea, portion uncertainty, low protein intake and the challenge of building a routine that feels repeatable every day." },
      { question: "Can I eat home food on Saxenda?", answer: "Yes. Most people do better when the plan is built around normal home food with practical adjustments rather than a separate set of “diet meals”." },
      { question: "Can Saxenda nutrition support help after the first few weeks?", answer: "Yes. Support is often most useful when it helps turn the early medication phase into a sustainable long-term routine." },
    ],
    heroImage: saxendaHero,
    supportImage: saxendaSupport,
    accent: liraglutideTheme,
  },
  {
    slug: "victoza",
    brand: "Victoza",
    generic: "Liraglutide",
    family: "Liraglutide",
    route: "Daily injection",
    usedFor: "FDA-approved for type 2 diabetes; nutrition support often focuses on blood-sugar-friendly routines plus reduced appetite or digestive side effects.",
    primaryKeyword: "Victoza diet plan",
    secondaryKeywords: ["what to eat on Victoza", "dietitian for Victoza users", "Victoza meal plan"],
    cardDescription: "Support for blood-sugar-friendly meals, meal timing and balanced everyday eating while taking Victoza.",
    metaTitle: "Victoza Diet Plan: What to Eat on Victoza",
    metaDescription:
      "Get practical dietitian guidance for a Victoza diet plan in Mumbai, Thane or online across India. DietFiniti supports people taking Victoza but does not sell or prescribe medication.",
    heroTitle: "Victoza diet plan and nutrition support",
    quickAnswer:
      "A Victoza diet plan usually needs to support both comfort and blood-sugar-friendly eating. Balanced meals, steady timing and enough protein can matter just as much as avoiding obvious sugar-heavy choices.",
    intro: [
      "With Victoza, the food routine often needs to support both digestion and blood-sugar-friendly eating. Most people do best with simpler, more regular meals rather than overthinking every food choice.",
      "DietFiniti provides nutrition support for Victoza users in Mumbai, Thane and online across India. We do not prescribe or sell Victoza. Our role is to help make the food pattern clearer and more practical.",
    ],
    nutritionPriorities: [
      { title: "Regular meal timing", text: "For many people using Victoza, long unpredictable gaps make blood sugar and appetite harder to manage. A steadier pattern often helps." },
      { title: "Balanced carbohydrates, not fear", text: "People sometimes become afraid of all carbohydrate. In reality, the focus is often on smarter portions and pairing rather than total avoidance." },
      { title: "Protein and fibre planning", text: "When appetite changes, protein and fibre can quietly drop out of the day unless they are intentionally included." },
      { title: "Comfort-focused cooking methods", text: "If digestive symptoms show up, simpler cooking styles and portion changes can matter more than strict rules." },
    ],
    dietitianSupport: [
      { title: "Practical diabetes-aware meals", text: "Food choices should work for the condition you are managing, not just for the medication alone." },
      { title: "Support for daily life", text: "A plan can take work hours, activity, family meals and medication routines into account." },
      { title: "Less reliance on random snacking", text: "A clearer structure often reduces the back-and-forth between feeling too full for meals and grazing later." },
      { title: "Guidance that stays within a dietitian’s scope", text: "Medication changes stay with your doctor. Nutrition support stays focused on food, routine and behaviour." },
    ],
    directAnswers: [
      { title: "What should you eat on Victoza?", text: "Many people do well with balanced meals that include protein, moderate portions of carbohydrate, vegetables or fruit, and a routine that is easier to repeat every day." },
      { title: "Can Victoza users still eat rice or roti?", text: "Often yes. The question is usually about quantity, pairing and timing rather than complete avoidance." },
      { title: "Why use a dietitian with Victoza?", text: "Because the day-to-day meal structure still matters for blood sugar, energy, side effects and long-term habits." },
    ],
    talkToPrescriber: [
      "You are having blood-sugar problems, severe gastrointestinal symptoms or frequent lows.",
      "You are unsure how Victoza interacts with the rest of your diabetes treatment plan.",
      "You have persistent vomiting, severe pain or signs of dehydration.",
      "You want to alter the medication plan without medical guidance.",
    ],
    ctaTitle: "Need a more practical Victoza meal routine?",
    ctaText:
      "DietFiniti can help you simplify blood-sugar-friendly meals, improve protein balance and build a more repeatable day while taking Victoza.",
    faqs: [
      { question: "Do you prescribe Victoza?", answer: "No. DietFiniti does not sell or prescribe Victoza. We provide nutrition support to people already using it under medical care." },
      { question: "What is different about a Victoza diet plan?", answer: "For many people, the plan has to work for diabetes management as well as appetite or digestive changes related to the medication." },
      { question: "Can I eat Indian home food on Victoza?", answer: "Yes. Most people do better with normal home meals adjusted for balance, portions and timing instead of a completely separate menu." },
      { question: "Is Victoza support only for weight loss?", answer: "No. It can also help with blood-sugar-friendly meal structure, appetite changes, protein intake and consistency." },
    ],
    heroImage: victozaHero,
    supportImage: victozaSupport,
    accent: liraglutideTheme,
  },
  {
    slug: "trulicity",
    brand: "Trulicity",
    generic: "Dulaglutide",
    family: "Dulaglutide",
    route: "Weekly injection",
    usedFor: "FDA-approved for type 2 diabetes. Nutrition support often centres on blood-sugar-friendly meals, appetite changes and digestive comfort.",
    primaryKeyword: "Trulicity diet plan",
    secondaryKeywords: ["what to eat on Trulicity", "Trulicity meal plan", "dietitian for Trulicity users"],
    metaTitle: "Trulicity Diet Plan: What to Eat on Trulicity",
    metaDescription:
      "Searching for a Trulicity diet plan? DietFiniti offers nutrition support for people taking Trulicity in Mumbai, Thane and online across India. We do not sell or prescribe medication.",
    heroTitle: "Trulicity diet plan and nutrition support",
    quickAnswer:
      "A Trulicity diet plan is usually about regular balanced meals, not perfection. People often need help organising protein, meal timing and blood-sugar-friendly choices while also managing fullness or mild digestive side effects.",
    intro: [
      "People using Trulicity often need help with regular meal timing, protein balance and simpler food decisions. A repeatable routine usually works better than strict food rules.",
      "DietFiniti offers dietitian support for Trulicity users in Mumbai, Thane and online across India. We do not prescribe or sell Trulicity. We focus on food decisions, eating patterns and realistic routines.",
    ],
    nutritionPriorities: [
      { title: "Steady meal timing", text: "A reliable routine often helps more than dramatic food rules, especially when blood sugar is part of the picture." },
      { title: "Protein at main meals", text: "Protein helps meals feel more complete when appetite is lower and supports meal quality during weight change." },
      { title: "Comfort and simplicity", text: "When digestive symptoms show up, easier meals and smaller portions can be more useful than complicated recipes." },
      { title: "Familiar carbohydrate choices", text: "Trulicity plans usually work best when rice, roti or other staples are used thoughtfully instead of banned outright." },
    ],
    dietitianSupport: [
      { title: "Food choices for real households", text: "Most people need a plan that works with their family kitchen, not a specialist menu that lasts a week." },
      { title: "Support for side effects without panic", text: "Not every side effect means you need a totally different diet. Sometimes a few practical shifts make a big difference." },
      { title: "Better snack decisions", text: "People often benefit from swapping low-value snacking for more intentional mini-meals or protein-containing snacks." },
      { title: "Diabetes-aware structure", text: "Dietitian support keeps the food plan aligned with your broader diabetes care rather than focusing only on weight." },
    ],
    directAnswers: [
      { title: "What should you eat on Trulicity?", text: "Balanced, familiar meals with protein, sensible portions and regular timing are a common starting point." },
      { title: "Can Trulicity users eat fruit?", text: "Usually yes. Fruit often fits well when portion, timing and the rest of the meal are considered in context." },
      { title: "Why work with a dietitian while taking Trulicity?", text: "Because appetite changes, blood-sugar-friendly structure and food confusion can all persist even when the medication is helping." },
    ],
    talkToPrescriber: [
      "You are experiencing significant side effects or severe gastrointestinal symptoms.",
      "You have recurrent low blood sugars or worsening glucose control.",
      "You are unable to maintain food or fluids properly.",
      "You want to alter the medication plan without consulting your clinician.",
    ],
    ctaTitle: "Need a simpler Trulicity-friendly meal structure?",
    ctaText:
      "DietFiniti can help you create a practical routine with balanced meals, protein planning and easier blood-sugar-friendly food decisions while taking Trulicity.",
    faqs: [
      { question: "Do you prescribe Trulicity?", answer: "No. DietFiniti does not prescribe or sell Trulicity. We provide nutrition support to people already taking it under medical supervision." },
      { question: "What do people usually want from a Trulicity diet plan?", answer: "They often want a repeatable meal pattern, help with appetite changes, better snack choices and a more practical diabetes-aware routine." },
      { question: "Can I eat regular Indian meals on Trulicity?", answer: "Yes. Most people are better served by improving balance, portioning and timing within familiar meals rather than abandoning them." },
      { question: "Is Trulicity support only about weight loss?", answer: "No. It can also help with glucose-aware meal structure, digestion, consistency and daily decision-making." },
    ],
    heroImage: trulicityHero,
    supportImage: trulicitySupport,
    accent: classicTheme,
  },
  {
    slug: "byetta",
    brand: "Byetta",
    generic: "Exenatide",
    family: "Exenatide",
    route: "Twice-daily injection",
    usedFor: "FDA-approved for type 2 diabetes. Nutrition questions often revolve around meal timing and digestion because the dosing schedule is more meal-linked than some newer weekly options.",
    primaryKeyword: "Byetta diet plan",
    secondaryKeywords: ["what to eat on Byetta", "Byetta meal plan", "dietitian for Byetta users"],
    metaTitle: "Byetta Diet Plan: What to Eat on Byetta",
    metaDescription:
      "Need a Byetta diet plan? DietFiniti supports people taking Byetta with practical nutrition guidance in Mumbai, Thane and online across India. We do not sell or prescribe medication.",
    heroTitle: "Byetta diet plan and nutrition support",
    quickAnswer:
      "A Byetta diet plan often needs more attention to timing because the medication schedule is built around meals. A useful food routine can help you avoid rushed choices, support blood-sugar-friendly eating and make side effects easier to handle.",
    intro: [
      "Byetta often makes meal timing more important than people expect. A practical routine can help meals feel less rushed and more supportive of blood sugar and digestion.",
      "DietFiniti provides nutrition support for people already taking Byetta in Mumbai, Thane and online across India. We do not supply or prescribe Byetta. We help you build a practical eating routine around it.",
    ],
    nutritionPriorities: [
      { title: "Meal-linked structure", text: "When medication timing is closely connected to eating, the day benefits from more planning and fewer accidental meal skips." },
      { title: "Balanced meals for glucose support", text: "Byetta users often need meals that are both comfortable and blood-sugar-friendly." },
      { title: "Digestive comfort", text: "Lighter meals and simpler cooking methods may be helpful when side effects are more noticeable." },
      { title: "Repeatable routine", text: "A routine you can follow on busy days is more valuable than a perfect plan you cannot maintain." },
    ],
    dietitianSupport: [
      { title: "Timing around real life", text: "A dietitian can help adapt meal timing to commute, work shifts and household routines." },
      { title: "Less guesswork at mealtimes", text: "People often want help deciding what makes a meal feel balanced without overcomplicating it." },
      { title: "Support for blood sugar and appetite", text: "Meal composition still matters even when the medication is helping." },
      { title: "Practical snack planning", text: "The right snack timing can sometimes prevent both over-hunger and low-quality grazing." },
    ],
    directAnswers: [
      { title: "What should you eat on Byetta?", text: "Regular balanced meals with protein and sensible portions tend to be a good starting point, especially when medication timing is linked to eating." },
      { title: "Why is meal timing important with Byetta?", text: "Because the schedule is more meal-oriented than some weekly medications, people often need a more predictable food routine." },
      { title: "Can a dietitian help if my work schedule is irregular?", text: "Yes. Byetta users with variable schedules often benefit from planning fallback meals, snacks and timing strategies." },
    ],
    talkToPrescriber: [
      "You are unsure how your Byetta schedule should work with your meal routine or other diabetes medications.",
      "You have severe digestive symptoms, repeated vomiting or dehydration.",
      "You are having frequent low blood sugars or your diabetes routine feels unstable.",
      "You want to change the medication plan without medical guidance.",
    ],
    ctaTitle: "Need a Byetta routine that fits your day?",
    ctaText:
      "DietFiniti can help you organise meal timing, protein choices and blood-sugar-friendly meals so the day feels less rushed and more repeatable while taking Byetta.",
    faqs: [
      { question: "Do you prescribe Byetta?", answer: "No. DietFiniti does not prescribe or sell Byetta. We provide dietitian support for people already taking it under medical care." },
      { question: "What is different about a Byetta diet plan?", answer: "Many people need more help with meal timing because the medication routine is more closely connected to when food is eaten." },
      { question: "Can I eat Indian meals on Byetta?", answer: "Yes. The key is usually how the meal is balanced and timed rather than switching to unfamiliar food." },
      { question: "Who benefits most from Byetta nutrition support?", answer: "People with unpredictable schedules, side effects, blood-sugar concerns or confusion about meal timing often benefit the most." },
    ],
    heroImage: byettaHero,
    supportImage: byettaSupport,
    accent: classicTheme,
  },
  {
    slug: "bydureon-bcise",
    brand: "Bydureon BCise",
    generic: "Exenatide extended release",
    family: "Exenatide",
    route: "Weekly injection",
    usedFor: "FDA-approved weekly exenatide for type 2 diabetes. Nutrition support often focuses on blood-sugar-friendly meals plus appetite and digestive comfort.",
    primaryKeyword: "Bydureon diet plan",
    secondaryKeywords: ["Bydureon BCise meal plan", "what to eat on Bydureon", "dietitian for Bydureon users"],
    metaTitle: "Bydureon Diet Plan: What to Eat on Bydureon BCise",
    metaDescription:
      "Searching for a Bydureon diet plan? DietFiniti supports people taking Bydureon BCise with practical nutrition guidance in Mumbai, Thane and online across India.",
    heroTitle: "Bydureon BCise diet plan and nutrition support",
    quickAnswer:
      "A Bydureon diet plan usually works best when it keeps meals simple, balanced and blood-sugar-aware. Weekly dosing may feel more convenient than twice-daily medication, but food structure still matters for comfort and consistency.",
    intro: [
      "With Bydureon BCise, the questions are usually about keeping meals balanced, digestion comfortable and the routine steady across the week.",
      "DietFiniti provides nutrition support for Bydureon BCise users in Mumbai, Thane and online across India. We do not prescribe or sell the medication. We focus on sustainable food routines.",
    ],
    nutritionPriorities: [
      { title: "Balanced weekly routine", text: "A plan should work across the week, not just on the day you feel most motivated." },
      { title: "Blood-sugar-friendly structure", text: "Meals still need a sensible balance of carbohydrate, protein and fibre." },
      { title: "Digestive comfort", text: "Nausea, fullness or constipation can still affect meal choices even with weekly dosing." },
      { title: "Familiar foods", text: "Most people are more consistent when the plan uses foods they already know how to buy and cook." },
    ],
    dietitianSupport: [
      { title: "Repeatable meals", text: "A set of reliable breakfast, lunch, dinner and snack options can remove a lot of daily food stress." },
      { title: "Protein and fibre planning", text: "These often need more deliberate attention than people expect." },
      { title: "Better meal quality without obsession", text: "You do not need a hyper-restrictive routine to eat well on Bydureon BCise." },
      { title: "Support alongside diabetes care", text: "Nutrition guidance complements the wider medical plan rather than replacing it." },
    ],
    directAnswers: [
      { title: "What should you eat on Bydureon BCise?", text: "Balanced familiar meals with enough protein, regular timing and a realistic approach to portions are a common starting point." },
      { title: "Is Bydureon support mostly about diabetes?", text: "Often yes, but it can also help with digestive comfort, protein intake and a steadier eating routine." },
      { title: "Can a dietitian make Bydureon meals more practical?", text: "Yes. Practicality is often the biggest difference between information online and a plan you can actually keep up." },
    ],
    talkToPrescriber: [
      "You have severe digestive symptoms or you cannot maintain food and fluids.",
      "You are having blood-sugar problems or uncertainty about how the medication fits your current treatment.",
      "You want medication changes or are worried about side effects.",
      "You have persistent new symptoms that need medical review.",
    ],
    ctaTitle: "Want a simpler Bydureon BCise food routine?",
    ctaText:
      "DietFiniti can help you build repeatable meals, better protein balance and a more manageable diabetes-friendly structure while taking Bydureon BCise.",
    faqs: [
      { question: "Do you sell Bydureon BCise?", answer: "No. DietFiniti does not sell or prescribe Bydureon BCise. We support people already taking it under medical supervision." },
      { question: "What do people ask about most on Bydureon BCise?", answer: "Common questions are about appetite changes, digestion, meal balance and how to stay consistent with food choices while managing diabetes." },
      { question: "Can I eat normal home food on Bydureon BCise?", answer: "Yes. Most plans work best when normal home food is adjusted for balance, portions and routine rather than replaced completely." },
      { question: "Is Bydureon BCise support different from Byetta support?", answer: "There is overlap, but weekly dosing changes the day-to-day routine, so meal timing may feel less rigid for some people." },
    ],
    heroImage: bydureonHero,
    supportImage: bydureonSupport,
    accent: classicTheme,
  },
  {
    slug: "adlyxin",
    brand: "Adlyxin",
    generic: "Lixisenatide",
    family: "Lixisenatide",
    route: "Daily injection",
    usedFor: "FDA-approved for type 2 diabetes. Nutrition support often focuses on daily routine, digestive comfort and blood-sugar-friendly meals.",
    primaryKeyword: "Adlyxin diet plan",
    secondaryKeywords: ["what to eat on Adlyxin", "Adlyxin meal plan", "dietitian for Adlyxin users"],
    metaTitle: "Adlyxin Diet Plan: What to Eat on Adlyxin",
    metaDescription:
      "Get practical nutrition support for an Adlyxin diet plan from DietFiniti in Mumbai, Thane or online across India. We do not sell or prescribe medication.",
    heroTitle: "Adlyxin diet plan and nutrition support",
    quickAnswer:
      "An Adlyxin diet plan usually needs to be practical enough for everyday repetition. Balanced meals, steady timing and side-effect-aware food choices can help people manage both comfort and blood-sugar-related goals while taking the medication.",
    intro: [
      "On Adlyxin, many people benefit from a more regular daily food pattern. The focus is usually on balanced meals, comfortable portions and fewer long gaps without eating.",
      "DietFiniti provides nutrition support for Adlyxin users in Mumbai, Thane and online across India. We do not prescribe or sell Adlyxin. We focus on the meal structure around it.",
    ],
    nutritionPriorities: [
      { title: "Daily consistency", text: "Daily medications often work best with a daily food rhythm that is realistic and not overly complicated." },
      { title: "Blood-sugar-friendly meals", text: "Meal balance and portion fit still matter, especially when type 2 diabetes is the main reason the medication was prescribed." },
      { title: "Comfort-first adjustments", text: "Smaller or gentler meals may be easier on days when side effects are more noticeable." },
      { title: "Protein and fluid planning", text: "These support a more nourishing routine when appetite is lower than usual." },
    ],
    dietitianSupport: [
      { title: "A more repeatable routine", text: "People often need help making the plan simple enough to follow for more than a few days." },
      { title: "Better food decisions on busy days", text: "Fallback options prevent the whole plan collapsing when work, travel or family meals get in the way." },
      { title: "Support for appetite changes", text: "Low appetite should still lead to useful meals, not just random intake." },
      { title: "Diabetes-aware nutrition guidance", text: "Dietitian support stays grounded in the wider reason you are taking the medication." },
    ],
    directAnswers: [
      { title: "What should you eat on Adlyxin?", text: "Most people do well with balanced meals, comfortable portions, regular fluid intake and familiar foods that fit their diabetes routine." },
      { title: "Can a dietitian help with daily side effects on Adlyxin?", text: "Yes. Support often focuses on simplifying meals and reducing the confusion that side effects create around food." },
      { title: "Is Adlyxin support mostly for weight loss?", text: "Not necessarily. Many people need more help with blood-sugar-friendly structure, digestion and meal consistency." },
    ],
    talkToPrescriber: [
      "You have repeated vomiting, severe abdominal symptoms or trouble keeping fluids down.",
      "You are having blood-sugar problems or frequent low readings.",
      "You are unsure how Adlyxin fits with other diabetes medications.",
      "You want to alter the medication routine without medical advice.",
    ],
    ctaTitle: "Need a more repeatable Adlyxin meal plan?",
    ctaText:
      "DietFiniti can help you simplify meals, support blood-sugar-friendly food choices and build a steadier day while taking Adlyxin.",
    faqs: [
      { question: "Do you prescribe Adlyxin?", answer: "No. DietFiniti does not prescribe or sell Adlyxin. We provide nutrition support for people already taking it under medical supervision." },
      { question: "What do people usually struggle with on Adlyxin?", answer: "Common issues include daily routine inconsistency, low appetite, digestive discomfort and uncertainty about what balanced meals should look like." },
      { question: "Can I eat home food on Adlyxin?", answer: "Yes. Most people do best with home food that is adjusted for balance, portions and timing rather than completely replaced." },
      { question: "Who benefits from Adlyxin dietitian support?", answer: "People with busy schedules, diabetes-related meal concerns, appetite changes or ongoing food confusion often benefit the most." },
    ],
    heroImage: adlyxinHero,
    supportImage: adlyxinSupport,
    accent: classicTheme,
  },
  {
    slug: "foundayo",
    brand: "Foundayo",
    generic: "Orforglipron",
    family: "Orforglipron",
    route: "Daily oral tablet",
    usedFor: "FDA-approved once-daily oral GLP-1 medication for chronic weight management. FDA notes that it does not need to be taken on an empty stomach.",
    primaryKeyword: "Foundayo diet plan",
    secondaryKeywords: ["orforglipron diet plan", "what to eat on Foundayo", "dietitian for Foundayo users"],
    menuLabel: "Foundayo",
    metaTitle: "Foundayo Diet Plan: What to Eat on Foundayo",
    metaDescription:
      "Need a Foundayo or orforglipron diet plan? DietFiniti offers nutrition support for people taking Foundayo in Mumbai, Thane and online across India. We do not sell or prescribe medication.",
    heroTitle: "Foundayo diet plan and nutrition support",
    quickAnswer:
      "A Foundayo diet plan usually focuses on everyday structure: how to keep protein in the day, what to do when appetite is low, and how to avoid turning a once-daily oral GLP-1 into an under-eating pattern that feels hard to sustain.",
    intro: [
      "With Foundayo, appetite may be lower even though the tablet routine feels simple. The important part is building meals that still support protein, energy, hydration and comfort.",
      "DietFiniti supports people taking Foundayo in Mumbai, Thane and online across India. We do not prescribe or sell Foundayo. We help with meal planning, protein, hydration and realistic Indian food routines while you continue medical care with your prescriber.",
    ],
    nutritionPriorities: [
      { title: "Use the convenience of the tablet well", text: "The fact that Foundayo does not require an empty stomach routine does not mean the rest of the day should be unplanned. A useful structure still matters." },
      { title: "Keep enough nourishment despite lower appetite", text: "Weight-management medication can reduce appetite, but you still need meals that support energy, protein and comfort." },
      { title: "Support digestion", text: "Simple foods, sensible portion sizes and fluid planning can make the day easier when side effects are present." },
      { title: "Make the plan repeatable", text: "The best Foundayo plan is one that works on workdays, family days and travel days—not only on ideal days." },
    ],
    dietitianSupport: [
      { title: "Flexible meal timing", text: "Without a strict empty-stomach morning routine, many people can design meals more flexibly—but they still benefit from a clear plan." },
      { title: "Protein-forward weight-management support", text: "A dietitian can help make sure reduced appetite does not lead to poor-quality intake." },
      { title: "Fallback meals for low-appetite days", text: "When full meals feel difficult, pre-planned lighter options can prevent the routine from falling apart." },
      { title: "Sustainable habit building", text: "The long-term goal is not only short-term appetite suppression; it is improving how you eat over time." },
    ],
    directAnswers: [
      { title: "What should you eat on Foundayo?", text: "Many people do well with smaller balanced meals, regular protein, easier fluids and familiar foods that feel comfortable and practical." },
      { title: "How is Foundayo nutrition support different from Rybelsus support?", text: "Foundayo does not require the same empty-stomach timing routine as Rybelsus, so the meal plan can often be more flexible. The need for structure, protein and side-effect management still remains." },
      { title: "Can a dietitian help with a Foundayo meal plan?", text: "Yes. The medication may reduce appetite, but meal planning still matters for comfort, nourishment and long-term habits." },
    ],
    talkToPrescriber: [
      "You have severe digestive symptoms, repeated vomiting or you cannot maintain fluids.",
      "You are unsure how Foundayo fits with your other medication or medical conditions.",
      "You want to change the dose or stop the medication without guidance.",
      "You have persistent new symptoms that need medical review.",
    ],
    ctaTitle: "Need a flexible but structured Foundayo meal routine?",
    ctaText:
      "DietFiniti can help you plan balanced meals, protein timing and practical Indian food options that work alongside Foundayo and your prescriber’s advice.",
    faqs: [
      { question: "Do you prescribe Foundayo or orforglipron?", answer: "No. DietFiniti does not prescribe or sell Foundayo. We provide nutrition support for people already taking it under medical supervision." },
      { question: "Why would Foundayo users still need a dietitian?", answer: "Because appetite reduction does not automatically create a balanced meal pattern. Many people still need help with protein, hydration, side effects and sustainable habits." },
      { question: "Can I eat Indian meals on Foundayo?", answer: "Yes. Most people do best with familiar meals adapted to appetite, comfort and portion size rather than a completely separate meal style." },
      { question: "Is Foundayo support only about weight loss?", answer: "No. It is also about nourishment, comfort, routine, food quality and building habits that remain useful over time." },
    ],
    heroImage: foundayoHero,
    supportImage: foundayoSupport,
    accent: oralTheme,
  },
];

export const glpMedicationMenu = glpMedications.filter((item) => item.menuLabel);

export const glpMedicationSlugs = glpMedications.map((item) => item.slug);

export function getMedicationBySlug(slug: string) {
  return glpMedications.find((item) => item.slug === slug);
}
