const React = require('react');

const Figure = require('./figure');

const Gallery = function(props) {
	const figures = props.images.map(function(figure, index) {
		return <Figure url={figure.url} alt={figure.alt} key={index}>{figure.caption}</Figure>;
	});

	return <div className="gallery">{figures}</div>;
};

module.exports = Gallery;
