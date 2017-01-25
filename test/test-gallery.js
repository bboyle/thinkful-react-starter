const React = require('react');
const TestUtils = require('react-addons-test-utils');
const should = require('chai').should();

const Gallery = require('../js/components/gallery');

describe('Gallery component', function() {
    it('Renders the gallery', function() {
        const images = [{
            url: 'http://placehold.it/320x240',
            alt: 'Placeholder image (320×240)',
            caption: 'A placeholder image with caption'
        }, {
            url: 'http://placehold.it/320x240',
            alt: 'Second placeholder image (320×240)',
            caption: 'Another image'
        }];

        const renderer = TestUtils.createRenderer();
        renderer.render(<Gallery images={images}/>);

        const gallery = renderer.getRenderOutput();
        gallery.type.should.equal('div');
        gallery.props.className.should.equal('gallery');
        gallery.props.children.length.should.equal(2);

        // test child components
        should.deepEqual(gallery.props.children[0].props, {
            url: images[0].url,
            alt: images[0].alt,
            children: images[0].caption
        });

        should.deepEqual(gallery.props.children[1].props, {
            url: images[1].url,
            alt: images[1].alt,
            children: images[1].caption
        });
    });
});
