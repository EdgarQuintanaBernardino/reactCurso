export const getGif = async(query) => {

    try {
        const apiKey = 'dRyqK0zMgJVbjlMLB3TOe7I3cq4WHKVt';
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=5`;
        const complete=fetch(url, [
          ['method', 'GET'],
          ['mode', 'no-cors'],
          ['headers', [
           ['Access-Control-Allow-Origin','*'],
           ['Content-Type','application/json']
          ] ]
        ]).then((res) => res.json());
        // const resp   = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${query}&limit=5&offset=0&rating=g&lang=en`);
       const {data}=await complete;
        const filtrado= data.map(e=>({
            id:e.id,
            title:e.title,
            url:e.images.downsized_medium.url
        }));
        return filtrado;
       

    } catch (error) {
        return error;
    }
    
    
    
}