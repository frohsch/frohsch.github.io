import Link from "next/link";

const BlogPost = ({ date, title, des, slug }) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <a className="w-full my-7 hover:-translate-x-1.5">
        <div className={`font-bold text-2xl mt-2`}>{title}</div>
        <div className={`font-light text-gray-600 text-xl mt-1`}>{des}</div>
        <div className="font-light text-xs text-gray-600">{date}</div>
      </a>
    </Link>
  );
};

export default BlogPost;
