import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import img from "./b2.png";

const Main = () => {

    const [search, setSearch] = useState("");
    const [bookData,setData]=useState([]);
    const searchBook = (evt) => {
        if (evt.key === "Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCctxHi70u86lyXN5QEf_fTPvaSIGO5iGA'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }

    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>Votre biblihotèque pour rechercher <br/>Vos livres préféré</h1>
                </div>
                <div className="row2">
                    <h2>Rechercher un livre</h2>
                    <div className="search">
                        <input type="text" placeholder="entrer le noms" 
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        onKeyPress={searchBook}
                        />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="container">
               {
                <Card book={bookData}/>
                }
            </div>
        </>
    )
}

export default Main;