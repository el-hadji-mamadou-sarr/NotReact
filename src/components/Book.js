import React from "react";
import '../styles/book.css'

export const Book = (props)=> {
    const {image,title} = props;
    const eventClickHandler =()=>{
        alert("hello you click the button");
    }

    return (
        <div className={'booklist'}>
            <img src={image} onClick={()=>alert('hello you click the image')} alt="book"/>
            <p>{title}</p>
            <button type={"button"} onClick={()=>eventClickHandler()}>click me</button>
        </div>
    );
}

