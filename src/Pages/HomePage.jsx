import React, { useState, useEffect } from "react";
import Layout from "./../Layout/Layout";
import BlogList from "./../Component/BlogList";
import { postLatestCategories } from "../APIRequest/APIRequst";
import Loader from "../Component/Loader";

const HomePage = () => {
  let [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postLatestCategories();
      setList(res);
    })();
  }, []);

  return <Layout>{list === null ? <Loader /> : <BlogList list={list} />}</Layout>;
};

export default HomePage;
