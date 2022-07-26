import React from 'react';

const FeedbackList = ({feedback}) => {
	if (!feedback || feedback.length === 0) {
		return (
			<p>
				No Feedback Yet!...........
			</p>
		)
	}
	return <div> THIS is visible because feedback is Not Empty</div>

}


export default FeedbackList;