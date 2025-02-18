import "./App.css";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/views/Header";
import Footer from "./components/views/Footer";

function App() {
	return (
		<React.Fragment>
			<div className="flex flex-col h-full bg-black relative">
				<Header className="-z-50" />
				<main className="container mx-auto px-3 pb-12 flex-grow ">
					<Outlet />
				</main>
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default App;
