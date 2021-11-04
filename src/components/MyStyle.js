import React, { Fragment, useState } from 'react';

const MyStyle = () => {
    const [FLG, setFLG] = useState(true);

    const btn_click = () => {
        setFLG(!FLG)
    }
    return (
        <Fragment>
            <h1>MyStyle</h1>
            <h1 style={{
                color: FLG ? 'red' : 'blue',
                backgroundColor: FLG ? 'yellow' : 'gray',
            }}>MyStyle</h1>
            <hr />
            {FLG.toString()}
            <hr />
            <button className="btn btn-success btn-lg" onClick={btn_click}>确定</button>
        </Fragment>
    )
}

export default MyStyle;