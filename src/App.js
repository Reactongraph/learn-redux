import {Provider} from 'react-redux';
import Counter from './components/Counter';
import Store from './redux/Store';

function App() {
  return (
   <Provider store={Store}>
    <Counter/>
   </Provider>
  );
}

export default App;
