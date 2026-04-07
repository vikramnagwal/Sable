import { LinkButton } from "@/components/ui/link-button";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 cursor-pointer rounded-md backdrop-blur-2xl bg-[#ABABAN1A] sticky top-2">
      <h1 className="text-xl">Sab/e</h1>
      <LinkButton label="get started" link="/login"/>
    </header>
  );
}
