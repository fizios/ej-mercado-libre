import Home from "../src/containers/home";
import List from "../src/containers/list";
import Details from "../src/containers/details";

module.exports = [
{
  path: "/items/:id",
  exact: true,
  component: "container/details",
  renderComponent: Details
},
{
  path: "/items?q=:query",
  exact: true,
  component: "containers/list",
  renderComponent: List
},
{
  path: "/",
  exact: true,
  component: "container/home",
  renderComponent: Home
}
]