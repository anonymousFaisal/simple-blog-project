import React from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {
  return (
    <div className="min-h-screen flex flex-col items-center  py-12 px-4">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {props.list.map((item, index) => (
            <Link
              key={index.toString()}
              to={"/details/" + item["id"]}
              className="flex flex-col rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden"
              style={{ minWidth: 0 }}
            >
              <div className="h-48 w-full overflow-hidden flex items-center justify-center">
                <img
                  src={item["img"]}
                  alt={item["title"]}
                  className="object-cover w-full h-full transition-transform duration-200 hover:scale-105"
                />
              </div>
              <div className="flex-1 flex flex-col p-5">
                <h2 className="text-blue-600 text-xl font-semibold mb-2 line-clamp-2">{item["title"]}</h2>
                <p className="mb-4 flex-1 line-clamp-3">{item["short"]}</p>
                <span className="mt-auto text-blue-600 hover:underline font-medium">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
