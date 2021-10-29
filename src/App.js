import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <div className="text-center p-4">
      <button className="btn btn-danger">确定</button>
      <hr />
      <ItemDetail></ItemDetail>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col">
            <ItemDetail></ItemDetail>
          </div>
          <div className="col">
            <ItemDetail></ItemDetail>
          </div>
          <div className="col">
            <ItemDetail></ItemDetail>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
