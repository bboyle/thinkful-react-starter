const React = require('react');

const Figure = require('./figure');

const Gallery = function(props) {
	const images = props.images.map(function(figure, index) {
		return <Figure url={figure.url} alt="{figure.alt}" key={index}>{figure.description}</Figure>;
	});
};

module.exports = Gallery;
