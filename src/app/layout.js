import PropTypes from 'prop-types';
import { Inter } from 'next/font/google';
import './globals.css';
import { CommonTemplate } from '@/components/templates/CommonTemplate';
import { Providers } from '@/app/GlobalRedux/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Digital Emporium Store',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <CommonTemplate>{children}</CommonTemplate>
                </Providers>
            </body>
        </html>
    );
}

RootLayout.propTypes = {
    children: PropTypes.object.isRequired,
};