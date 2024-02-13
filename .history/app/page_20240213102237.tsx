import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 ">
      <div className=" space-y-6">
        <h1 className="font-semibold text-6xl text-white drop-shadow-md">
          Auth :sun
          </h1>
      </div>
    </div>
  );
}
