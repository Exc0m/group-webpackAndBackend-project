import state from "./state";
import render from "./renderNews"

const getNews = () => {
    fetch("http://localhost:3400/news")
        .then((res) => res.json())
        .then((posts) => {
            state.news = posts
            render()
        })
}

export default getNews