import Image from "next/image";
import { createClient } from "../../prismicio";


// conecta ao prismic e busca os dados da página homepage

export default async function Features() {
  const client = createClient();
  const homepage = await client.getSingle("homepage");
  const { perks } = homepage.data;

  return (
    <section className="flex flex-col md:flex-row justify-around items-center px-8 md:px-20 py-16 bg-[#F5F5F5] gap-10">
      {perks.map((perk: any, index: number) => (
        <div key={index} className="flex flex-col items-center text-center max-w-xs">
          <Image
            src={perk.perk_icon?.url || ""}
            alt={perk.perk_icon?.alt || ""}
            width={60}
            height={60}
            className="mb-4"
          />
          <h3 className="font-bold text-[#6B1D1D] mb-2">
            {perk.perk_title[0]?.text}
          </h3>
          <p className="text-sm text-gray-600">
            {perk.perk_description[0]?.text}
          </p>
        </div>
      ))}
    </section>
  );
}