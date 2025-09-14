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

  const copyBankingData = async () => {
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
      setTimeout(() => setCopied(false), 2000); // Resetea el estado después de 2 segundos
    } catch (err) {
      console.error('Error al copiar:', err);
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = dataText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="container p-0 relative h-dvh flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2">
      <div className="relative hidden h-full flex-col bg-muted text-white dark:border-r lg:flex">
        <img
          src={currentImage}
          alt="Mirai"
          className="w-screen h-screen object-cover top-0"
        />
      </div>
      <ScrollArea className="py-2 lg:py-4 h-full">
        <div className="mx-auto sm:py-8 flex w-full h-full flex-col justify-center mb-4">
          <div className="container mb-4 flex flex-row-reverse">
            
          </div>
          <div className="container prose">
            <h1 className="mb-4">Transferencias</h1>
            <p>Puedes copiar estos datos y usarlos para transferirnos directamente.</p>

            {/* Sección de Datos Bancarios */}
            <div className="flex flex-col items-center my-8">
              <Card className="w-full max-w-md mb-4 bg-slate-50 border-2">
                <CardHeader>
                  <CardTitle className="text-center text-lg font-semibold">
                    Datos Bancarios
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-center">
                  <div className="font-medium">{bankingData.company}</div>
                  <div>{bankingData.rut}</div>
                  <div>{bankingData.bank}</div>
                  <div>{bankingData.accountType}</div>
                  <div className="font-mono text-lg font-semibold">{bankingData.accountNumber}</div>
                  <div className="text-blue-600">{bankingData.email}</div>
                </CardContent>
              </Card>
              
              <Button 
                onClick={copyBankingData}
                className="w-full max-w-md bg-mirai hover:bg-mirai/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                disabled={copied}
              >
                {copied ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    ¡Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="h-5 w-5 mr-2" />
                    Copiar
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};