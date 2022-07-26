import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FeedbackData from "../data/FeedbackData.js";

const FeedbackItem = props => {
	const [rating, setRating] = useState(7)
	const [text, setText] = useState()



	return (
		<div className="card">
			<div className="num-display">{rating}</div>
			<div className="text-display">{text}</div>
		</div>
	);
};

// FeedbackItem.propTypes = {
//
// };

export default FeedbackItem;