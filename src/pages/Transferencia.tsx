import { ScrollArea } from "../components/ui/scroll-area";
import heroImage1 from "/assets/hero/hero-1.jpg";
import heroImage2 from "/assets/hero/hero-2.jpg";
import heroImage3 from "/assets/hero/hero-3.jpg";
import heroImage4 from "/assets/hero/hero-4.jpg";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const images = [heroImage1, heroImage2, heroImage3, heroImage4];
const getRandomIndex = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);
const currentImage = images[getRandomIndex(0, images.length)];

// Datos bancarios
const bankingData = {
  company: "Mirai Ramen SpA",
  rut: "77.135.941-8",
  bank: "Banco Santander",
  accountType: "Cuenta Corriente",
  accountNumber: "86590204",
  email: "pagos@miraifoodlab.cl"
};

export const Transferencia = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const copyBankingData = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    const dataText = 
`${bankingData.company}
${bankingData.rut}
${bankingData.bank}
${bankingData.accountType}
${bankingData.accountNumber}
${bankingData.email}`;

    try {
      await navigator.clipboard.writeText(dataText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // 3 segundos para mejor UX
    } catch (err) {
      console.error('Error al copiar:', err);
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = dataText;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      textArea.setSelectionRange(0, 99999); // Para móviles
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container p-0 relative h-dvh flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2">
      <div className="relative hidden h-full flex-col bg-muted text-white dark:border-r lg:flex">
        <img
          src={currentImage}
          alt="Mirai Ramen - Imagen de fondo"
          className="w-screen h-screen object-cover top-0"
        />
      </div>
      <ScrollArea className="py-2 lg:py-4 h-full">
        <div className="mx-auto sm:py-8 flex w-full h-full flex-col justify-center mb-4">
          <div className="container prose max-w-2xl">
            <div className="text-center mb-8">
              <h1 className="mb-4 text-3xl font-bold text-gray-900">Transferencias</h1>
              <p className="text-lg text-gray-600">
                Puedes copiar estos datos y usarlos para transferirnos directamente.
              </p>
            </div>

            {/* Sección de Datos Bancarios */}
            <div className="flex flex-col items-center my-8">
              <Card className="w-full max-w-lg mb-6 bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-center text-xl font-bold text-gray-800">
                    Datos Bancarios
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-center">
                  <div className="text-lg font-semibold text-gray-900">{bankingData.company}</div>
                  <div className="text-gray-700 font-medium">{bankingData.rut}</div>
                  <div className="text-gray-700">{bankingData.bank}</div>
                  <div className="text-gray-700">{bankingData.accountType}</div>
                  <div className="font-mono text-xl font-bold text-blue-700 bg-blue-50 py-2 px-4 rounded-lg mx-4">
                    {bankingData.accountNumber}
                  </div>
                  <div className="text-blue-600 font-medium break-all">{bankingData.email}</div>
                </CardContent>
              </Card>
              
              <Button 
                onClick={copyBankingData}
                className="w-full max-w-lg bg-mirai hover:bg-mirai/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                disabled={copied || isLoading}
                aria-label={copied ? "Datos copiados al portapapeles" : "Copiar datos bancarios al portapapeles"}
              >
                {copied ? (
                  <div className="flex items-center justify-center">
                    <Check className="h-6 w-6 mr-3 animate-pulse" />
                    <span className="text-lg">¡Copiado al portapapeles!</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Copy className="h-6 w-6 mr-3" />
                    <span className="text-lg">Copiar Datos</span>
                  </div>
                )}
              </Button>

              {/* Mensaje de ayuda */}
              <p className="text-sm text-gray-500 mt-4 text-center max-w-md">
                Al hacer clic en "Copiar Datos" se copiarán todos los datos bancarios a tu portapapeles para que puedas pegarlos fácilmente.
              </p>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};