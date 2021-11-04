import state from "./state"

const renderCategories = () => {
    const ul = document.createElement("ul")
    const root = document.querySelector("#root")
    state.categories.forEach((post) => {
        const li = document.createElement("li")
        const h3 = document.createElement("h3")

        h3.textContent = post.name

        li.append(h3)
        ul.append(li)

    })
    root.append(ul)
}

export default renderCategories