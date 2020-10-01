import React, { Component } from 'react';
import DataAPi from '../dataApi';

import { data } from '../testData.json';
import ArticleList from './ArticleList';

const api = new DataAPi(data)

class App extends Component {

    state = {
        articles: api.getArticals(),
        authors: api.getAuthors()
    }

    articleAction = {
        lookUpAuthor: authorId => this.state.authors[authorId]
    }


    render() {
        const { articles } = this.state;
        return (

            <ArticleList
                articles={articles}
                articleAction={this.articleAction}
            />

        );
    }
}

export default App;
