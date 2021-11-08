import Header from './components/Header';

import { Route } from 'react-router-dom';

import PageHome from './components/PageHome';
import PageAbout from './components/PageAbout';
import PageNews from './components/PageNews';

function App() {
    return (
        <div>
            <Header></Header>
            <div className="p-4">
                <Route path="/" exact>
                    <PageHome></PageHome>
                </Route>
                <Route path="/news">
                    <PageNews></PageNews>
                </Route>
                <Route path="/about">
                    <PageAbout></PageAbout>
                </Route>
            </div>
        </div>
    );
}

export default App;
