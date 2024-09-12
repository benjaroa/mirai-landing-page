import logo from "@/assets/mirai-i.png";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export const NewFooter = () => {
  const { t, i18n: { language } } = useTranslation();

  return (
    <footer className="container text-center">
      <div className="mx-6 py-10 mt-2 text-center md:text-left text-sm text-slate-500">
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
              <a href="#" data-tally-open="mBBBaY" data-tally-emoji-text="🍜" data-tally-emoji-animation="wave" data-tally-auto-close="5000">
                {t("footer.contact-link")}
              </a>
            </p>
            <p className="mb-4">
              <Link to={`/${language}/page/work-and-stage-with-us`}>
                {t("footer.work-and-stage-with-us")}
              </Link>
            </p>
            {/*<p className="mb-4">
              <a href="#!">Prensa</a>
            </p>
            <p>
              <a href="#!">Quiénes somos</a>
            </p>*/}
          </div>
        </div>
      </div>

    </footer>
  );
};
