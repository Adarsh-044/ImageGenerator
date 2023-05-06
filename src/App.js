import { useState } from "react";

import SearchQuery from "./components/SearchQuery";
import searchImages from "./api"
import ImageList from "./components/ImageList";


const App = () =>{

      const [images, setImages] = useState([]);

      const handleClick = async (term) =>{
           const results =  await searchImages(term); 
           setImages(results);
      }
      return (
            <div>
                  <SearchQuery onClick = {handleClick}/>
                  <ImageList images = {images}/>
            </div>
      )
}
export default App;