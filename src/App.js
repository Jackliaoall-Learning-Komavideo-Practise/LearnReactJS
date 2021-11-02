import './App.css';

import ItemDetail from './components/ItemDetail';
import Header from './components/Header';

function App() {
    return (
        <div>
            <Header></Header>
            <div className="text-center p-4">
                <ItemDetail></ItemDetail>
            </div>
        </div>
    );
}

export default App;
