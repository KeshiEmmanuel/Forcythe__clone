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

export const TestiomonialsTabsHeading = [
    {
        id: 1,
        tabImage: "/testimonial/ExecutivePros.svg",
        value: "ExecutivePros",
        tabTitle: "Testimony, Co-founder",
        tabDescription:
            "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",

        tabCompany: "Executive Pros",
    },
    {
        id: 2,
        tabImage: "/testimonial/stacai.svg",
        value: "stacai",
        tabTitle: "Edwin, Former CTO",
        tabDescription:
            "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.",

        tabCompany: "Stac AI",
    },
    {
        id: 3,
        tabImage: "/testimonial/iwaria.svg",
        value: "iwaria",
        tabTitle: "Iwaria, Founder",
        tabDescription:
            "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.",
        tabCompany: "Iwaria",
    },
    {
        id: 4,
        tabImage: "/testimonial/Beaupreneur.svg",
        value: "Beaupreneur",
        tabTitle: "Christiana, Founder",
        tabDescription:
            "I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.",

        tabCompany: "Beaupreneur",
    },
];

export const CycleContents = [
    {
        id: 1,
        cycleTitle: "Idea",
        cycleSubHeading: "Your vision is unique.",
        cycleDescription:
            "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.",
        cycleImage: "/camera-man.svg",
    },
    {
        id: 2,
        cycleTitle: "Design",
        cycleSubHeading: "Crafting the blueprint for success",
        cycleDescription:
            "Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
        cycleImage: "/plan-design.svg",
    },
    {
        id: 3,
        cycleTitle: "Develop",
        cycleSubHeading: "Turning blueprints into reality.",
        cycleDescription:
            "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life",
        cycleImage: "/plan-develop.svg",
    },
    {
        id: 4,
        cycleTitle: "Launch",
        cycleSubHeading: "Your launchpad to the market.",
        cycleDescription:
            "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
        cycleImage: "/plan-launch.svg",
    },
];
