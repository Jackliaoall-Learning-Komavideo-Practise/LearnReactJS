import ItemDetail2 from './components/ItemDetail2';

function App() {
  const itemData = {
      image: "https://asset.watch.impress.co.jp/img/gmw/docs/1252/730/at_01_m.jpg",
      title: "免费玩GTA5",
      content: "Epic Games免费玩GTA5",
      link: "https://www.epicgames.com/store/ja/p/grand-theft-auto-v",
  }
  return (
      <div className="text-center p-4">
          <button className="btn btn-danger">确定</button>
          <hr />
          <ItemDetail2
              title={itemData.title}
              image={itemData.image}
              content={itemData.content}
              link={itemData.link}
          ></ItemDetail2>
      </div>
  );
}

export default App;
