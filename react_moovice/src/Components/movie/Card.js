import React from 'react';


class Card extends React.Component {
    constructor() {
        super()
    
        this.state = {
             image: '/Img_DVD.png'
        }
    }
    
    componentDidMount(){
        var newImage = `https://image.tmdb.org/t/p/w300${this.props.data.poster_path}`;
        this.setState({image: newImage})
    }

  render() {
      console.log(this.props.data);
      
    return (
        <div className="card">
            <img style={{width: "100px"}} src={this.state.image} alt={this.props.data.title} />
            <p>{this.props.data.title}</p>
            <p>{this.props.data.overview}</p>
        </div>
    );
  }
}
export default Card;