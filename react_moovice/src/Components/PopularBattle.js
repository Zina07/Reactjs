import React from 'react';
import Card from './movie/Card'

class PopularBattle extends React.Component {

  constructor() {
    super()

    this.state = {
      movies: [],
      currentPage: 1,
    
      
    }

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
    
   //console.log(this.state.movies[0])
   // console.log(this.state.movies[1])

    return (
      <div>Popular Battle

          <Card data={this.state.movies[0]}>
                  
          </Card>
         
       

      </div>

    );
  }
}
export default PopularBattle;



