import React, { Fragment } from 'react'

const ItemDetail2 = (props) => {
    return (
        <Fragment>
            <div className="card m-3" style={{ "width": "18rem" }}>
                <img src={props.image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <a href={props.link} className="btn btn-primary">走，去看看</a>
                </div>
            </div>
        </Fragment>
    )
}

export default ItemDetail2;