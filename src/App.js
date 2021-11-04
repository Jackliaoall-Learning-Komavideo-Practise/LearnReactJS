import './App.css';

import ItemDetail from './components/ItemDetail';
import Header from './components/Header';
import AwsForm from './components/AwsForm';
import React, { useState } from 'react';

function App() {
    const appData = {
        accessKeyID: 'abcde',
        secretAccessKey: '12345',
        regionID: 'eu-west-2',
    }

    const [message, setMessage] = useState();

    const handlerAppDataEvent = (appdata) => {
        const postdata = JSON.stringify({
            accessKeyID: appdata.accessKeyID,
            secretAccessKey: appdata.secretAccessKey,
            selectRegionID: appdata.regionID,
        });
        const res = await fetch('http://127.0.0.1:8080/json', {
            method: 'POST',
            body: postdata,
            headers: {
                'user-agent': 'Mozilla/99.0 MDN Example',
                'content-type': 'application/json'
            },
        })
        if (!res.ok) {
            throw new Error("Is Error");
        }
        const data = await res.json();
        setMessage(JSON.stringify(data.body, {}, 2))
    }

    return (
        <div>
            <Header></Header>
            <div className="p-4">
                <AwsForm appdata={appData} onSave={handlerAppDataEvent}></AwsForm>
            </div>
            <pre>
                {message}
            </pre>
        </div>
    );
}

export default App;
