import {useEffect, useState} from "react";

export const ShowHide = ()=>{
    const [size, setSize] = useState(window.innerWidth);
    const [show, setShow] = useState(false);

    //On définit la fonction pour le event listener
    const checkSize =()=>{
        setSize(window.innerWidth);
    }

    //on fait le use effect
    useEffect(()=>{
        window.addEventListener('resize', checkSize);
        //doing the clenup fionction that remove the event listener
        return ()=>{window.removeEventListener('resize',checkSize)}
    },[]);

    return (
       <div>
           <button className="bg-blue-600 px-14 py-3 rounded-lg text-2xl font-bold text-white"
                   onClick={()=>setShow(!show)}
           >toogle</button>
           {show &&
               <div>
                   <h1>{size}</h1>
               </div>
           }
       </div>
    );
}