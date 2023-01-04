import {useEffect, useState} from "react";

export const Hooksb = ()=>{
    //Now we're doing some useEffect
    // so useEffect run every rendering moment
    //We can't put useEffect in conditionnal statements
    //second parametters useEffect has a dependency list
    //For exemple the second parameter can be a value that can activate the useEffect
    //The use Effect activate if the dependency change
    //Its also good practice to set up a cleanup fonction after the useEffect
    //so we setup a return function.

    const [users, setUsers] = useState([]);
    const [value, setValue] = useState(0);

    useEffect(()=>{
        console.log("hello");
    },[value]);

    //on définit l'adresse url qui nous sert ici d'api

    const url = "https://api.github.com/users";

    //On définit la fonction async qui va attendre des données de l'api
    //! vas y on mémorise la synthax

    const getUsers = async ()=>{

        //Dans une fonction async on aura toujours await qui donne une promise
        //fetch pour récupérer la réponse
        const response = await fetch(url);

        //A partir de la réponse on le transforme en objet
        const users = await response.json();

        //On update la state users
        setUsers(users);

    };
    useEffect(()=>{
        getUsers();
    },[]);
    return(
        <div className="container">
            <h1 className="">{value}</h1>
            <button className="bg-blue-600 px-14 py-3 rounded-lg text-2xl font-bold text-white" onClick={()=>setValue(value + 1)}> click</button>
            {
              users.map((user) =>{
                  const {id, login, avatar_url} = user;
                 return (
                     <div key={id}>
                         <h1>{login}</h1>
                         <img src={avatar_url} alt="person"/>
                     </div>
                 );
              })
            }
        </div>


    );
}