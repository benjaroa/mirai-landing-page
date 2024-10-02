import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { CardHeader, CardContent } from '@/components/ui/card';
import { Link } from "wouter";

export const OnlineShopCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <>
      {show && (
        <Card className="fixed bottom-16 right-4 opacity-100 shadow-md transform transition duration-500 hover:scale-105 flex flex-col justify-center items-center">
          <Link to="/page/shop">
            <CardHeader>
              <img className="size-40" src="/assets/totoro.png" alt="Nueva tienda" />
            </CardHeader>
            <CardContent>
              ¡Visita nuestra tienda!
            </CardContent>
          </Link>
        </Card>
      )}
    </>
  );
};
