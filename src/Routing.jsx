import React from "react";
import { Routes, Route } from "react-router-dom";
import { 
aboutusURL, 
careersURL, 
contactusURL, 
dynamicDataInnerURL, 
dynamicDataURL, 
formURL, 
homeURL,
imageGalleryURL,
incDecURL,
productsURL,
propDrillingURL,
reactReduxURL,
reducerURL,
todoList1URL,
todoListURL,
} from "./helpers/paths";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./compnents/Header/Header";
import Aboutus from "./pages/Aboutus/Aboutus";
import Products from "./pages/Products/Products";
import Contactus from "./pages/Contactus/Contactus";
import Careers from "./pages/Careers/Careers";
import Footer from "./compnents/Footer/Footer";
import Header2 from "./compnents/Header2/Header2";
import Form from "./pages/Forms/Form";
import TodoList from "./pages/Projects/TodoList/TodoList";
import IncDec from "./pages/Projects/IncDec/IncDec";
import TodoListV2 from "./pages/Projects/TodoList/TodoList_project/TodoListV2";
import PropDrilling from "./pages/PropDrilling/PropDrilling";
import ReducerPractice from "./pages/useReducer/UseReducer_";
import ReactRedux from "./pages/ReactRedux/ReactRedux";
import DynamicArry from "./pages/DynamicArray/DynamicArray";
import DynamicArrayInner from "./pages/DynamicArray/DynamicArray_Inner";
import ImageGallery from "./pages/Image-Gallery/ImageGallery";
import HeaderV2 from "./compnents/HeaderV2/HeaderV2";

const Routing =  () => {
    return (
        <>
        {/* <Header />
        <Header2 /> */}
        <HeaderV2 />
        <Routes>
            <Route path={homeURL} element={<Homepage />} />
            <Route path={aboutusURL} element={<Aboutus />} />
            <Route path={productsURL} element={<Products />}/>
            <Route path={contactusURL} element={<Contactus />} />
            <Route path={careersURL} element={<Careers />} />
            <Route path={formURL} element={<Form />} />
            <Route path={todoListURL} element={<TodoList />} />
            <Route path={todoList1URL} element={<TodoListV2 />} />
            <Route path={incDecURL} element={<IncDec />} />
            <Route path={propDrillingURL} element={<PropDrilling />} />
            <Route path={reducerURL} element={<ReducerPractice />} />
            <Route path={reactReduxURL} element={<ReactRedux />} />
            <Route path={dynamicDataURL} element={<DynamicArry />} />
            <Route path={dynamicDataInnerURL} element={<DynamicArrayInner />} />
            <Route path={imageGalleryURL} element={<ImageGallery />} />
            {/* <Route exact path="/finalist/:slug" element={<DynamicArrayInner />} /> */}
        </Routes>
        <Footer />
        </>
    );
};

export default Routing;