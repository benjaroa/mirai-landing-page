import { Button } from "./ui/button";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { TikTokIcon } from "./TikTokIcon";
import { LocaleToggle } from "./LocalesToggle";
import { ModeButton } from "./ModeButton";
import { ArrowRight } from "lucide-react";

type TopButtonsProps = {
  activateDarkMode?: boolean;
  showTopAlertMessage?: boolean;
};

export const TopButtons = ({
  activateDarkMode,
  showTopAlertMessage,
}: TopButtonsProps) => {
  return (
    <div className="z-10 sticky bg-white top-0 shadow-lg overflow-hidden">
      <header className="container">
        <div className="flex justify-end space-x-2 py-4">
          <a target="_blank" href="https://instagram.com/miraifoodlab">
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <InstagramLogoIcon className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
          </a>
          <a target="_blank" href="https://www.tiktok.com/@miraifoodlab">
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <span className="h-4 w-4">
                <TikTokIcon />
              </span>
              <span className="sr-only">TikTok</span>
            </Button>
          </a>
          {activateDarkMode && <ModeButton />}
          <LocaleToggle />
        </div>
      </header>
      {showTopAlertMessage && (
        <div className="bg-mirai text-white">
          <div className="container py-4 text-right">
            🤓 Vista la tienda y recibe nuestros productos directo en tu casa <Button variant="secondary" size="icon">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
