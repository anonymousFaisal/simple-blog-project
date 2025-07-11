import React, { useEffect, useState } from "react";
import Layout from "./../Layout/Layout";
import { useParams } from "react-router-dom";
import { postByCategory } from "../APIRequest/APIRequst";
import BlogList from "../Component/BlogList";
import Loader from "../Component/Loader";

const ByCategoryPage = () => {
  let { categoryID } = useParams();
  let [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postByCategory(categoryID);
      setList(res);
    })();
  }, [categoryID]);

  return <Layout>{list === null ? <Loader/> : <BlogList list={list} />}</Layout>;
};

export default ByCategoryPage;
