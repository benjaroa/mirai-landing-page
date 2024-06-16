import Home from "./components/Home";
import { Route, Switch } from "wouter";
import { MenuComponent } from "./components/menu/Menu";

export const Router = () => {
  return (
    <Switch>
      <Route path="/:locale?/">
        <Home />
      </Route>

      <Route path="/:locale?/menu">
        <MenuComponent />
      </Route>

      <Route>404: Not Found</Route>
    </Switch>
  );
};
