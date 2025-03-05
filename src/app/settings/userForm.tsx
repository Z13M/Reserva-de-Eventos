"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import * as z from "zod";

const schema = z.object({
  fullName: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  phoneNumber: z
    .string()
    .regex(
      /^\(\d{2}\) \d{5}-\d{4}$/,
      "Formato inválido. Exemplo: (11) 98765-4321",
    ),
  emailAddress: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export default function UserForm() {
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Dados do formulário:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Nome Completo
          </label>
          <input
            className="w-full rounded border border-stroke bg-gray px-4 py-3 text-black focus:border-primary focus-visible:outline-none disabled:text-black/50 dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            placeholder="Digite seu nome"
            disabled={!isEditing}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-sm text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        <div className="w-full sm:w-1/2">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Telefone
          </label>
          <input
            className="w-full rounded border border-stroke bg-gray px-4 py-3 text-black focus:border-primary focus-visible:outline-none disabled:text-black/50 dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            placeholder="(00) 0 0000-0000"
            disabled={!isEditing}
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && (
            <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>
          )}
        </div>
      </div>

      <div className="mb-5.5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          Email
        </label>
        <input
          className="w-full rounded border border-stroke bg-gray px-4 py-3 text-black focus:border-primary focus-visible:outline-none disabled:text-black/50 dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type="email"
          placeholder="Digite seu e-mail"
          disabled={!isEditing}
          {...register("emailAddress")}
        />
        {errors.emailAddress && (
          <p className="text-sm text-red-500">{errors.emailAddress.message}</p>
        )}
      </div>

      <div className="mb-5.5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          Senha
        </label>
        <input
          className="w-full rounded border border-stroke bg-gray px-4 py-3 text-black focus:border-primary focus-visible:outline-none disabled:text-black/50 dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type="password"
          placeholder="Digite sua senha"
          disabled={!isEditing}
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <div className="flex justify-end gap-4.5">
        {isEditing ? (
          <>
            <button
              className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
              type="button"
              onClick={() => setIsEditing(false)}
            >
              Cancelar
            </button>
            <button
              className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
              type="submit"
            >
              Salvar
            </button>
          </>
        ) : (
          <button
            className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Editar
          </button>
        )}
      </div>
    </form>
  );
}
