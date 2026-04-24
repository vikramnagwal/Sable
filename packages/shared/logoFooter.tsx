export default function FooterLogo({ className }: { className?: string }) {
	return (
		<div className={`m-2 p-2 text-center ${className || ""}`}>
			<p className="text-sm text-gray-400">
				© 2026 Sable. All rights reserved.
			</p>
		</div>
	);
}
