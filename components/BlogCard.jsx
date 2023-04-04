import React from "react"
import Link from "next/link"
import AuthorInfo from "./AuthorInfo"

const BlogCard = ({ article }) => {
  return (
    <div>
      <Link href={`/article/${article.attributes.Slug}`}>
        <h1 className="text-xl text-grey-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {article.attributes.Title}
        </h1>
      </Link>
      <AuthorInfo article={article} />
      <div className="text-gray-500">
        {article.attributes.shortDescription.slice(0, 250)}
        {article.attributes.shortDescription.length > 250 ? "..." : ""}
      </div>
    </div>
  )
}

export default BlogCard
