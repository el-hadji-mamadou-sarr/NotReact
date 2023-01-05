import {useState} from "react";

export const MultipleInputs = ()=>{

    const [person, setPerson] = useState({firstName: '', email: ''});
    const [people, setPeople] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (person.firstName && person.email){
            const id = Date.now().toString();
            const newPerson = {...person, id:id};
            setPeople([...people,newPerson]);
            setPerson({firstName: '', email: ''});
        }else{
            throw new Error("you have made some mistakes");
        }
    }

    const handleChange = (e)=>{
        //On ajoute dynamiquement sans avec name
        const name = e.target.name;
        //Et puis on sauvegarde dans person
        setPerson({...person,[name]: e.target.value});
    };

    return (
        <article>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="firstName">Name : </label>
                    <input type="text"
                           id="firstName"
                           name="firstName"
                           value={person.firstName}
                           onChange={handleChange}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email : </label>
                    <input type="text"
                           id="email"
                           name="email"
                           value={person.email}
                           onChange={handleChange}
                    />
                </div>
                <button type="submit" className="bg-blue-600 px-14 py-3 rounded-lg text-2xl font-bold text-white"
                >submit</button>
            </form>
            {
                people.map((person)=>{
                    const {id, firstName, email} = person;
                    return (
                        <div key={id} className="flex space-x-2">
                            <h1>{firstName}</h1>
                            <h1>{email}</h1>
                        </div>
                    );
                })
            }

        </article>
    );
}