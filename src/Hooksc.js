import {useEffect, useState} from "react";

export const Hooksc = ()=>{
    //Multiple returns
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState("default user");
    const url = "https://api.github.com/users/quincyLarson";
    const getUser = async ()=>{
        const response = await fetch(url);
        const user = await response.json();

    }

    useEffect(()=>{
       //On peut faire un get user oubien on fait directement un fetch dans le useEffect
        //Méme schéma que tout à l'heure on fait l'url aprés on le transforme en json
        //En utilisant un then. Pour faire des opérations sur l'api on fait juste des then et catch etc
        //Par exemple pour le user c'est comme si on déclarait une variable user qui va prendre le résultat du dernier then

        fetch(url)
            .then((response)=>{
                if(response.status >=200 && response.status <=300){
                    return response.json();
                }else {
                    setIsLoading(false);
                    setIsError(true);
                    throw new Error(response.statusText);

                }
            })
            .then((user)=>{
                const {login} = user;
                setUser(login);
                setIsLoading(false);
            })
            .catch((error)=>console.log(error));
    },[])
    if (isLoading){
        return (
            <div>
                <h1 className="text-center">The application loading ...</h1>
            </div>
        );
    }

    if (isError){
        return (
            <h1 className="text-center">There is an error while getting this user.</h1>
        );
    }
    return(

      <div>
          <h1>{user}</h1>
      </div>

    );


}