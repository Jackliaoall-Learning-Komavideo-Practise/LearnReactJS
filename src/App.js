import './App.css';

import ItemDetail from './components/ItemDetail';
import Header from './components/Header';
import AwsForm from './components/AwsForm';

function App() {
    const appData = {
        accessKeyID: 'abcde',
        secretAccessKey: '12345',
        regionID: 'eu-west-2',
    }

    return (
        <div>
            <Header></Header>
            <div className="p-4">
                <AwsForm appdata={appData}></AwsForm>
            </div>
        </div>
    );
}

export default App;
