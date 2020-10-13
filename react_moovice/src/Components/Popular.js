import React from 'react';
import { api_key } from '../Services/Network';
import Img_DVD.png from '../public/Img_DVD';
import Card from "../Components/movie/Card"

class Popular extends React.Component {

  constructor() {
    super()

    this.state = {
      movies: [],

    }
    //dès que l'on click sur le lien via la console affiche results: tous les films
    componentDidMount() {
      fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_Key}')
        .then(res => res.json())
        .then(json => {
          this.setState({ movies: json.results })
          //console.log('movies',json.results);
        }
        const movies = json.results.map((elem) => {
          // console.log('my elem');
          return {
            title: elem.title,
            description: elem.description,
            imgUrl: https://image.tmdb.org/t/p/w300
          }
        });
        
      }
        this.setState({ movies })
    }    



render() {
  const {
    movies
  } = this.state

  return (

    <div className='row'>popular

      {this.state.movies.map(movie => (
         return {
      <div className='col-6'>)
              <Card data={movie}></Card>
              </div>
         } 
    </div>

    )}
         }; 
    



export default Popular;