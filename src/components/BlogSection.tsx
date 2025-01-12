import React from "react";
import Button from "./Button";
import { BsCaretRightFill } from "react-icons/bs";
import { BlogPosts } from "../data";
import BlogCard from "./BlogCard";

const BlogSection = () => {
    return (
        <section className="section-padding font-primary py-[220px] md:py-[120px]">
            <div className="max-container">
                <div className="lg:flex lg:items-center lg:justify-between lg:py-12">
                    <h1 className="text-4xl pb-7">
                        Read our articles, news and product blog
                    </h1>
                    <Button className="flex items-center gap-1 mb-10">
                        Visit Blog <BsCaretRightFill className="text-lg" />
                    </Button>
                </div>
                <div className="grid grid-cols-1 w-full gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {BlogPosts.map((blog) => (
                        <BlogCard blog={blog} key={blog.id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
