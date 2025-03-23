"use client";
import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CardDataEvents from "@/components/CardDataEvents";
import Image from "next/image";

const Events: React.FC = () => {
  return (
    <>
      <DefaultLayout>
        <h1 className="text-2xl">Eventos</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <CardDataEvents
            title="AutoShow Thunder 2025"
            desc="O maior encontro de supercarros e clássicos restaurados, com test-drives exclusivos e exibições de drifting."
            local="Autódromo Internacional de São Miguel"
          >
            <div className="flex flex-row items-start justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-black"
              >
                <path
                  fill="#000"
                  fill-rule="evenodd"
                  d="m12.065 21.243l-.006-.005zm.182-.274a29 29 0 0 0 3.183-3.392c2.04-2.563 3.281-5.09 3.365-7.337a6.8 6.8 0 1 0-13.591 0c.085 2.247 1.327 4.774 3.366 7.337a29 29 0 0 0 3.183 3.392q.166.15.247.218zm-.985 1.165S4 16.018 4 10a8 8 0 1 1 16 0c0 6.018-7.262 12.134-7.262 12.134c-.404.372-1.069.368-1.476 0M12 12.8a2.8 2.8 0 1 0 0-5.6a2.8 2.8 0 0 0 0 5.6m0 1.2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
                />
              </svg>
              <Image
                alt="AutoShow Thunder 2025"
                src={"/images/events/classic.jpg"}
                width={500}
                height={200}
              />
            </div>
          </CardDataEvents>
          <CardDataEvents
            title="AutoShow Thunder 2025"
            desc="O maior encontro de supercarros e clássicos restaurados, com test-drives exclusivos e exibições de drifting."
            local="Autódromo Internacional de São Miguel"
          >
            <div className="flex flex-row items-start justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-black"
              >
                <path
                  fill="#000"
                  fill-rule="evenodd"
                  d="m12.065 21.243l-.006-.005zm.182-.274a29 29 0 0 0 3.183-3.392c2.04-2.563 3.281-5.09 3.365-7.337a6.8 6.8 0 1 0-13.591 0c.085 2.247 1.327 4.774 3.366 7.337a29 29 0 0 0 3.183 3.392q.166.15.247.218zm-.985 1.165S4 16.018 4 10a8 8 0 1 1 16 0c0 6.018-7.262 12.134-7.262 12.134c-.404.372-1.069.368-1.476 0M12 12.8a2.8 2.8 0 1 0 0-5.6a2.8 2.8 0 0 0 0 5.6m0 1.2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
                />
              </svg>
              <Image
                alt="AutoShow Thunder 2025"
                src={"/images/events/classic.jpg"}
                width={500}
                height={200}
              />
            </div>
          </CardDataEvents>
          <CardDataEvents
            title="AutoShow Thunder 2025"
            desc="O maior encontro de supercarros e clássicos restaurados, com test-drives exclusivos e exibições de drifting."
            local="Autódromo Internacional de São Miguel"
          >
            <div className="flex flex-row items-start justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-black"
              >
                <path
                  fill="#000"
                  fill-rule="evenodd"
                  d="m12.065 21.243l-.006-.005zm.182-.274a29 29 0 0 0 3.183-3.392c2.04-2.563 3.281-5.09 3.365-7.337a6.8 6.8 0 1 0-13.591 0c.085 2.247 1.327 4.774 3.366 7.337a29 29 0 0 0 3.183 3.392q.166.15.247.218zm-.985 1.165S4 16.018 4 10a8 8 0 1 1 16 0c0 6.018-7.262 12.134-7.262 12.134c-.404.372-1.069.368-1.476 0M12 12.8a2.8 2.8 0 1 0 0-5.6a2.8 2.8 0 0 0 0 5.6m0 1.2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
                />
              </svg>
              <Image
                alt="AutoShow Thunder 2025"
                src={"/images/events/classic.jpg"}
                width={500}
                height={200}
              />
            </div>
          </CardDataEvents>
          <CardDataEvents
            title="AutoShow Thunder 2025"
            desc="O maior encontro de supercarros e clássicos restaurados, com test-drives exclusivos e exibições de drifting."
            local="Autódromo Internacional de São Miguel"
          >
            <div className="flex flex-row items-start justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-black"
              >
                <path
                  fill="#000"
                  fill-rule="evenodd"
                  d="m12.065 21.243l-.006-.005zm.182-.274a29 29 0 0 0 3.183-3.392c2.04-2.563 3.281-5.09 3.365-7.337a6.8 6.8 0 1 0-13.591 0c.085 2.247 1.327 4.774 3.366 7.337a29 29 0 0 0 3.183 3.392q.166.15.247.218zm-.985 1.165S4 16.018 4 10a8 8 0 1 1 16 0c0 6.018-7.262 12.134-7.262 12.134c-.404.372-1.069.368-1.476 0M12 12.8a2.8 2.8 0 1 0 0-5.6a2.8 2.8 0 0 0 0 5.6m0 1.2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
                />
              </svg>
              <Image
                alt="AutoShow Thunder 2025"
                src={"/images/events/classic.jpg"}
                width={500}
                height={200}
              />
            </div>
          </CardDataEvents>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Events;
