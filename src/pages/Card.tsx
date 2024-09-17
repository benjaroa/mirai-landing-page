"use client";

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
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle className="mt-0 text-base">{input.name}</CardTitle>
          <div className="flex justify-end space-x-2">
            {input.labels &&
              input.labels.map((label) => (
                <Badge key={label} variant="secondary" title={label}>
                  {partnerTypeIcons[label]}
                </Badge>
              ))}
          </div>
        </div>
        <span className="font-thin">{input.district}</span>
      </CardHeader>
      <CardContent className="flex space-x-4 items-end justify-end text-sm text-muted-foreground">
        {input.address && (
          <Button
            className="m-0"
            title={`${input.address}, ${input.district}`}
            variant="outline"
          >
            <a
              href={`https://www.google.com/maps?q=${input.address.replace(
                / /g,
                "+"
              )},+${input.district}`}
              target="_blank"
            >
              <MapPin className="h-4 w-4" />
            </a>
          </Button>
        )}
        {input.website && (
          <Button title={`${input.website}`} variant="outline">
            <a href={`${input.website}`} target="_blank">
              <Link className="h-4 w-4" />
            </a>
          </Button>
        )}
        {input.instagram && (
          <Button title={`@${input.instagram}`} variant="outline">
            <a
              href={`https://instagram.com/${input.instagram}`}
              target="_blank"
            >
              <InstagramLogoIcon className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
