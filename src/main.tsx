import './index.css';
import './i18n';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <WrappedApp />
    </React.StrictMode>
);
