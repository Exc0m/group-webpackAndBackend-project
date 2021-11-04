import state from "./state";
// import render from "./renderComments"

const getComments = () => {
    fetch("http://localhost:3400/comments")
        .then((res) => res.json())
        .then((posts) => {
            state.comments = posts
            console.log(posts);
            // render()
        })
}

export default getComments