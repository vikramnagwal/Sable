export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-3">
      <h1 className="text-xl">Sab/e</h1>
      <button className="px-2 py-1 text-sm bg-neutral-200 text-black font-semibold cursor-pointer">
        log in
      </button>
    </header>
  );
}
