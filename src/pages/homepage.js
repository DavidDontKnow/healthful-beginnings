import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Jumbotron from "../components/jumbotron";
import AboutUs from "../components/aboutus";


const HomePage = () => (
    <main className="container">
        <Navbar />
        <Jumbotron />
        <AboutUs />
        <Footer />
    </main>

);

export default HomePage;

