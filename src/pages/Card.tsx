import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import {
  Link,
  Coffee,
  Croissant,
  Martini,
  Store,
  Utensils,
  MapPin,
} from "lucide-react";

export type CustomCardType = {
  name?: string;
  instagram?: string;
  website?: string;
  district?: string;
  address?: string;
  labels?: string[];
  lat?: number;
  lng?: number;
};

const partnerTypeIcons: Record<string, JSX.Element> = {
  tienda: <Store className="h-4 w-4" />,
  bar: <Martini className="h-4 w-4" />,
  restaurant: <Utensils className="h-4 w-4" />,
  café: <Coffee className="h-4 w-4" />,
  panadería: <Croissant className="h-4 w-4" />,
};

export const CustomCard = (input: CustomCardType) => {
  return (
    <Card className="shadow-none transition-all duration-300 border-gray-200 hover:border-mirai/30 bg-white">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1">
            <CardTitle className="mt-0 text-lg font-bold text-gray-900 leading-tight mb-2">
              {input.name}
            </CardTitle>
            <div className="flex items-center gap-1.5 text-sm text-gray-600">
              <MapPin className="h-3.5 w-3.5 text-mirai" />
              <span className="font-medium">{input.district}</span>
            </div>
          </div>
          <div className="flex gap-1.5 flex-shrink-0">
            {input.labels &&
              input.labels.map((label) => (
                <Badge 
                  key={label} 
                  className="bg-mirai-light/20 text-mirai hover:bg-mirai hover:text-white transition-colors" 
                  title={label}
                >
                  {partnerTypeIcons[label]}
                </Badge>
              ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex gap-2 items-center justify-end pt-0">
        {input.address && (
          <Button
            size="sm"
            className="hover:bg-gray-100 transition-colors"
            title={`${input.address}, ${input.district}`}
            variant="outline"
          >
            <a
              href={`https://www.google.com/maps?q=${input.address.replace(
                / /g,
                "+"
              )},+${input.district}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <MapPin className="h-4 w-4 text-mirai" />
            </a>
          </Button>
        )}
        {input.website && (
          <Button 
            size="sm" 
            className="hover:bg-gray-100 transition-colors"
            title={`${input.website}`} 
            variant="outline"
          >
            <a 
              href={`${input.website}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Link className="h-4 w-4 text-mirai" />
            </a>
          </Button>
        )}
        {input.instagram && (
          <Button 
            size="sm" 
            className="hover:bg-gray-100 transition-colors"
            title={`@${input.instagram}`} 
            variant="outline"
          >
            <a
              href={`https://instagram.com/${input.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <InstagramLogoIcon className="h-4 w-4 text-mirai" />
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
