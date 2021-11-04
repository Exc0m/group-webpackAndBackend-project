import state from "./state";
import render from "./renderCategories"

const getCategories = () => {
    fetch("http://localhost:3400/categories")
        .then((res) => res.json())
        .then((posts) => {
            state.categories = posts
            render()
        })
}

export default getCategories