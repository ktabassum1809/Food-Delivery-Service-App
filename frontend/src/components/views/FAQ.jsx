import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	FaChevronUp,
	FaChevronDown,
	FaArrowUp,
	FaThumbsUp,
	FaThumbsDown,
	FaComments,
	FaPhone,
	FaEnvelope,
} from "react-icons/fa";
import faqData from "../../utils/FaqData";

const FAQ = () => {
	const [activeCategory, setActiveCategory] = useState("Ordering Process");
	const [expandedQuestions, setExpandedQuestions] = useState({});
	const [showBackToTop, setShowBackToTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowBackToTop(window.scrollY > 300);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleQuestion = (categoryIndex, questionIndex) => {
		const key = `${categoryIndex}-${questionIndex}`;
		setExpandedQuestions((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleFeedback = (categoryIndex, questionIndex, helpful) => {
		// Implement feedback logic here
		console.log(
			`Feedback recorded: ${helpful ? "Helpful" : "Not helpful"}`
		);
	};

	return (
		<div className="flex flex-col justify-center max-w-4xl mx-auto px-4 py-8 text-white h-screen">
			{/* Breadcrumb Navigation */}
			<div className="text-sm mb-6">
				<Link
					to="/"
					className="text-[#F97316]">
					Home
				</Link>
				<span className="mx-2">/</span>
				<span className="text-[#F97316] font-semibold">FAQ</span>
			</div>

			<h1 className="text-3xl font-bold mb-8">
				Frequently Asked Questions
			</h1>

			{/* Category Tabs */}
			<div className="flex flex-wrap gap-2 mb-8">
				{Object.keys(faqData).map((category) => (
					<button
						key={category}
						className={`px-4 py-2 rounded-full ${
							activeCategory === category
								? "bg-[#F97316] text-black font-semibold"
								: "bg-gray-200 text-gray-700"
						}`}
						onClick={() => setActiveCategory(category)}>
						{category}
					</button>
				))}
			</div>

			{/* Quick Jump Links */}
			{/* <div className="mb-8 p-4 bg-transparent rounded-lg">
				<h2 className="text-lg font-semibold mb-2">Quick Links</h2>
				<div className="flex flex-wrap gap-4">
					{Object.keys(faqData).map((category) => (
						<a
							key={category}
							href={`#${category
								.toLowerCase()
								.replace(/\s+/g, "-")}`}
							className="text-primary hover:underline">
							{category}
						</a>
					))}
				</div>
			</div> */}

			{/* FAQ Accordion */}
			<div className="space-y-6">
				{faqData[activeCategory].map((item, questionIndex) => (
					<div
						key={questionIndex}
						className="border rounded-lg overflow-hidden">
						<button
							className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-lighter"
							onClick={() =>
								toggleQuestion(activeCategory, questionIndex)
							}>
							<span className="font-medium">{item.question}</span>
							{expandedQuestions[
								`${activeCategory}-${questionIndex}`
							] ? (
								<FaChevronUp className="text-[#F97316]" />
							) : (
								<FaChevronDown className="text-[#F97316]" />
							)}
						</button>

						{expandedQuestions[
							`${activeCategory}-${questionIndex}`
						] && (
							<div className="px-6 py-4 bg-gray-50">
								<p className="text-gray-700 mb-4">
									{item.answer}
								</p>

								{/* Feedback Buttons */}
								<div className="flex items-center gap-4 mt-4">
									<span className="text-sm text-gray-600">
										Was this helpful?
									</span>
									<button
										onClick={() =>
											handleFeedback(
												activeCategory,
												questionIndex,
												true
											)
										}
										className="flex items-center gap-2 text-green-600 hover:text-green-700">
										<FaThumbsUp /> Yes
									</button>
									<button
										onClick={() =>
											handleFeedback(
												activeCategory,
												questionIndex,
												false
											)
										}
										className="flex items-center gap-2 text-red-600 hover:text-red-700">
										<FaThumbsDown /> No
									</button>
								</div>
							</div>
						)}
					</div>
				))}
			</div>

			{/* Support Options */}
			<div className="flex flex-col justify-between items-center mt-12 bg-transparent p-6 rounded-lg">
				<h2 className="text-xl font-semibold mb-4">Need More Help?</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<a
						href="#live-chat"
						className="flex items-center gap-2 text-primary hover:underline">
						<FaComments /> Start Live Chat
					</a>
					<a
						href="mailto:support@fooddelivery.com"
						className="flex items-center gap-2 text-primary hover:underline">
						<FaEnvelope /> Email Support
					</a>
					<a
						href="tel:1-800-FOOD-DEL"
						className="flex items-center gap-2 text-primary hover:underline">
						<FaPhone /> Call Us
					</a>
				</div>
			</div>

			{/* Back to Top Button */}
			{showBackToTop && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
					aria-label="Back to top">
					<FaArrowUp />
				</button>
			)}
		</div>
	);
};

export default FAQ;
