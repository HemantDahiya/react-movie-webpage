import React, { Component } from 'react';
import axios from "axios";


class Movie extends Component{

    constructor(props){
        super(props);
        
        this.state={
            Data: {}
        }

    }

        componentDidMount(){
        
            axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
            .then(response=> this.setState({Data:response.data}) )
        
            
        }


    render(){
        return(
            <div  style={{  "width": "80%", "margin": "auto"}}>

                      
            <div id="Container">
            {(typeof (this.state.Data.Search) !=='undefined' )
            &&( this.state.Data.Search.map(card => 
                
                <div className="Card-container" onClick={console.log("event occured")}>
                <img src={card.Poster} alt={card.Type} ></img>
                <div className="Content">
                    <div id="text-deco">
                    <p>{card.Title}</p>
                    <p>{card.Year}</p>
                    <p>ImdbID : {card.imdbID}</p>
                    </div>
                </div>
            </div>))}

            
           
           </div>
           </div>
        );
    }



}

export default Movie;