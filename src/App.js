import "./App.css"

function App() {
  const opr = ["Android","Blackberry","Iphone", "Windows Phone"];
  const man = [
             {name :"Samsung",style:"Square"},
             {name :"HTC",style:"Square"},
             {name :"Micromax"},
             {name :"Apple",style:"Circle"}
  ];
  return (
    <div className="App">
     <h1>Mobile Operating System</h1>
     {opr.map((el) =>
       <li>{el}</li>
     )}
     <h1>Mobile Manufacturers</h1>
     {man.map((el) =>( 
       <li className={el.style}>{el.name}</li>
     ))}
    </div>
  );
}

export default App;