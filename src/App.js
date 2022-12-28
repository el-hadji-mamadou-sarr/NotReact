import './App.css';
import React from "react";
import {Book} from "./components/Book";
import {data} from "./data/Data"



function App() {
    console.log(data);
  return (
      <section className={'books'}>
          {data.map(
              (data)=>{
                  return(
                      //Let's use the spread operator
                      <Book key={data.id} {...data}>
                      </Book>
                     /* <Book key={data.id} book={data}/>*/
                  )
              }
          )}


      </section>

  );
}

export default App;
