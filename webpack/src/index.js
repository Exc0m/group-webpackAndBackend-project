import "./style.css"

import getNews from './getNews'
import getCategories from "./getCategories";
import getComments from "./getComments";
import state from "./state"

getCategories()
getComments()
getNews()

console.log(state)