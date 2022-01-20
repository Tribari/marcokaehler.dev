type Props = {
    children: React.ReactNode
}

export default function LayoutComponent({ children }: Props) {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-blue-400 to-slate-200">
             <div className="container mx-auto bg-white">
                <header>
                    
                </header>
                
                <main className="">
                    {children}
                </main>

                <footer className="">
                    
                </footer>
            </div>
        </div>
    )
}