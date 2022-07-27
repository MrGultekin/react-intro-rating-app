import React from 'react';
import PropTypes from 'prop-types';

const Card = ({children,reverse}) => {
	return (
		<div className={`card ${reverse && 'reverse'}`}>
			{children}
		</div>
	);
}

Card.propTypes = {};


export default Card;
