import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-[#FDEDB0]">
      <Image src="/Format quote.png" alt="Aspas" width={40} height={40} className="mb-4" />
      <p className="text-[#6B1D1D] text-xl font-bold mb-2">
        Melhor margherita do mundo
      </p>
      <p className="text-[#6B1D1D] text-sm">Alguém importante</p>
    </section>
  );
}