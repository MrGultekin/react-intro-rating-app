import './App.css'
import Header from "./components/Header.jsx";
import FeedbackItem from "./components/FeedbackItem.jsx";
import {useState} from "react";
import FeedbackData from "./data/FeedbackData.js";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";

function App() {
	const [feedback,setFeedback] =useState(FeedbackData)

	const deleteFeedback = (id)=>{
		if (window.confirm('Are you sure you want to delete?')){
			setFeedback(feedback.filter((item)=>item.id !== id))
		}
	}
	return (
		<>
			<div className="container">
				<Header/>
				<FeedbackStats feedback={feedback}/>
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
			</div>
		</>
	)
}

export default App
