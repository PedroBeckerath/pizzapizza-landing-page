import { Lacquer } from "next/font/google";

const lacquer = Lacquer({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav className="flex justify-center py-2 bg-white">
      <span className={`${lacquer.className} text-2xl`}>
        <span className="text-[#6B1D1D]">PIZZA</span>
        <span className="text-[#F5A623]">PIZZA</span>
      </span>
    </nav>
  );
}