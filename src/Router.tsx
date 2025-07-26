import { Route, Switch } from "wouter";
import { Home } from "./pages/Home";
import { MenuComponent } from "./pages/menu/Menu";
import { Page404 } from "./pages/404";
import { JsonPage } from "./pages/JsonPage";
import { Partners } from "./pages/Partners";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const externalUrls: Record<string, string> = {
  "menu": "https://drive.google.com/file/d/1xlA85COECUPE-Mn1CT6e1bwflz1b250w/view",
  "menu-franklin": "https://drive.google.com/file/d/1xlA85COECUPE-Mn1CT6e1bwflz1b250w/view",
  "menu-mut": "https://gour.media/mirai-mut",
  shop: "https://tienda.miraifoodlab.cl",
};
const redirectTo = (name: string) => {
  const url = externalUrls[name] || "/";
  return (window.location.href = url);
};

const baseTitle = "Mirai Food Lab";

export const Router = () => {
  const { t } = useTranslation();
  return (
    <Switch>
      <Route path="/:locale?/">
        <Helmet>
          <title>{baseTitle}</title>
        </Helmet>
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
        <Helmet>
          <title>{baseTitle} - Partners</title>
        </Helmet>
        <Partners />
      </Route>

      <Route path="/:locale?/page/:target">
        {({ target }) => {
          if (!target) return <Page404 pageName="" />;
          return (
            <>
              <Helmet>
                <title>{baseTitle} - { t(`pages.${target}`) }</title>
              </Helmet>
              <JsonPage target={target} />
            </>
          );
        }}
      </Route>

      <Route path="/:locale?/menu">
        <Helmet>{baseTitle} - { t("pages.menu") }</Helmet>
        <MenuComponent />
      </Route>
      <Route path="/:locale?/menu-franklin">
        <Helmet>{baseTitle} - { t("pages.menu-franklin") }</Helmet>
        <MenuComponent />
      </Route>
      <Route path="/:locale?/menu-mut">
        <Helmet>{baseTitle} - { t("pages.menu-mut") }</Helmet>
        <MenuComponent />
      </Route>

      <Route path="*">
        {(params) => (
          <>
            <Helmet>{baseTitle} - 404</Helmet>
            <Page404 pageName={params["*"]} />
          </>
        )}
      </Route>
    </Switch>
  );
};
