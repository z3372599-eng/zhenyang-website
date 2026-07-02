import './globals.css';
import { LanguageProvider } from '../components/LanguageProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Hebei Zhenyang Electric Technology Co., Ltd.',
  description: 'Power line hardware and electrical safety products manufacturer for Vietnam power projects.',
  keywords: [
    'power line hardware',
    'strain clamp',
    'parallel groove clamp',
    'insulation piercing clamp',
    'electrical safety sign',
    'safety helmet',
    'Vietnam power project',
    'electrical equipment supplier'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
