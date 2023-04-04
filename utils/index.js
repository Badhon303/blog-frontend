export const formatDate = (dateString) => {
  const date = new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return date
}

export const makeCategory = (slug) => {
  if (typeof slug === "string") {
    return slug.split("-").join(" ")
  }
  return ""
}

export const debounce = (fn, timeout = 300) => {
  let timer
  const debounced = (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, timeout)
  }
  return debounced
}
