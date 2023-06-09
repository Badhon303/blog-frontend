import Head from "next/head"
import { fetchCategories, fetchArticles } from "../api"
import Tabs from "../components/Tabs"
import ArticleList from "../components/ArticleList"
import Pagination from "../components/Pagination"
import qs from "qs"
import { useRouter } from "next/router"
import { debounce } from "../utils"

export default function Home({ categories, articles }) {
  const { page, pageCount } = articles.pagination
  const router = useRouter()
  const handleSearch = (query) => {
    router.push(`/?search=${query}`)
  }
  return (
    <>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Tabs
          categories={categories.items}
          handleOnSearch={debounce(handleSearch, 500)}
        />
        <ArticleList articles={articles.items} />
        <Pagination page={page} pageCount={pageCount} />
      </div>
    </>
  )
}

export const getServerSideProps = async ({ query }) => {
  // fetch categories
  const { data: categories } = await fetchCategories()
  // fetch articles
  const options = {
    populate: ["users_permissions_user.image"],
    sort: ["id:desc"],
    pagination: {
      page: query.page ? query.page : 1,
      pageSize: 10,
    },
  }
  if (query.search) {
    options.filters = {
      Title: {
        $containsi: query.search,
      },
    }
  }
  const queryString = qs.stringify(options)
  const { data: articles } = await fetchArticles(queryString)

  return {
    props: {
      categories: {
        items: categories.data,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
    },
  }
}
