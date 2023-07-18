import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home/Home.component';
import NotFound from 'pages/NotFound';
import Error from 'pages/Error';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from 'react-query';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
    }, [i18n]);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export function WrappedApp() {
    return (
        <HashRouter>
            <QueryClientProvider client={queryClient}>
                <CssBaseline />
                <App />
                {/* <ReactQueryDevtools /> */}
            </QueryClientProvider>
        </HashRouter>
    );
}
