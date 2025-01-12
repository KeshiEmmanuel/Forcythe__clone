import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { MdMoving, MdSavings } from "react-icons/md";
import { TbMessage2Bolt } from "react-icons/tb";

export const projectCompletedImagesLinks = [
    "/website/activity.svg",
    "/website/africaFund.svg",
    "/website/exec-pro.svg",
    "/website/stac.svg",
    "/website/starks.svg",
];

export const FeaturesWriteUp = [
    {
        id: 1,
        FeatureName: "Experience",
        icon: <MdMoving />,
        FeatureDescription:
            "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
    },
    {
        id: 2,
        icon: <TbMessage2Bolt />,
        FeatureName: "Quick Support",
        FeatureDescription:
            "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
    },
    {
        id: 3,
        icon: <MdSavings />,
        FeatureName: "Cost Saving",
        FeatureDescription:
            "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality",
    },
];

export const FulifmentStats = [
    {
        id: 1,
        statNumber: 50,
        statTitle: "Clients",
    },
    {
        id: 2,
        statNumber: 120,
        statTitle: "Projects",
    },
    {
        id: 3,
        statNumber: 10,
        statTitle: "Team Leads",
    },
    {
        id: 4,
        statNumber: 10,
        statTitle: "Glorious Years",
    },
];

export const BlogPosts = [
    {
        id: 1,
        blogTitle: "The Reformist",
        blogImg: "/website/blog-img-1.webp",
        BlogSubHeader: "Will AI take over Art?",
        date: "May 29th, 2024",
    },
    {
        id: 2,
        blogImg: "/website/blog-img-2.webp",
        blogTitle: "The Reformist",
        BlogSubHeader: "Cryptocurrency vs Tokens",
        date: "May 29th, 2024",
    },
    {
        id: 3,
        blogImg: "/website/blog-img-3.webp",
        blogTitle: "The Reformist",
        BlogSubHeader: "Cryptocurrency and Crypto asset",
        date: "May 29th, 2024",
    },
];

export const FooterLinks = [
    "About",
    "Services",
    "Portfolio",
    "Studio",
    "Foundation",
    "Careers",
    "Blog",
];

export const NavLinks = FooterLinks.slice(0, 5);
export const FooterIcons = [
    <FaFacebook />,
    <FaInstagram />,
    <FaTwitter />,
    <FaLinkedin />,
    <FaYoutube />,
];
