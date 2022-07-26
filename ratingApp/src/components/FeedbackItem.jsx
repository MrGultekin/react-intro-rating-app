import React, {useState} from 'react';
import PropTypes from 'prop-types';

const FeedbackItem = props => {
	const [rating, setRating] = useState(7)
	const [text, setText] = useState('Text from useState.')

	const handleClick = () => {
		// setRating(70)
		setRating((prevState)=>{
			console.log({prevState})
		 	return prevState +1 ;
		})
	};

	return (
		<div className="card">
			<div className="num-display">{rating}</div>
			<div className="text-display">{text}</div>
			<button onClick={handleClick}>Click Me!....</button>

		</div>
	);
};

// FeedbackItem.propTypes = {
//
// };

export default FeedbackItem;