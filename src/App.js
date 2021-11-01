import ItemDetail2 from './components/ItemDetail2';

function App() {
    const dataList = [
        {
            image: "https://pokemongolive.com/img/posts/anniversaryposter2019.jpg",
            title: "精灵宝可梦",
            content: "Pokémon GO 三周年啦。",
            link: "https://pokemongolive.com/post/birthday2019/?hl=zh_hant",
        },
        {
            image: "https://asset.watch.impress.co.jp/img/gmw/docs/1252/730/at_01_m.jpg",
            title: "免费玩GTA5",
            content: "Epic Games免费玩GTA5",
            link: "https://www.epicgames.com/store/ja/p/grand-theft-auto-v",
        },
    ]
    const listItems = dataList.map((itemData, index) =>
        <ItemDetail2
            key={index}
            title={itemData.title}
            image={itemData.image}
            content={itemData.content}
            link={itemData.link}
        ></ItemDetail2>
    );
    return (
        <div className="text-center p-4">
            <button className="btn btn-danger">确定</button>
            <hr />
            <div className="d-flex">
                {listItems}
            </div>
        </div>
    );
}

export default App;
