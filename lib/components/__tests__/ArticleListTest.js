import React from 'react';

import renderer from 'react-test-renderer';
import ArticleList from '../ArticleList';

describe('ArtcileList', () => {

    const testProps = {
        article: {
            a: { id: 'a' },
            b: { id: 'b' }
        },
        action: {
            lookUpAuthor: jest.fn(() => ({}))
        }

    }

    it('render correctly', () => {

        const element = renderer.create(
            <ArticleList
                {...testProps}
            />
        ).toJSON();
        console.log(element)
    });

});
