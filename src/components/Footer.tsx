import { FooterIcons, FooterLinks } from "../data";
import EmailField from "./EmailField";

const Footer = () => {
    return (
        <footer className="bg-secondary section-padding font-primary w-screen">
            <div className="max-container border-b-2 border-b-blue-300 pb-10 lg:grid lg:grid-cols lg:gap-16">
                <div className="h-full">
                    <EmailField />
                </div>
                <div className="mt-10 lg:mt-0 lg:flex lg:gap-16">
                    <div className="lg:flex lg:flex-col lg:justify-between">
                        <div>
                            <img
                                src="/website/logo.svg"
                                alt="logo"
                                className="pb-5"
                            />
                            <p className="text-gray-400 lg:w-[500px]">
                                We are the growth company for businesses looking
                                to scale. We are dedicated to transforming
                                businesses with bespoke digital solutions that
                                drive growth.
                            </p>
                        </div>
                        <ul className="hidden mt-10 lg:flex items-start justify-start gap-5">
                            {FooterIcons.map((icon, i) => (
                                <div
                                    key={i}
                                    className="text-2xl text-blue-300 border-blue-300 border-2 p-2 rounded-full"
                                >
                                    {icon}
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="mt-16 mb-8 lg:mt-0  text-2xl font-bold">
                            Company
                        </h2>
                        <ul className="flex flex-col gap-2">
                            {FooterLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-blue-300"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <ul className="mt-10 flex items-center justify-center gap-5 lg:hidden">
                            {FooterIcons.map((icon, i) => (
                                <div
                                    key={i}
                                    className="text-2xl text-blue-300 border-blue-300 border-2 p-2 rounded-full"
                                >
                                    {icon}
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <p className="max-container text-sm text-center lg:text-start pt-3 text-blue-300">
                Copyright &copy; 2024 Forcythe. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
