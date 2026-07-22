import { Testimonial } from "./testimonialService";

export interface GoogleReview {
  name: string;
  rating: number | null;
  review_text: string;
  date_relative: string;
  photo_count: number;
  reviews_count: number;
}

export const googleReviews: GoogleReview[] = [
  {
    name: "Ammeera Sultana",
    rating: 5,
    review_text:
      "I have tried many weight loss hacks and tips but was not able to loose weight, being an hypothyroidism patient I was suffering from bloating and acidity problem. one day I cam across Tejal mam page and got enrolled in her plan in 21 day I have lost around 4 kg and lot of inches from tummy. she has made a great change in my lifestyle and health my acidity problem is quite reduced with her simple diet plan. One should go for her plan who wish to get fit and healthy",
    date_relative: "2 days ago",
    photo_count: 0,
    reviews_count: 1,
  },
  {
    name: "Aarohi Talegoankar",
    rating: null,
    review_text:
      "The journey of four weeks was amazing with Tejal Mam. I was gaining weight this lockdown period and then I came across Tejal Mam and her amazing diet plans. Her diet plans are simple and easy to follow, the recipes are amazing and anyone can cook it. I successfully managed to loose 5 kgs kn weight and 5 inches from tummy.",
    date_relative: "a month ago",
    photo_count: 0,
    reviews_count: 1,
  },
  {
    name: "Rashmi Dugyala",
    rating: null,
    review_text:
      "Enjoying the food so far bar one or two items...not feeling deprived in any way....so all in all lam happy with how things going....think lam 3.5-4 kgs down in just 4weeks(didn't even expect this will happen in my life),no hungry at all,with out any workouts only just 30 mins in a day(as lam a working employee i walked alternate days for last two weeks but still I saw the best results), thank you so much Dietfiniti and team for supporting me",
    date_relative: "a month ago",
    photo_count: 0,
    reviews_count: 1,
  },
  {
    name: "Siri Nv",
    rating: null,
    review_text:
      "It's wonderful experience nd sharing good diet plans am lost 6.7kg in a month thankyou...I Am happy with this",
    date_relative: "2 months ago",
    photo_count: 0,
    reviews_count: 1,
  },
  {
    name: "Mayuri Shendage",
    rating: null,
    review_text:
      "The day I trusted thr plan... Till the day I have changed with my weightloss, inches and everything. The weight which was around 66 is now 62 just within 15 days. I'm surprised!!!!! workouttt hours in gym doesn't made any changes in me. But the diet plan had lot of difference. Just 4 kgs in 15 days. Plzzzz I suggest u all to go with only and only dietfiniti✔ happy with this magical effect.. I'm so much",
    date_relative: "3 months ago",
    photo_count: 0,
    reviews_count: 1,
  },
  {
    name: "Rajni Gehani Thaker",
    rating: null,
    review_text:
      "Hi, Tejal thanks for your support during my diet plan. I got result within short period of time with your diet plan and guidance. Your dedicated towards your job is recommendable. A medical condition is something different for me but still your diet plan works on my body and having inch lost and weight lost both. Thanks again",
    date_relative: "3 months ago",
    photo_count: 0,
    reviews_count: 2,
  },
  {
    name: "Shweta Dash",
    rating: null,
    review_text:
      "Tejal is an Absolutely wonderful person to guide with her amazing diet plans and with no crash diets at all, very supportive and patient, also gives options of change in diet which will always make one feel excited to try new add ons to diet chart what she shares.. I have reduced more than 4 kgs in 3 weeks, Amazing inch loss Thank you so much Tejal You are truly a darling and very patient with me It's amazing for me to feel so good, so light, so healthy and fit From 69.3 to 64.8 I feel like dancing I will always recommend you as you understand the health, activities and body weight so well to target the right weight with balanced diet in healthy and tasty ways. Do follow her and connect her for healthy and tasty recipes on Instagram Profile - Dietfiniti With regards Shweta Dash",
    date_relative: "4 months ago",
    photo_count: 1,
    reviews_count: 3,
  },
  {
    name: "Seloni Gandotra",
    rating: null,
    review_text:
      "It was an awesome journey of two months with Dietfiniti..proper counseling of each n every thing to b consumed is given by them..I lost almost 7 kgs in 2 months..n loads in inches...thank u once again..n one thing more they don't give any fancy diets like others do..it all in our kitchen..must try for everybody who wants to loose weight",
    date_relative: "4 months ago",
    photo_count: 0,
    reviews_count: 1,
  },
  {
    name: "Kruti Sanghavi",
    rating: null,
    review_text:
      "My journey with Diet Finity: @Tejal feels amazing. I have lost almost 3 kgs in just 15 days and it feels great. The diet plan that you offer is quite easy to follow nothing out of your comfort zone. It's from the basics that's available in my kitchen. I feel super active and energetic and light as a feather. The diet is super healthy with right amount of nutrients required for my body and stomach filling at the same time. With you there is no starving. Thank you Tejal for being so kind and friendly and for always being there throughout the day guiding me, taking extra efforts to also not making me kill my cravings.",
    date_relative: "5 months ago",
    photo_count: 1,
    reviews_count: 4,
  },
];

export function mapGoogleReviewToTestimonial(
  review: GoogleReview,
  index: number
): Testimonial {
  return {
    _id: `google-review-${index}`,
    name: review.name,
    description: review.review_text,
    dateRelative: review.date_relative,
    rating: review.rating,
    photoCount: review.photo_count,
    reviewsCount: review.reviews_count,
    source: "google",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

export const googleReviewsAsTestimonials: Testimonial[] = googleReviews.map(
  mapGoogleReviewToTestimonial
);
