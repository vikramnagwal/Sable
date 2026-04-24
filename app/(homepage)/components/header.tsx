import { LinkButton } from "@/packages/ui/link-button";
import Link from "next/link";

export default function Header() {
	return (
		<header className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 cursor-pointer rounded-md backdrop-blur-2xl">
			<Link href="/" className="cursor-pointer">
				<h1 className="text-xl">Sab/e</h1>
			</Link>
			<LinkButton label="get started" link="/login" />
		</header>
	);
}
