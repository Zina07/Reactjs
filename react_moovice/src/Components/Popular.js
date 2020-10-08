import React from 'react';
import Card from "../Components/movie/Card"

class Popular extends React.Component {
  
      constructor() {
          super()
        
          this.state = {
              movies: [],
              
          }
        }
        //dès que l'on click sur le lien via la console affiche results: tous les films
          componentDidMount() {
            fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3d6d40297f88d21a199502e723af067d')
              .then(res => res.json())
              .then(json => {
                this.setState({movies: json.results})
                //console.log('movies',json.results);
                
            })
          }
          
      render (){  
      return (
      
      <div>popular


       {this.state.movies.map(movie => (
          <Card data={movie}></Card>
       ))}


      </div>
      
    );
}
}
  
export default Popular;