import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button 
        className='square' 
        onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}
  
  class Board extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              squares: Array(9).fill(null),
              XisNext: true,
          }
      }

      handleClick(i) {
          const squares = this.state.squares.slice();
          squares[i] = this.state.XisNext ? 'X' : 'O';
          this.setState({squares: squares});
          this.setState({XisNext: !this.state.XisNext})
      }

    renderSquare(i) {
      return (<Square 
      value={this.state.squares[i]} 
      onClick={() => this.handleClick(i)}
      />);
    }
  
    render() {
      const status = 'Next player: ' + (this.state.XisNext ? 'X' : 'Y');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      this.props.searchName(this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  class ApiTest extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              items: [],
              DataisLoaded: false,
              searchName: '',
          }
      }
      componentDidMount() {
        fetch(
            "https://api.jikan.moe/v4/anime?q=" + this.state.searchName + "&status=&type=&limit=10&sfw&order_by=score&sort=desc")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    buscarAnimes(searchName) {
        this.setState({searchName: searchName})
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  
            <NameForm searchName={() => this.buscarAnimes()} />
            {
                items.data.map((item) => ( 
                <ol key = { item.mal_id } >
                    <p>Nombre: { item.title }</p>
                    <img src={item.images.jpg.small_image_url}></img>
                    </ol>
                ))
            }
        </div>
    );
}
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  // ========================================
  
  ReactDOM.render(
    <ApiTest />,
    document.getElementById('root')
  );
  