import './App.css';
import Products from './components/Products';
import NewProduct from './components/Newproduct';
function App() {
  const respons = [
    {
      id : 'p1',
      title:"nirma",
      amount:500,
      date: new Date (2005,9,20)
    },
    {
      id : 'p2',
      title:"surfexel",
      amount:120,
      date: new Date (2006,7,14)
    },
    {
      id : 'p3',
      title:"tide",
      amount:180,
      date: new Date (1996,2,12)
    },
    {
      id : 'p4',
      title:"arial",
      amount:1200,
      date: new Date (2006,5,28)
    }
  ];

  function newDataProduct(data){
      console.log("i am inside a app.js")
      console.log(data);
  }

  return (<div>
           <NewProduct getObj={newDataProduct}/>
           <Products Item={respons}></Products>
  </div>
  );
}

export default App;
