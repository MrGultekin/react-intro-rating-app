import React from 'react';
import FeedbackItem from "./FeedbackItem.jsx";
import PropTypes from "prop-types";

const FeedbackList = ({feedback}) => {
	if (!feedback || feedback.length === 0) {
		return (
			<p>
				No Feedback Yet!...........
			</p>
		)
	}
	return (
		<div className={'feedback-list'}>
			{feedback.map((item) => (
				<FeedbackItem key={item.id} item={item}/>
			))}
		</div>
	)
}
FeedbackList.propTypes = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			id:PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			rating:PropTypes.number.isRequired,
		})
	)
}
// FeedbackList.propTypes = {
// 	feedback: PropTypes.array
// }


export default FeedbackList;