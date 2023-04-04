import Link from "next/link"
import Image from "next/image"

const BlogCardWithImage = ({ article }) => {
  return (
    <Link href="#">
      <div className="bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center h-64">
        <span className="text-2xl w-2/3 text-white p-6 font-bold after:content-[''] after:bg-primary after:block after:w-16 after:h-1 after:rounded-md after:mt-2 cursor-pointer">
          {article.attributes.Title}
        </span>
        <Image src="/gitbook.svg" width={140} height={140} />
      </div>
    </Link>
  )
}

export default BlogCardWithImage
