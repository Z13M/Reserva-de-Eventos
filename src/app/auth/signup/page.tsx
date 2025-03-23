import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Metadata } from "next";
import SignUpForm from "./signupForm";

export const metadata: Metadata = {
  title: "GearUp | Plataforma de Eventos Automotivos",
  description:
    "Gerencie e participe de eventos automotivos com o GearUp, a plataforma ideal para entusiastas de carros.",
};

const SignUp: React.FC = () => {
  return (
    <div className="bg-[rgb(241 245 249) ] flex h-screen w-screen items-center justify-center ">
      <div className="relative mx-auto  min-w-[500px] max-w-5xl rounded border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="px-26 py-17.5 text-center">
              <Link className="mb-5.5 inline-block" href="/">
                <Image
                  className=""
                  src={"/images/logo/logo-png.png"}
                  alt="Logo"
                  width={200}
                  height={60}
                />
              </Link>

              <p className="">
                O <strong>Gear Up</strong> é a plataforma definitiva para
                entusiastas e organizadores de eventos automotivos.
              </p>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:px-17.5">
              <h2 className="text-center text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Criar conta
              </h2>
            </div>
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
