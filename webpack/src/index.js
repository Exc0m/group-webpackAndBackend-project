import img from "../assets/logo"
import "./style.css"

const root = document.querySelector("#root");

const logo = document.createElement("img");
logo.src = img

const hello = (name) => `Hello ${name}!`
const h1 = document.createElement("h1")
h1.textContent = hello("Intocode")
root.prepend(h1)

root.append(logo)

