import React from 'react';
import PropTypes from 'prop-types';

//it make it global...
const style = {
    article: {
        paddingbottom: 10,
        marginBottom: 10,
        borderBottomStyle: 'solid',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1
    },
    title: {
        fontWeight: 'bold'
    },
    date: {
        fontSize: '0.85em',
        color: '#888'
    },
    author: {
        paddingTop: 10,
        paddingBottom: 10
    },
    body: {
        paddingLeft: 20
    }
}

const toDateString = (date) => new Date(date).toDateString();

const Article = ({ article, action }) => {
    const author = action.lookUpAuthor(article.authorId);

    return (
        <div style={style.article}>
            <div style={style.title}>{article.title}</div>
            <div style={style.data}>{toDateString(article.date)}</div>
            <div style={style.author}>
                <a href={author.website}>
                    {author.firstName} , {author.lastName}
                </a>
            </div>
            <div style={style.body}>
                {article.body}
            </div>
        </div>
    );
};


Article.propTypes = {
    article: PropTypes.object.isRequired
};


export default Article;
