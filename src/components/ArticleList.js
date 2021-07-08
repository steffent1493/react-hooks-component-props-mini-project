import React from "react";
import Article from "./Article";

function ArticleList(blogPost) {
    
    const ArticleItems = blogPost.blogPost.map((Articles) => {
        return (
            <Article key={Articles.id} title={Articles.title} date={Articles.date} preview={Articles.preview}/>
        )
    })
    return (
        <main>{ArticleItems}</main>
    )
}


export default ArticleList;