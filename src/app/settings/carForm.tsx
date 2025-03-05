"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Image from "next/image";

const carSchema = z.object({
  brand: z.string().min(2, "O nome do carro deve ter pelo menos 2 caracteres"),
  model: z.string().min(2, "O nome do carro deve ter pelo menos 2 caracteres"),
  plate: z.string().min(7, "Placa do carro deve conter 7 caracteres"),
  image: z.instanceof(FileList).optional(),
});

type CarFormData = z.infer<typeof carSchema>;

export default function CarForm() {
  const [carImage, setCarImage] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState<false>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CarFormData>({
    resolver: zodResolver(carSchema),
  });

  const onSubmit = (data: CarFormData) => {
    console.log("Dados enviados:", data);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCarImage(URL.createObjectURL(file));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 flex items-center gap-3">
        <div className="relativa flex h-14 w-14 items-center justify-center rounded-full border border-gray-600 dark:border-white dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M28.59 10.78h-2.242a.5.5 0 0 0-.333.134c-.716-1.143-1.457-2.058-2.032-2.633c-2-2-14-2-16 0c-.573.574-1.31 1.483-2.022 2.618a.48.48 0 0 0-.308-.117H3.41c-.275 0-.5.226-.5.5v1.01c0 .274.22.54.49.593l1.36.26c-1.174 2.618-1.866 5.876-.778 9.14v1.937c0 .553.14 1 .313 1h2.562c.173 0 .313-.447.313-1v-1.584c2.298.22 5.55.46 8.812.46c3.232 0 6.52-.236 8.814-.454v1.578c0 .553.14 1 .312 1h2.562c.172 0 .312-.447.312-1l-.002-1.938c1.087-3.26.397-6.516-.775-9.134l1.392-.265a.63.63 0 0 0 .49-.594v-1.01a.5.5 0 0 0-.497-.5zM7.107 18.907a1.813 1.813 0 0 1 0-3.624a1.813 1.813 0 0 1-.001 3.624zm-1.524-5.19C6.543 11.52 7.88 9.8 8.69 8.988c.584-.585 3.34-1.207 7.292-1.207s6.708.623 7.293 1.208c.81.81 2.146 2.53 3.106 4.728c-2.132.236-6.285-.31-10.398-.31s-8.266.546-10.4.31m19.274 5.19a1.813 1.813 0 0 1 0-3.624a1.813 1.813 0 0 1-.001 3.624z"
            />
          </svg>
        </div>

        <div>
          <span className="mb-1.5 text-black dark:text-white">
            Editar Carro
          </span>
          <span className="flex gap-2.5">
            <button className="text-sm hover:text-primary" type="button">
              Deletar
            </button>
          </span>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-white">
          Marca
        </label>
        <input
          type="text"
          {...register("brand")}
          className="w-full rounded border border-stroke bg-gray px-4 py-3 text-black focus:border-primary focus-visible:outline-none disabled:text-black/50 dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
        />
        {errors.brand && (
          <p className="mt-1 text-sm text-red-500">{errors.brand.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-white">
          Modelo
        </label>
        <input
          type="text"
          {...register("model")}
          className="w-full rounded border border-stroke bg-gray px-4 py-3 text-black focus:border-primary focus-visible:outline-none disabled:text-black/50 dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
        />
        {errors.model && (
          <p className="mt-1 text-sm text-red-500">{errors.model.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-white">
          Placa
        </label>
        <input
          type="text"
          {...register("plate")}
          className="w-full rounded border border-stroke bg-gray px-4 py-3 text-black focus:border-primary focus-visible:outline-none disabled:text-black/50 dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
        />
        {errors.plate && (
          <p className="mt-1 text-sm text-red-500">{errors.plate.message}</p>
        )}
      </div>

      <div className="flex justify-end gap-4.5">
        <button
          type="submit"
          className="rounded bg-primary px-6 py-2 text-gray"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
