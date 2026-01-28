import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-4 sm:px:-6 lg:px-8">
      <h1 className="text-xl">Sab/e</h1>
      <Link href={"/register"} className="px-2 py-1 text-sm bg-neutral-200 text-black font-semibold cursor-pointer">
        log in
      </Link>
    </header>
  );
}
