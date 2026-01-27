export default function HomePageLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="max-w-7xl mx-auto py-2">
            {children}
        </div>
    )
}