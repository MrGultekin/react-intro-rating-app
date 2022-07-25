import React from 'react';
import PropTypes from 'prop-types';

const Header = ({text,myTextColor,myBgColor}) => {
	const headerStyle = {
		backgroundColor:myBgColor,
		color: myTextColor,
	}

	return (
		<header style={headerStyle}>
			<div className="container">
				<h2>{text}</h2>
			</div>
		</header>
	);
};

Header.propTypes = {
	text: PropTypes.string,
	myBgColor: PropTypes.string,
	myTextColor: PropTypes.string,
};
Header.defaultProps = {
	text: 'FeedBack UI',
	myBgColor: 'rgba(0,0,0,0.4)',
	myTextColor:'#ff6a95'
}

export default Header;