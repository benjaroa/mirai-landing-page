import { Route, Switch } from "wouter";
import { Home } from "./pages/Home";
import { MenuComponent } from "./pages/menu/Menu";
import { Page404 } from "./pages/404";
import { JsonPage } from "./pages/JsonPage";
import { Partners } from "./pages/Partners";

const externalUrls: Record<string, string> = {
  menu: "https://drive.google.com/file/d/1Ik6jZQVMnC6R5BzDAfOVFPIONkEXryWA/",
  shop: "https://tienda.miraifoodlab.cl",
};
const redirectTo = (name: string) => {
  const url = externalUrls[name] || "/";
  return (window.location.href = url);
};

export const Router = () => {
  return (
    <Switch>
      <Route path="/:locale?/">
        <Home />
      </Route>

      {Object.keys(externalUrls).map((name) => (
        <Route
          key={name}
          path={`/:locale?/page/${name}`}
          component={() => redirectTo(name)}
        />
      ))}

      <Route path="/:locale?/page/partners">
        <Partners />
      </Route>

      <Route path="/:locale?/page/:target">
        {({ target }) => {
          if (!target) return <Page404 pageName="" />;
          return <JsonPage target={target} />;
        }}
      </Route>

      <Route path="/:locale?/menu">
        <MenuComponent />
      </Route>

      <Route path="*">
        {(params) => <Page404 pageName={params["*"]} />}
      </Route>
    </Switch>
  );
};
