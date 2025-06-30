import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from './../Layout/Layout';
import { postDetails } from '../APIRequest/APIRequst';
import BlogDetails from '../Component/BlogDetails';
import Loader from '../Component/Loader';

const DetailsPage = () => {

    let { postID } = useParams();
    let [list, setList] = useState(null);
    
      useEffect(() => {
        (async () => {
          let res = await postDetails(postID);
          console.log("API fetch result:", res); // Check API fetch result
          setList(res);
        })();
      }, []);


    return <Layout>{list === null ? <Loader/> : <BlogDetails list={list} />}</Layout>;
};

export default DetailsPage;