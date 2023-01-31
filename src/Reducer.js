import {useDispatch, useSelector} from "react-redux";
import {clearCart, increaseCart, removeItems, getCartItems} from "./features/cart/cartSlice";
import {useEffect} from "react";
export const Reducer = ()=>{
    const dispatch = useDispatch();
    const {amount, cartItems, isLoading}=useSelector((store)=>store.cart)

    useEffect(()=>{
       dispatch(getCartItems());
    },[])

    if(isLoading){
        return (
            <div>
                <h1>Wait it is loading ...</h1>
            </div>
        );
    }
    return (
        <div>
           <h1>Items</h1>

            {
                cartItems.map(
                    ({id, title})=>{
                        return(
                            <div key={id}>
                                <h3 >{title}</h3>
                                <button onClick={()=>dispatch(removeItems(id)) }>remove</button>
                            </div>

                        );
                    }
                )
            }

            <h1>amount: {amount}</h1>
            <button onClick={()=>dispatch(clearCart()) }>clear</button><br/>
            <button onClick={()=>dispatch(increaseCart()) }> increase</button>
        </div>
    );
}