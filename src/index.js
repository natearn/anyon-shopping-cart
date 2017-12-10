import ReactDOM from 'react-dom';
import './index.css';
import Cart from './Cart';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(Cart(), document.getElementById('root'));
registerServiceWorker();
