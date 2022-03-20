import { Route } from "./model/route";
import CharactersView from "./view/Characters";
import CharacterDetailsView from "./view/CharacterDetails";
import NotFound from "./view/NotFound";

const routes: Route[] = [
  {
    path: "/",
    isLoginRequire: false,
    title: "Characters",
    component: CharactersView,
  },
  {
    path: "/character/:id",
    isLoginRequire: false,
    title: "Character Details",
    component: CharacterDetailsView,
  },
  {
    path: "*",
    isLoginRequire: false,
    title: "Not found",
    component: NotFound,
  },
];

export default routes;
