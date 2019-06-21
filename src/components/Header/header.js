//sets up the reusable Jumbotron component
import React from "react";
import "./header.css";

const Header = () => (
	<header className = "header row pt-5 pr-5 pl-5 pb-0 mt-5">
		<div className="col-md-12 mx-auto text-center">
		</div>
		<div className="col-md-12 mx-auto text-center">
		<h2 className="h4-responsive">To begin, click an image. The goal is to click all of the images once. If you click on the same image twice, you will lose.</h2>
		</div>
		</header>

);
export default Header;
