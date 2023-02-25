import { useState,useEffect } from "react"
import { getGif } from "../services/service"

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true)
    const getImages=async ()=>{
        const newImages=await getGif(category);
        setImages(newImages);
        setisLoading(false);
      }
      useEffect(() => { 
        getImages();     
  
      },[])
    return {
        images,
        isLoading
    }
}
