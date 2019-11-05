import Home from './pages/Home'
import Item from './pages/Item'
import About from './pages/About'
import Catalogue from './pages/About'

export default [
  {
    path: "/",
    label: "Главная",
    component: Home,
    exact: true
  },
  {
    path: "/item/:id",
    component: Item,
  },
  {
    path: "/catalogue",
    label: "Каталог",
    component: Catalogue,
  },
  {
    path: "/about",
    label: "О Компании",
    component: About,
  },
  {
    path: "/production",
    label: "Производство",
    component: About,
  },
  {
    path: "/contacts",
    label: "Контакты",
    component: About,
  },
]