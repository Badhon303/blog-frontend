import axios from "axios"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL_BACKEND,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_KEY}`,
  },
})

export const urlBackend = process.env.NEXT_PUBLIC_API_BASE_URL_BACKEND

//Categories
export const fetchCategories = async () => await api.get("/api/categories")
// Articles
export const fetchArticles = async (queryString) =>
  await api.get(`/api/articles?${queryString}`)
// ArticleBySlug
export const fetchArticleBySlug = async (queryString) =>
  await api.get(`/api/articles?${queryString}`)
