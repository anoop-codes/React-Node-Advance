import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';


const ArticleList = ({ articles, articleAction }) => {
    return (
        <div>
            {Object.values(articles).map(article => (
                <Article
                    key={article.id}
                    article={article}
                    action={articleAction}
                />
            ))}
        </div>
    );
};


ArticleList.propTypes = {
    articles: PropTypes.object.isRequired
};


export default ArticleList;
