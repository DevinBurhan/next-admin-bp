import { Archivo } from 'next/font/google';
import './css/style.css';
import './css/custom.css';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-primary',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'CopyGen - AI Writer & Copywriting Landing Page Next.js Template',
  },
  description: 'AI Writer & Copywriting Landing Page Next.js Template',
  openGraph: {
    title: 'CopyGen - AI Writer & Copywriting Landing Page Next.js Template',
    description:
      'CopyGen - AI Writer & Copywriting Landing Page Next.js Template',
    images: ['/openGraphImage.jpeg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${archivo.variable}`}>{children}</body>
    </html>
  );
}
