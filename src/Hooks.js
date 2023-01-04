import {useState} from "react";
import {People} from "./data/Data";

export const Hooks = ()=>{
    //useState is a function that returns an array [value , f] f:is the handler that handle the value
    //example we can do like useState(value) so we can access by doing useState(value)[0] or [1]
    //So conventional we can destructure it like const [text, setText] = useState(text)
    //For array its simple but for objects we got to use a spread operator

    //the value can be anything: string, int or boolean
    const [text, setText] = useState("hello world");

    //The value is an array
    const [people, setPeople] = useState(People);

    //The value is an object
    const [manga, setManga] = useState({id:1, name:"attack on titans", genre:"action"});


    const onClickHandler =()=>{
        if(text === "hello world"){

            setText("bonjour");
        }else{
            setText("hello world");
        }
    }

    const removePerson = (id)=>{
        let newPeople = people.filter((person)=>{
           return person.id !== id;
        });
        setPeople(newPeople);
    }

    const changeName = ()=>{
        //Pour un objet faut mettre tous les paramétres d'abord avant de changer le paramétre qu'on veut mettre
        //So we put fist the old value and then the value we want to put after
        setManga({...manga, name: "lucy"});
    }
    return (

        <div className="flex items-center flex-col space-y-6 my-6">
            <h1 className="font-bold text-4xl text-blue-600">{text}</h1>
            <button className="bg-blue-600 px-14 py-3 rounded-lg text-2xl font-bold text-white" onClick={()=>onClickHandler()}> click</button>
            {
                people.map(
                    (person)=> {
                        const {id, name} = person;
                        return (
                            <div className="flex space-x-2" key={id}>
                                <h1 className="font-bold text-4xl text-blue-600">{name}</h1>
                                <button className="bg-red-600 px-5 py-3 rounded-lg text-2xl font-bold text-white"
                                onClick={()=>removePerson(id)}
                                >
                                    supprimer
                                </button>
                            </div>
                        );
                    }
                )
            }
            <h1 className="font-bold text-4xl text-blue-600">{manga.name}</h1>
            <h1 className="font-bold text-4xl text-blue-600">{manga.genre}</h1>
            <button className="bg-blue-600 px-14 py-3 rounded-lg text-2xl font-bold text-white" onClick={()=>changeName()}> change manga name</button>

        </div>
    );
}