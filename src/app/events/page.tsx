import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CardDataEvents from "@/components/CardDataEvents";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "AutoShow Thunder 2025",
    description:
      "O maior encontro de supercarros e clássicos restaurados, com test-drives exclusivos e exibições de drifting.",
    location: "Autódromo Internacional de São Miguel",
  },
  {
    id: 2,
    title: "Street Race Festival",
    description:
      "Um festival de arrancadas e tuning, reunindo os melhores carros preparados da região.",
    location: "Estacionamento Arena Speed, São Paulo",
  },
  {
    id: 3,
    title: "Vintage Motors Expo",
    description:
      "Exposição de carros antigos e muscle cars, com premiações para os melhores projetos de restauração.",
    location: "Centro de Convenções Old Town, Curitiba",
  },
  {
    id: 4,
    title: "Off-Road Extreme Challenge",
    description:
      "Trilhas desafiadoras para 4x4, motocross e UTVs, com competições radicais em terrenos extremos.",
    location: "Serra da Mantiqueira, Minas Gerais",
  },
  {
    id: 5,
    title: "Night Drift Battle",
    description:
      "Batalha noturna de drift, com luzes neon, música ao vivo e prêmios para os melhores pilotos.",
    location: "Pista Underground, Rio de Janeiro",
  },
];

const Events: React.FC = () => {
  return (
    <>
      <DefaultLayout>
        <h1 className="text-2xl">Eventos</h1>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-7.5">
          {events.map((evento) => (
            <CardDataEvents
              key={evento.id}
              title={evento.title}
              desc={evento.description}
              location={evento.location}
            >
              <div className="flex">
                <Image
                  alt="AutoShow Thunder 2025"
                  src={"/images/events/classic.jpg"}
                  width={500}
                  height={200}
                />
              </div>
            </CardDataEvents>
          ))}
        </div>
      </DefaultLayout>
    </>
  );
};

export default Events;
