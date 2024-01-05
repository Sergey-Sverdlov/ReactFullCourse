import React, {useEffect, useMemo, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css"
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/Select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModel from "./components/UI/MyModel/MyModel";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import getPageCount from "./components/utils/pages";
import pages from "./components/utils/pages";
import {usePagination} from "./hooks/usePagination";
import Pagination from "./components/pagination/Pagination";
import {BrowserRouter, Routes, Route, Link, Switch, Redirect} from 'react-router-dom';
import About from "./pages/About";
import Posts from "./pages/Post";
import Navbar from "./components/Navbar/Navbar";
import Error from "./pages/Error";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/about" element = {<About />} />
                    <Route path="/posts" element = {<Posts />} />
                    <Route path ="*" element={<Error />} />
                </Routes>
        </BrowserRouter>
    )
}

export default App