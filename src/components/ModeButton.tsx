import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ModeButton() {
  const { setTheme, theme  } = useTheme();
  const setOtherTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  };

  const CurrentButton = theme === 'dark'
    ? <Sun className="h-4 w-4" />
    : <Moon className="h-4 w-4" />

  return (
    <Button
      onClick={() => setOtherTheme()}
      variant="outline"
      size="icon"
      className="ml-auto h-8 w-8">
      {CurrentButton}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}