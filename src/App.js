import logo from './logo.svg';
import './App.css';
import './styles.css';
import { useState } from 'react';
import  {AddCategory,GifGrid}  from './componets';
export const App=()=>{
  const [categories, setCategories] = useState([]);
  const addItem=(item)=>{ 
    if(categories.includes(item))return;
      setCategories([item,...categories])
  }
  return (
    <> 
    <img src={logo}  alt="logo" width="50px"/>
      <h1> Te amo Elizabeth</h1>
      <AddCategory 
      placeholder={'busca gifs'} 
      valueInicial={""} 
      nuevasCategorias={setCategories}
      onNewCategory={(e)=>addItem(e)}
      />
  
        {
        categories.map(e =>
           <GifGrid category={e} key={e}/>
            )
      }
      </>

  );
}

export default App;