import state from "../state"

const renderNews = () => {
    const ul = document.createElement("ul")
    const root = document.querySelector("#root")
    state.news.forEach((post) => {
        const li = document.createElement("li")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")

        h3.text = post.title
        p.textContent = post.text

        li.append(h3, p)
        ul.append(li)

    })
    root.append(ul)
}

export default renderNews