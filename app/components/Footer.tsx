import Image from "next/image";
import { Lacquer } from "next/font/google";

const lacquer = Lacquer({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center py-12 bg-[#FDEDB0]">
        <span className={`${lacquer.className} text-3xl mb-6`}>
          <span className="text-[#6B1D1D]">PIZZA</span>
          <span className="text-[#F5A623]">PIZZA</span>
        </span>

        <Image src="/Social Icons.png" alt="Redes sociais" width={100} height={40} />
      </div>

      <div className="flex justify-center py-4 bg-[#FDEDB0] border-t border-[#6B1D1D]">
        <p className="text-[#6B1D1D] text-sm">© Copyright - PIZZAPIZZA</p>
      </div>
    </footer>
  );
}