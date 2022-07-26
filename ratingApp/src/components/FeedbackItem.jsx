import Card from "../sharedUI/Card.jsx";
import PropTypes from "prop-types";
// import {FaTimes} from "react-icons/all.js";
import {FaTimes} from "react-icons/fa";

const FeedbackItem = ({item,handleDelete}) => {
	// function handleClick(id) {
	// 	console.log(id)
	// }
	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<button className='close' onClick={()=> handleDelete(item.id)}>
				<FaTimes color={'purple'}/>
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
};

FeedbackItem.propTypes = {
item: PropTypes.object.isRequired
};

export default FeedbackItem;