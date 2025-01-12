import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { FooterLinks, NavLinks } from "../data";
import Button from "./Button";
const Navbar = () => {
    const [dropDown, setDropDown] = useState(false);
    return (
        <header className="fixed w-full font-primary top-0 bg-transparent backdrop-blur-lg z-[1000]">
            <nav className="max-container py-8 lg:py-6 flex items-center justify-between relative">
                <div className="w-28 lg:w-32">
                    <img src="/website/logo.svg" alt="navlogo" />
                </div>
                <div>
                    <div
                        onClick={() => setDropDown((prev) => !prev)}
                        className="text-2xl bg-transperent-hero p-1 md:hidden"
                    >
                        <MdMenu />
                    </div>
                    <ul className="hidden md:flex items-center gap-5 lg:-ml-[26rem]">
                        {NavLinks.map((link) => (
                            <li>
                                <a href={`#${link.toLowerCase()}`}>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <Button className="hidden md:block">Book a Call</Button>
                {dropDown && (
                    <div className="absolute right-3 top-28 md:hidden flex flex-col gap-5 w-64 navmenu-gradient bg-primary p-12 rounded-3xl font-primary">
                        {FooterLinks.map((link, i) => (
                            <ul className="">
                                <li key={i}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-lg"
                                    >
                                        {link}
                                    </a>
                                </li>
                            </ul>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
