import type { Metadata } from "next";
import About from "./about";
import { AboutStructuredData } from "./AboutStructuredData";
export const metadata: Metadata={title:"About DietFiniti & Dietitian Tejal",description:"Learn about DietFiniti, personalised nutrition consultations in Mumbai, Thane and online across India, led by Dietitian Tejal.",alternates:{canonical:"/about"},openGraph:{title:"About DietFiniti & Dietitian Tejal",description:"Personalised nutrition consultations in Mumbai, Thane and online across India.",url:"https://dietfiniti.com/about",images:[{url:"/image/homeimage.jpg",alt:"Dietitian Tejal at DietFiniti"}]}};
export default function Page(){return <><AboutStructuredData/><About/></>}
