import React,{ useState } from 'react';
import {data_of} from '../API/api';


const Home = () =>{
  const [data,setData] = useState(data_of);
    return(
       <>
       {
        data.map((ele) => {
          return ele.id;
        })
       }
        <div className="p-5 bg-primary text-white text-center">
            <h1>My First Bootstrap 5 Page</h1>
        </div>
     
     <div className="container mt-5">
       <div className="row">
         <div className="col-sm-4">
           <h2>About Me</h2>
           <h5>Photo of me:</h5>
           <div className="fakeimg">Fake Image</div>
           <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
           <hr className="d-sm-none"/>
         </div>
         <div className="col-sm-8">
           <h2>TITLE HEADING</h2>
           <h5>Title description, Dec 7, 2020</h5>
           <div className="fakeimg">Fake Image</div>
           <p>Some text..</p>
           <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
     
           <h2 className="mt-5">TITLE HEADING</h2>
           <h5>Title description, Sep 2, 2020</h5>
           <div className="fakeimg">Fake Image</div>
           <p>Some text..</p>
           <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
         </div>
       </div>
     </div>
     
     <div className="mt-5 p-4 bg-dark text-white text-center">
       <p>Footer</p>
     </div> 
       </> 
    );
}
 export default Home;