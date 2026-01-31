import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-4 sm:px:-6 lg:px-8">
      <h1 className="text-xl">Sab/e</h1>
      <ul>
        <li className="inline-block mx-4">Home</li>
        <li className="inline-block mx-4">About</li>
        <li className="inline-block mx-4">Contact</li>
      </ul>
      <Link href={"/register"} >
        <Button label="log in" />
      </Link>
    </header>
  );
}
