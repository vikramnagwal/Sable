import SableLogo from "@/components/icons/logo";

export default function AuthPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto p-2">
        <SableLogo />
        {children}
    </div>
  )
}
