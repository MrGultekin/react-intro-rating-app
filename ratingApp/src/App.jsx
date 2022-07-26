import './App.css'
import Header from "./components/Header.jsx";
import FeedbackItem from "./components/FeedbackItem.jsx";
import {useState} from "react";
import FeedbackData from "./data/FeedbackData.js";
import FeedbackList from "./components/FeedbackList.jsx";

function App() {
	const [feedback,setFeedback] =useState()
	return (
		<>
			<div className="container">
				<Header/>
				<FeedbackList feedback={feedback}/>
			</div>
		</>
	)
}

export default App
