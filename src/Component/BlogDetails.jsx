import React from "react";

const BlogDetails = (props) => {
  const details = props.list?.postDetails || {};

  return (
    <div className="flex flex-col items-center min-h-screen py-8 px-4">
      <article className="w-full max-w-3xl flex flex-col">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center">
            {details.title}
          </h1>
          {details.img && (
            <div className="flex justify-center mb-6">
              <img
                src={details.img}
                alt={details.title || "Blog Image"}
                className="w-full max-h-[400px] object-cover rounded"
              />
            </div>
          )}
        </header>
        <section className="prose prose-lg mx-auto">
          <p className="text-lg leading-relaxed whitespace-pre-line">
            {details.content}
          </p>
        </section>
      </article>
    </div>
  );
};

export default BlogDetails;
