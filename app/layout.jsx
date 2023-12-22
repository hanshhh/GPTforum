import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "GPTforum",
    description: "A Next.js application that allows Crud operations for sharing thoughts regarding GPT."
}
function RootLayout({children}) {
    return (
        <html lang='en'>
            <body>
                <Provider>
                <div className='main'>
                    <div className='gradient'></div>
                </div>
                    <main className="app">
                        <Nav />
                        {children}
                    </main>

                </Provider>

               
            </body>

        </html>
    )
}

export default RootLayout;
