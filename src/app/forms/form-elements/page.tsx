import React from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "GearUp | Plataforma de Eventos Automotivos",
  description:
    "Gerencie e participe de eventos automotivos com o GearUp, a plataforma ideal para entusiastas de carros.",
};


const FormElementsPage = () => {
  return (
    <DefaultLayout>
      <FormElements />
    </DefaultLayout>
  );
};

export default FormElementsPage;
