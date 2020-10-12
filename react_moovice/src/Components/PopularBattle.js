import React from 'react';
import Card from './movie/Card'
import Img_DVD from '../Public/Img_DVD'

class PopularBattle extends React.Component {

  constructor() {
    super()
    this.ChooseFilm= this.ChooseFilm.bind(this)
  }
    state = {
      movies: [],
      currentPage: 1,

    this.setState({
      
    })
    return {
              id: elem.id,
              title: elem.title,
              description: elem.description,
              imgUrl: elem.poster_path ? 'https://image.tmdb.org/t/p/w300${elem.poster_path}'
    }
  });
      this setState({movies})
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3d6d40297f88d21a199502e723af067d')
      .then(res => res.json())
      .then(json => {
        //console.log('movies',json.results);
        this.setState({ movies: json.results })
        //console.log('movies',json.results);

      })
  }

  ChooseFilm(id) {
    console.log('choseFilm id', id)

      let myList = JSON.parse(localStorage.getItem('my-list'), []

    if  (!myList.includes(id)) {
          myList.push(id)
          localStorage.setItem ('myList', JSON.stringify,(myList))
    
    }

    this.setState({
      currentPage: this.state.currentPage + 1
    });
    
  }

  render() {
    
      const {
        movies: [],
        currentPage: 1,
      }= this.state

      const secondIndex = currentPage * 2 - 1
      const firstIndex = secondIndex - 1

      const firstMovie = movies[firstIndex]
      //console.console.log('firsMovie', firstMovie);
      
      const secondtMovie = movies[secondIndex]
     // console.console.log('secondMovie', secondMovie);

    
    
    
    return (
      <div className="row">Popular Battle
      <div className="col-6">
        <button OnClick={() =>this.ChooseFilm(firstMovie.id)} >
            <Card {...firstMovie}/>
        </button >
      </div>
      
      <div className="col-6">
        <button OnClick={() =>this.ChooseFilm(secondnMovie.id)}>
            <Card {...secondtMovie} />
        </button>  
      </div>
         </Card>
       
  </div>
     

    );
  }
}
export default PopularBattle;



