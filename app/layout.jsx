import '@styles/globals.css';
export const metadata = {
    title: "GPTforum",
    description: "A Next.js application that allows Crud operations for sharing thoughts regarding GPT."
}
function RootLayout({children}) {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient'></div>
                </div>
                    <main className="app">
                        {children}
                    </main>

               
            </body>

        </html>
    )
}

export default RootLayout;
