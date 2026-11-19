import { ThemeProvider } from '@/features/theme/ThemeProvider';
import './globals.css';

const boot = [
  "document.documentElement.classList.add('m-enter','mo-js');",
  "try{var t=localStorage.getItem('theme');",
  "if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}",
  "document.documentElement.classList.toggle('dark',t==='dark');",
  "document.documentElement.style.colorScheme=t;}catch(e){}",
  "var m=location.pathname.split('/')[1];",
  "if(m==='en'||m==='vi'){document.documentElement.lang=m;}",
  "setTimeout(function(){document.documentElement.classList.add('m-enter-done')},700);",
  "setTimeout(function(){document.documentElement.classList.add('mo-safe')},2500);",
].join('');

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-type="service"
      data-radius="soft"
      data-buttons="solid"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: boot }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
