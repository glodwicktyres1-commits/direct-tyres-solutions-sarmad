import { Archivo } from "next/font/google";

/** Display font used by the service pages (matches the approved Lovable design). */
export const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});
