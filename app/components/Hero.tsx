import Image from "next/image";
import { createClient } from "../../prismicio";


// conecta ao prismic e busca os dados da página homepage

export default async function Hero() {
  const client = createClient();
  const homepage = await client.getSingle("homepage");
  const { hero_title, hero_description, hero_image, hero_button_link } = homepage.data;

  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-16 bg-[#FDEDB0] gap-10">
      <div className="max-w-md text-center md:text-left">
        <h1 className="text-3xl font-bold text-[#6B1D1D] mb-4">
          {hero_title[0]?.text}
        </h1>
        <p className="text-[#6B1D1D] mb-8">
          {hero_description[0]?.text}
        </p>
        <div className="flex justify-center md:justify-start">
          <a href={hero_button_link?.url || "#"}>
            <button className="bg-[#F5A623] text-[#6B1D1D] font-bold px-6 py-2 rounded border-2 border-[#6B1D1D]">
              Peça Online
            </button>
          </a>
        </div>
      </div>
      <div>
        <Image
          src={hero_image?.url || "/Pizza.png"}
          alt={hero_image?.alt || "Pizza"}
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}