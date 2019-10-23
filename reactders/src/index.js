import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/*index.html'i renderlayan index.js'de; import edilen componentlerin,import ettiği css'ler
                                        import edilen componentlerin, import ettiği componentlerin import ettiği css'ler
                                        .... index.html'a eklenir.  */
                                        
//index.html'i renderlayan index.js'de import edilen cssler de index.html'a eklenir.
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
