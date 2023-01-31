import {useEffect, useState} from "react";

export const Forms = ()=>{

    // the e is just the event object
    //When we submit the form we want to verify if the value are good
    //and then save it in our state cart or in a real project we can send an api to the server
    //If we remember if we wanted to add something in an array without deleting what was there before
    //We can set a function or we can directely do it in the useState function
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (firstName && email){
            const id = Date.now().toString();

           const person = {id:id, firstName: firstName, email: email};
           //To not overwrite what was here before
           setPeople([...people,person]);
           setFirstName('');
           setEmail('');

        }else{
            console.log("bye");
        }
    };
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);


    //Form submit put the onsubmit on the form
    return (
        <article>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="firstName">Name : </label>
                    <input type="text"
                           id="firstName"
                           name="firstName"
                           value={firstName}
                           onChange={(e)=>setFirstName(e.target.value)}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email : </label>
                    <input type="text"
                           id="email"
                           name="email"
                           value={email}
                           onChange={(e)=>setEmail(e.target.value)}
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