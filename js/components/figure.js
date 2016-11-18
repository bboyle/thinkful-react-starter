const React = require('react');

const Figure = function(props) {
	return (
		<figure className="gallery-image">
			<img src={props.url} alt={props.alt} />
			<figcaption>{props.children}</figcaption>
		</figure>
	);
};

module.exports = Figure;
