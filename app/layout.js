import './globals.css';
import { LanguageProvider } from '../components/LanguageProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://www.zhenyang-electric.com'),
  title: {
    default: 'Hebei Zhenyang Electric Technology Co., Ltd. | 河北臻扬电气科技有限公司',
    template: '%s | Zhenyang Electric'
  },
  description: '河北臻扬电气科技有限公司 Hebei Zhenyang Electric Technology Co., Ltd. supplies power line hardware and electrical safety products including strain clamps, parallel groove clamps, insulation piercing grounding clamps, safety signs and safety helmets for Vietnam and international power projects.',
  keywords: [
    'Hebei Zhenyang Electric Technology Co., Ltd.',
    '河北臻扬电气科技有限公司',
    '臻扬电气',
    '电力金具',
    '耐张线夹',
    '并沟线夹',
    '绝缘穿刺接地线夹',
    '电力安全标识牌',
    '安全帽',
    'power line hardware',
    'strain clamp',
    'parallel groove clamp',
    'insulation piercing grounding clamp',
    'electrical safety sign',
    'safety helmet',
    'Vietnam power project',
    'electrical equipment supplier'
  ],
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/zh',
      en: '/?lang=en',
      vi: '/?lang=vi'
    }
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: 'website',
    url: 'https://www.zhenyang-electric.com',
    siteName: 'Zhenyang Electric',
    title: 'Hebei Zhenyang Electric Technology Co., Ltd.',
    description: 'Power line hardware and electrical safety products manufacturer for Vietnam power projects.'
  }
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
