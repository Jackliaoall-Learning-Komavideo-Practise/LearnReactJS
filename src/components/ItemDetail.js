import React, { Fragment } from 'react'

const ItemDetail = () => {
    const ItemImage = "https://pokemongolive.com/img/posts/anniversaryposter2019.jpg"
    const ItemTitle = "精灵宝可梦"
    const ItemContent = "Pokémon GO 三周年啦。"
    const ItemLink = "https://pokemongolive.com/post/birthday2019/?hl=zh_hant"

    return (
        <Fragment>
            <div className="card m-3" style={{ "width": "18rem" }}>
                <img src={ItemImage} className="card-img-top" alt="" />
                <div className="card-body">
                <h5 className="card-title">{ItemTitle}</h5>
                <p className="card-text">{ItemContent}</p>
                <a href={ItemLink} className="btn btn-primary">走，去看看</a>
                </div>
            </div>
        </Fragment>
    )
}

export default ItemDetail;