import logo from "@/assets/mirai-i-v2.png";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export const NewFooter = () => {
  const { t, i18n: { language } } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200/50 text-slate-700">

      <div className="container mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6 lg:gap-8 mb-8">
          {/* locations Column */}
          <div>
            <h6 className="mb-4 font-semibold uppercase text-sm tracking-wide text-mirai">
              {t("footer.locations.title")}
            </h6>
            <div className="space-y-2 text-sm">
              <p className="font-medium">Franklin</p>
              <p>{t("footer.locations.address-franklin")}</p>
              <p>{t("footer.locations.city-franklin")}</p>
              <p>
                <a
                  href="https://maps.app.goo.gl/wvaB3fmgrUKCrKzy7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-900"
                >
                  {t("footer.locations.see-map")}
                </a>
              </p>
              <p className="mt-4 font-medium">MUT</p>
              <p>{t("footer.locations.address-mut")}</p>
              <p>{t("footer.locations.city-mut")}</p>
              <p>
                <a
                  href="https://maps.app.goo.gl/YsvKtehdg6tZDyj37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-900"
                >
                  {t("footer.locations.see-map")}
                </a>
              </p>
            </div>
          </div>

          {/* Booking + Hours Column */}
          <div>
            <h6 className="mb-4 font-semibold uppercase text-sm tracking-wide text-mirai">
              {t("footer.booking-hours.title")}
            </h6>
            <div className="space-y-2 text-sm">
              <p className="mt-4 font-medium">{t("footer.booking-hours.franklin.name")}</p>
              <p>{t("footer.booking-hours.franklin.friday")}</p>
              <p>{t("footer.booking-hours.franklin.friday-hours")}</p>
              <p className="mt-2">{t("footer.booking-hours.franklin.weekend")}</p>
              <p>{t("footer.booking-hours.franklin.weekend-hours")}</p>
              <p className="mt-2">{t("footer.booking-hours.franklin.closed")}</p>
              <p className="mt-4 font-medium">{t("footer.booking-hours.mut.name")}</p>
              <p>{t("footer.booking-hours.mut.hours")}</p>
              <p>{t("footer.booking-hours.mut.hours-time")}</p>
            </div>
          </div>

          {/* Careers Column */}
          <div>
            <h6 className="mb-4 font-semibold uppercase text-sm tracking-wide text-mirai">
              {t("footer.careers.title")}
            </h6>
            <div className="space-y-2 text-sm">
              <p>
                <Link
                  to={`/${language}/page/stage-and-applications`}
                  className="underline hover:text-slate-900"
                >
                  {t("footer.careers.join-team")}
                </Link>
              </p>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h6 className="mb-4 font-semibold uppercase text-sm tracking-wide text-mirai">
              {t("footer.contact.title")}
            </h6>
            <div className="space-y-2 text-sm">
              <p>
                <a
                  href="#"
                  data-tally-open="mBBBaY"
                  data-tally-emoji-text="🍜"
                  data-tally-emoji-animation="wave"
                  data-tally-auto-close="5000"
                  className="underline hover:text-slate-900"
                >
                  {t("footer.contact.contact")}
                </a>
              </p>
              <p className="mt-4">{t("footer.contact.phone")}</p>
            </div>
          </div>

          {/* Follow Column */}
          <div>
            <h6 className="mb-4 font-semibold uppercase text-sm tracking-wide text-mirai">
              {t("footer.follow.title")}
            </h6>
            <div className="space-y-2 text-sm">
              <p>
                <a
                  href="https://instagram.com/miraifoodlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-900"
                >
                  {t("footer.follow.instagram")}
                </a>
              </p>
              <p>
                <a href="https://www.tiktok.com/@miraifoodlab" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-900">
                  {t("footer.follow.tiktok")}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section with logo and copyright */}
        <div className="pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <img
                src={logo}
                alt="Mirai Food Lab"
                className="w-[100px] lg:w-[120px] h-auto"
              />
            </div>
            <div className="text-sm text-slate-500 text-center md:text-right">
              <p>{t("footer.copyright").replace("{year}", currentYear.toString())}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
