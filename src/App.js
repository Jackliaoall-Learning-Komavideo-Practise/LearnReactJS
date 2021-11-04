import Header from './components/Header';
import Todolist from './components/Todolist';

function App() {
    return (
        <div>
            <Header></Header>
            <div className="text-center p-4">
                <Todolist></Todolist>
            </div>
        </div>
    );
}

export default App;
