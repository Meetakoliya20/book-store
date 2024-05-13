import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
function Courses() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen" style={{marginTop:"-50px"}}>
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
