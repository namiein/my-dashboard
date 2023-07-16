import { Aside, Footer, Header } from '@layouts';
import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My Dashboard',
    description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body>
                <div className="w-full">
                    <Header />
                    <main className="mb-10 mr-[450px] mt-[80px] h-full p-5">{children}</main>
                    <Aside />
                    <Footer />
                </div>
            </body>
        </html>
    );
}
