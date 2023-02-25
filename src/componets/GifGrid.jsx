import Items from "./Items";
import { useFetchGifs } from "../hooks/useFetchGifs";
export const GifGrid = ({category}) => {
  const {images,isLoading}=useFetchGifs(category);
  return (
    <>
    <h3>{category}</h3>  
    {
      isLoading&&( <h2 >Cargando...</h2>)
    }   
    {        
    images.map(e=>
         (<div className="card-grid" key={e.id}>
         <Items 
         {...e} 
         />
         </div>)
    )
   }
  
    </>
  )
}
