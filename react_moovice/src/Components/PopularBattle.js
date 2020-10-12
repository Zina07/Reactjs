import React from 'react';
import Card from './movie/Card'
import Img_DVD from '../Public/Img_DVD'

class PopularBattle extends React.Component {

  constructor() {
    super()

    this.state = {
      movies: [],
      currentPage: 1,
    
      
    }
    return {
      title: elem.title
              description: elem.description
              imgUrl: elem.poster_path ? 'https://image.tmdb.org/t/p/w300${elem.poster_path}'
    }
  })
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


  render() {
    
      const {
        movies: [],
        currentPage: 1,
   

      const firstMovie = this.state.movies[0]
      const secondtMovie = this.state.movies[1]

    
    
    } this.state
    return (
      <div className="row">Popular Battle
      <div className="col-6">
            <Card {...firstMovie}/>
      </div>
      <div className="col-6">
            <Card {...secondtMovie}/>
      </div>
          //<Card OnClick data={this.state.movies[0]}
         // {this.state.movies[this.state.currentPage]}>
                  
          </Card>
         
       

      </div>

    );
  }
}
export default PopularBattle;



