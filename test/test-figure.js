const React = require('react');
const TestUtils = require('react-addons-test-utils');
const should = require('chai').should();

const Figure = require('../js/components/figure');

describe('Figure component', function() {
    it('Renders the figure, image and caption', function() {
        const url = 'http://placehold.it/320x240';
        const alt = 'Placeholder image (320×240)';
        const caption = 'A placeholder image with caption';

        const renderer = TestUtils.createRenderer();
        renderer.render(<Figure url={url} alt={alt}>{caption}</Figure>);

        const figure = renderer.getRenderOutput();
        figure.type.should.equal('figure');
        figure.props.className.should.equal('gallery-image');

        const img = figure.props.children[0];
        img.type.should.equal('img');
        img.props.src.should.equal(url);
        img.props.alt.should.equal(alt);

        const figcaption = figure.props.children[1];
        figcaption.type.should.equal('figcaption');
        figcaption.props.children.should.equal(caption);
    });
});
