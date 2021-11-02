import './App.css';

import ItemDetail from './components/ItemDetail';
import Header from './components/Header';
import AwsForm from './components/AwsForm';

function App() {
    return (
        <div>
            <Header></Header>
            <div className="p-4">
                <AwsForm></AwsForm>
            </div>
        </div>
    );
}

export default App;
