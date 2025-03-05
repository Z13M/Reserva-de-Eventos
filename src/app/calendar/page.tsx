import Calendar from "@/components/Calender";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "GearUp | Plataforma de Eventos Automotivos",
  description:
    "Gerencie e participe de eventos automotivos com o GearUp, a plataforma ideal para entusiastas de carros.",
};


const CalendarPage = () => {
  return (
    <DefaultLayout>
      <Calendar />
    </DefaultLayout>
  );
};

export default CalendarPage;
