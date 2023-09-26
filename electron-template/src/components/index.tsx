import { createRoot } from 'react-dom/client';

import Application from './App';


declare const log: {
    info: (message: string) => void;
};


const appEl = document.getElementById('app');
const root = createRoot(appEl);
root.render(<Application clickHandler={() => log.info('You clicked me ;)')} />);
