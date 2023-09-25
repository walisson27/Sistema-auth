import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { getCurrentUser } from "@/lib/session";
//import ClientComponentAuth from "@/components/client-component-auth";
//import ServerComponentAuth from "@/components/server-component-auth";

import Index from "../pagess/index"

export default async function Home() {
  const user = await getCurrentUser();
  return (
    <>
      <section className="space-y-2 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-12">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <div className="flex gap-2">
          </div>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Entrar
            </Link>
            <Link
              href="https://github.com/walisson27"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
            {user !== undefined && (
              <Link
                href="/api/auth/signout"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Sair
              </Link>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            {/* Components */}
          </div>
        </div>
      </section>
      <section>
        <Index/> 
      </section>

    </>
  );
}
