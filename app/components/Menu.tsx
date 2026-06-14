"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// tipo que define a estrutura de uma pizza

type Pizza = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
};

export default function Menu() {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  // busca os dados da API quando o componente carrega

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <section className="py-16 px-8 bg-[#F5F5F5]">
      <h2 className="text-center text-[#6B1D1D] font-bold text-2xl mb-10">
        Nosso cardápio
      </h2>
      <div className="flex md:flex-row overflow-x-auto gap-6 pb-4 md:justify-center snap-x snap-mandatory">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center min-w-[260px] snap-center">
            <Image src={pizza.image} alt={pizza.name} width={150} height={150} className="mb-4" />
            <h3 className="font-bold text-[#6B1D1D] mb-2">{pizza.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{pizza.description}</p>
            <p className="font-bold text-[#6B1D1D] mb-4">{pizza.price}</p>
            <button className="bg-[#F5A623] text-[#6B1D1D] font-bold px-6 py-2 rounded border-2 border-[#6B1D1D]">
              Pedir agora
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}