import { BlogPostTypes } from "../types/BlogCardTypes";

interface Props {
    blog: BlogPostTypes;
}
export default function BlogCard({ blog }: Props) {
    return (
        <div>
            <div className="pb-5">
                <img
                    src={blog.blogImg}
                    alt={blog.blogImg}
                    className="object-cover w-full h-[240px] rounded-2xl"
                />
            </div>
            <div className="border-l-2 border-b-white pl-5">
                <h2 className="text-xl pb-2">Blog</h2>
                <p className="text-gray-400 pb-2">
                    {blog.blogTitle} {blog.date}
                </p>
                <h1 className="text-2xl pb-2">{blog.BlogSubHeader}</h1>
            </div>
        </div>
    );
}
