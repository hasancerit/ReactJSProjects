import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {UserProvider} from './context'; 

/*index.html'i renderlayan index.js'de; import edilen componentlerin,import ettiği css'ler
                                        import edilen componentlerin, import ettiği componentlerin import ettiği css'ler
                                        .... index.html'a eklenir.  */
                                        
//index.html'i renderlayan index.js'de import edilen cssler de index.html'a eklenir.
ReactDOM.render(<UserProvider> 
                   <App />
               </UserProvider>,
        document.getElementById('root')); //App'i sardık

serviceWorker.unregister();
