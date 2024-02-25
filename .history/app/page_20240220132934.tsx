import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 ">
      <div className=" space-y-6 text-center">
      <Image src="/images/logo.jpg" alt="image" width={40} height={40} className='rounded-full' />
      <h1 className={cn(
          "text-6xl font-semibold text-white drop-shadow-md",
          font.className,
        )}>
          Welcome to TopGamers
        </h1>
        <p className="text-white text-lg">
          Raise your gaming experience
        </p>
          <div>
            <LoginButton>
              <Button variant="secondary" size="lg">
                Sign in
              </Button>
            </LoginButton>
          </div>
      </div>
    </div>
  );
}
