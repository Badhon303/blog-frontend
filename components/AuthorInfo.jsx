import React from "react"
import { formatDate } from "../utils"
import { urlBackend } from "../api"

const AuthorInfo = ({ article }) => {
  return (
    <div className="flex items-center my-4">
      <div className="rounded-lg mr-2 overflow-hidden">
        <img
          src={`${urlBackend}${article.attributes.users_permissions_user.data.attributes.image.data.attributes.formats.thumbnail.url}`}
          alt="author Info"
          height={40}
          width={40}
        />
      </div>
      <span className="text-sm font-bold text-grey-600">
        {article.attributes.users_permissions_user.data.attributes.firstname}{" "}
        {article.attributes.users_permissions_user.data.attributes.lastname} on
        &nbsp;
      </span>
      <span className="text-grey-400">
        {formatDate(article.attributes.createdAt)}
      </span>
    </div>
  )
}

export default AuthorInfo
