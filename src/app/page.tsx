import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SignIn from "./auth/signin/page";

export const metadata: Metadata = {
  title: "GearUp | Plataforma de Eventos Automotivos",
  description:
    "Gerencie e participe de eventos automotivos com o GearUp, a plataforma ideal para entusiastas de carros.",
};

export default function Home() {
  return (
    <>
      <SignIn />
    </>
  );
}
