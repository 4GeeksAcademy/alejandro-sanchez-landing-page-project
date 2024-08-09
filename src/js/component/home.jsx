import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Card from "./card";
import Jumbotron from "./jumbotron";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<div>
				<div className="p-1">
					<Jumbotron/>
				</div>
			
			<div className="container-xxl">
				<div className="row d-flex justify-content-between">
					<div className="col-lg-3 col-md-6 mb-4 p-1">
					<Card/>
					</div>
					<div className="col-lg-3 col-md-6 mb-4 p-1">
					<Card/>
					</div>
					<div className="col-lg-3 col-md-6 mb-4 p-1">
					<Card/>
					</div>
					<div className="col-lg-3 col-md-6 mb-4 p-1">
					<Card/>
					</div>
				</div>
			</div>
				<Footer/>
			</div>
		</div>
		
		
	);
};

export default Home;
