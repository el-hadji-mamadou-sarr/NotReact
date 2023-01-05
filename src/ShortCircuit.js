import {useState} from "react";

export const ShortCircuit = ()=>{
    //To display something conditionally we can't do it inside the jsx for example
    //we can do { array.map and a return} but we can't set up an if inside.
    //So we have to set up the logic operation before the return
    //So we can just have 1 return depending on the data we're passing
    //That's why we're introducing the short circuit and ternary operations.

    const [text, setText] = useState('gaga');
    const [isError, setIsError] = useState(false);

    //The || means that if the value text is falsy it returns the second value "hello world" and if text has a value it returns it
    //The && is the inverse kind of. so if text is false it hides it and if its true it shows the second value
    const firstValue = text || "hello world";
    const secondValue = text && "hello world";
    //Now we can use it inside our jsx
    //Careful when using the && we hide it but don't want to use it inside a bracket
    //Let's now do some ternary with the button toggle example

    return (
        <div>
            <h1>{text || "going to school"}</h1>
            {text && <h1>Banana</h1>}
            <button className="bg-blue-600 px-14 py-3 rounded-lg text-2xl font-bold text-white"
                    onClick={()=>setIsError(!isError)}
            >
                click me
            </button>
            {isError ? <h1>There is an error</h1> : <h1>Everything is working fine</h1>}
        </div>
    );
}