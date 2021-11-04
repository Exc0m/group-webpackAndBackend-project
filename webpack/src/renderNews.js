import state from "./state"

// console.log("222", state)
const renderNews = () => {
    const ul = document.createElement("ul")
    const root = document.querySelector("#root")
    const comments = state.comments
    state.news.forEach((post) => {
        const li = document.createElement("li")
        const h1 = document.createElement("h1")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        const comm = document.createElement('p')

        h1.textContent = post.category.name
        h3.textContent = post.title
        p.textContent = post.text
        // comm.textContent = post.comment
        const commentEl = document.createElement("div")

        const commentsByNews = state.comments.filter(item => {
            return item.news === post._id
        })

        commentsByNews.forEach(com => {

            const comText = document.createElement("p")
            comText.style.color = "red"
            comText.textContent = com.comment
            commentEl.append(comText)
        })

        li.append(h1, h3, p, commentEl)
        ul.append(li)

    })
    root.append(ul)
    console.log(state.news)
}

export default renderNews