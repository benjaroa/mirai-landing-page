import Home from "./components/Home";
import { Route, Switch } from "wouter";
import { MenuComponent } from "./components/menu/Menu";
import { Page404 } from './components/404';

export const Router = () => {
  return (
    <Switch>
      <Route path="/:locale?/">
        <Home />
      </Route>

      <Route path="/:locale?/menu">
        <MenuComponent />
      </Route>

      <Route><Page404 /></Route>
    </Switch>
  );
};
