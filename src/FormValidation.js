import {useEffect, useState} from "react";

export const FormValidation = ()=>{
    const initialValues = {
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        confirm_password:"",
    }
    const regex_email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const regex_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])(?=.*[a-zA-Z]).{8,}$/;
    const regex_username = /^(?=.*[a-zA-Z]).{6,}$/;
    const errors = {};
    const [userValues, setUserValues] = useState(initialValues);
    const [remember, setRemember] = useState(false);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState('');
    const handleChange = (e)=>{
        const {name, value} = e.target
        setUserValues({...userValues,[name]:value});
    }

    useEffect(()=>{
      setFormError(validate());
    },[userValues,remember])

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(Object.keys(errors).length === 0){
            setIsSubmit(true);
            console.log("form submitted");
        }else{
            console.log("form have errors")
        }
    }


    const validate = ()=>{

        if(!regex_username.test(userValues.first_name)){
           errors.first_name = "the first name should be at least 6 chars"
        }else{delete errors.first_name}
        if(!userValues.last_name){
           errors.last_name = "you need to enter the last name"
        }else{delete errors.last_name}

        if(!regex_email.test(userValues.email)){
          errors.email = "you need to enter a valid email"
        }else{delete errors.email}

        if(!regex_password.test(userValues.password)){
            errors.password = "your password should have at least 8 chars, 1 uppercase, 1 lower case, 1 special character"
        }
        else{delete errors.password}

        if(userValues.password !== userValues.confirm_password){
           errors.confirm_password = "you need to enter the same password"
        }else{delete errors.confirm_password}
        if(!remember){
            errors.remember = "you need to check the remember"
        }else{delete errors.remember}
        return errors;
    }

    return (
    <section className="flex max-w-xl ">
        <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="first_name"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input type="text" id="first_name"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="John"
                           name="first_name"
                           values={userValues.first_name}
                           onChange={handleChange}
                    />

                    {formError.first_name && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formError.first_name}</p>}
                </div>
                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                        name</label>
                    <input type="text" id="last_name"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Doe"
                           name="last_name"
                           values={userValues.last_name}
                           onChange={handleChange}
                    />
                    {formError.last_name && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formError.last_name}</p>}
                </div>

            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                    address</label>
                <input type="text" id="email"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="john.doe@company.com"
                       name="email"
                       values={userValues.email}
                       onChange={handleChange}
                />
                {formError.email && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formError.email}</p>}
            </div>
            <div className="mb-6">
                <label htmlFor="password"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" id="password"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="•••••••••"
                        name="password"
                       values={userValues.password}
                       onChange={handleChange}
                />
                {formError.password && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formError.password}</p>}
            </div>
            <div className="mb-6">
                <label htmlFor="confirm_password"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input type="password" id="confirm_password"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="•••••••••"
                        name="confirm_password"
                       values={userValues.confirm_password}
                       onChange={handleChange}
                />
                {formError.confirm_password && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formError.confirm_password}</p>}

            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox"
                           className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                           name="remember"
                           checked={remember}
                           onChange={(e)=>setRemember(e.target.checked)}
                    />
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree
                    with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and
                        conditions</a>.
                </label>
                {formError.remember && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formError.remember}</p>}
            </div>
            <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
            </button>
        </form>
    </section>
);
}