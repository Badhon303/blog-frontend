import React from "react"
import BlogCard from "./BlogCard"
import BlogCardWithImage from "./BlogCardWithImage"

const ArticleList = ({ articles }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-16 mt-16">
      {articles.map((article, idx) => {
        return (
          <div key={article.id}>
            {idx === 1 ? (
              <BlogCardWithImage article={article} />
            ) : (
              <BlogCard article={article} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default ArticleList
