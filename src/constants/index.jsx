import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

export const Contact = { phone: "(123) 456-7890" };

export const logos = [
  {
    image: "../assets/companyLogo/max.png",
    alt: "logo",
  },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#" },
  { label: "Support", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    // image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies Ltd",
    // image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's incredible and Hard-working",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    // image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    // image: user4,
    text: "Working with the team at ProSureTech was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    // image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    // image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Sustainability Consulting",
    description:
      "Empowering your business with sustainable solutions for a greener tomorrow.",
  },
  {
    icon: <Fingerprint />,
    text: "Project Management Consulting",
    description:
      "Streamlining your projects for success with expert management and strategic guidance.",
  },
  {
    icon: <ShieldHalf />,
    text: "Training & Development",
    description:
      "Unlock your team's full potential with tailored training programs.Drive growth and success through continuous development and skill enhancement.",
  },
  {
    icon: <BatteryCharging />,
    text: "EHS Consulting",
    description:
      "Enhance your business’s safety and sustainability with expert EHS Consulting services. We help you navigate regulations, mitigate risks, and create a healthier, more compliant workplace.",
  },
  {
    icon: <PlugZap />,
    text: "ESG Consulting",
    description:
      "Drive sustainable growth with our expert ESG consulting services. We help you integrate environmental, social, and governance practices that boost reputation and long-term value.",
  },
  {
    icon: <GlobeLock />,
    text: "Manpower Management",
    description:
      "Optimize your workforce with our strategic Manpower Management services. We help you align talent with business goals, ensuring efficiency and growth.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const resourcesLinks = [
  {
    href: "https://www.linkedin.com/company/prosure-technologies",
    text: "LinkedIn",
  },
  { href: "#", text: "Instagram" },
  {
    href: `https://wa.me/9981338473?text=${encodeURIComponent(
      "Hi, Welcome to ProsureTech! How can we help you?"
    )}`,
    text: "Whatsapp",
  },
  { href: "tel:+917021171228", text: "Phone" },
  { href: "mailto:J9GK8@example.com", text: "Mail" },
];

export const platformLinks = [
  { href: "tel:+917021171228", text: "Phone: (+91) 7021171228" },
  {
    href: "https://www.google.com/maps?osid=31047da7-1782-40cb-9706-afdbf1f2677c&cp=22.845057~75.872194&lvl=12.00713&pi=0&v=2&sV=2&form=S00027",
    text: "Headquarters: Indore(M.P),india",
  },
  { href: "#", text: "Safety Consultant Firm" },
];

export const communityLinks = [
  {
    href: "https://www.linkedin.com/company/prosure-technologies/posts/",
    text: "Events",
  },
  {
    href: "https://www.linkedin.com/company/prosure-technologies/posts/",
    text: "Meetups",
  },

  {
    href: "https://www.linkedin.com/company/prosure-technologies/jobs/",
    text: "Jobs",
  },
];
