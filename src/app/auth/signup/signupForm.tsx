"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const signInSchema = z.object({
  nome: z.string().min(4, "Nome inválido"),
  email: z.string().email("Email inválido"),
  password: z
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula"),
  repassword: z
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula"),
});

export default function SignUpForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Dados enviados:", data);
    router.push("/dashboard");
  };

  return (
    <div className="p-4 sm:px-12.5 xl:px-17.5 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Nome
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register("nome")}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
            {errors.nome && (
              <p className="text-sm text-red-500">{errors.nome.message}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="Digite seu email"
              {...register("email")}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Senha
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="6+ Caracteres, 1 Letra Maiúscula"
              {...register("password")}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Redigite Senha
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="6+ Caracteres, 1 Letra Maiúscula"
              {...register("repassword")}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
            {errors.repassword && (
              <p className="text-sm text-red-500">
                {errors.repassword.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5">
          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
          >
            Criar e Entrar
          </button>
        </div>

        <div className="mt-6 text-center">
          <p>
            Já tem conta?{" "}
            <Link href="/auth/signin" className="text-primary">
              Entrar
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
