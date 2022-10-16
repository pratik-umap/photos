import React,{useState,useEffect} from 'react'
import "./App.css"
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CollectionsIcon from '@mui/icons-material/Collections';

function App() {
  let [image,setImage]=useState([]);
  let [content,setContent]=useState("nature");
 
  useEffect(()=>{

      fetch(`https://api.unsplash.com/search/photos?page=1&query=${content}&client_id=JS_d72tl_94QI4NbovU4PU7UocYk_Hx-F4bThLbABEI`)
      .then((res)=>res.json())
      .then((data)=>{
      
        setImage(data.results);
        // console.log(data.results)
      })
      .catch((err)=>{
          console.log(err);
      })

  },[content])

    function readValue(value) {
      setContent(value);
      // console.log(value)
    }
  return (
    <div className='app'> 
        <header className='header'>
            <nav className='navbar'>
               <h2 className="logo">photos</h2>
              <ul>
                <li>Explore</li>
                <li>License</li>
                <li>Upload</li>
                 <li><button className='nav_btn'>Sign In</button></li>
              </ul>
            </nav>
            <div className='search_section'>
              <h2 className='search_title'>The best free stock photos, royalty free images & videos shared by creators.</h2>

                <div className='search_bar'>
                   <input type="text" className="serch_input" placeholder='Search for free photos' onChange={(e)=>{
                     readValue(e.target.value)
                   }}></input>
                   <button className="search_btn"><SearchIcon ></SearchIcon></button>
                </div>
            </div>
        </header>

         <div className='container mt-5'>
            <div className='row mb-4'>
               <div className='col-11 content_name'>
                  {content} Images
               </div>
            </div>

             <div className='row'>
                {
                 image.map((value,idx)=>{
                    return(
                      <div key={idx} className='col-4'>
                          <div class="card">
                            <div className="card_effect">
                               <FavoriteBorderIcon  className='favourite'></FavoriteBorderIcon>
                                <FileDownloadIcon className='download'></FileDownloadIcon>
                               <CollectionsIcon className='collect'></CollectionsIcon>
                            </div> 
                               <img src={value.urls.small} className="card-img-top" alt='content_img'/>
                          </div>
                      </div>
                    )
                 })
                }
             </div>
         </div>
    </div>
  )
}

export default App