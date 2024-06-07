import logo from "@/assets/mirai-i.png";
import { getDrawer } from './TypesMap';
import { useTranslation } from "react-i18next";

export const NewFooter = () => {
  const { t } = useTranslation();
  return (
    <footer className="container text-center">
      <div className="mx-6 py-20 mt-2 text-center md:text-left text-sm text-slate-500">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="mx-auto md:mx-0">
            <img
              src={logo}
              alt="About feature"
              className="w-[100px] lg:w-[150px]"
            />
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Links
            </h6>
            <p className="mb-4">
              <a href="#!">Contacto</a>
            </p>
            <p className="mb-4">
              {getDrawer({ key: 1, target: "work-and-stage-with-us", title: t("footer.work-and-stage-with-us") })}
            </p>
            <p className="mb-4">
              <a href="#!">Prensa</a>
            </p>
            <p>
              <a href="#!">Quiénes somos</a>
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
};
