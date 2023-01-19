import '../styles/globals.css';
import { Poppins } from '@next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
import { ContextProvider } from '../components/industries/ContextProvider';
//internal imports

const poppins = Poppins({
  weight: '400',
});
export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence exitBeforeEnter>
        <ContextProvider>
          <div className={poppins.className}>
            <Component {...pageProps} />
          </div>
        </ContextProvider>
      </AnimatePresence>
    </QueryClientProvider>
  );
}
