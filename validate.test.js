import './matchmedia'; // mocks window.matchMedia
import {registerCoreBlocks} from '@wordpress/block-library';
import {isValidBlockContent} from '@wordpress/blocks';

registerCoreBlocks();

test('isValidBlockContent', () => {
    expect(isValidBlockContent('core/paragraph', {}, 'Foo')).toBe(false);
});

