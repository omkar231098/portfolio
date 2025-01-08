"use client"; // Add this if you're using the file as a client-side component

import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";

function Page() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(
          `https://dev.to/api/articles?username=${personalData.devUsername}`
        );
        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
          {blogs.map(
            (blog, i) =>
              blog?.cover_image && <BlogCard blog={blog} key={i} />
          )}
        </div>
      )}
    </div>
  );
}

export default Page;
