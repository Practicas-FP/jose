import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home';
import Contact from './component/contact';
import About from './component/about';
import Login from './component/login'
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import DetallesAnime from './component/detalles-anime';


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
    this.setState({ squares: squares });
    this.setState({ XisNext: !this.state.XisNext })
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
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    this.sendData();
    event.preventDefault();
  }

  sendData = () => {
    this.props.parentCallback("Hey Popsie, How’s it going?");
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

class Entrada extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.item.images.jpg.large_image_url} />
        <Card.Body>
          <Card.Title>{this.props.item.title}</Card.Title>
          <Card.Text>
            {this.props.item.synopsis.slice(0, 90) + '...'}
          </Card.Text>
          <Button variant="primary">Ver detalles</Button>
        </Card.Body>
      </Card>
    );

  }
}

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Busqueda de anime</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/about" className="nav-link">Acerca de</Link>
            <Link to="/login" className="nav-link">Acceso</Link>
          </Nav>
        </Container>
      </Navbar>
    )
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

  callBackFunction = (childData) => {
    this.setState({ searchName: childData });
  }

  componentDidMount() {
    this.hacerBusqueda('')
  }

  hacerBusqueda() {
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
    this.setState({ searchName: searchName })
  }

  getInputValue = (event) => {
    // do cool stuff here!
    console.log(event.target.value)
    this.setState({ searchName: event.target.value });
  };

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;

    return (
      <Container>
        <Router>
        <NavigationBar />
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
            <Route exact path='/anime/:id' element={< DetallesAnime />}></Route>
            <Route exact path='/login' element={< Login />}></Route>
          </Routes>
        </Router>
      </Container>
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

class Parent extends React.Component {
  state = { message: "" }
  callbackFunction = (childData) => {
    this.setState({ message: childData })
  };


  render() {
    return (
      <div>
        <Child1 parentCallback={this.callbackFunction} />
        <p> {this.state.message} </p>
      </div>
    );
  }
}

class Child1 extends React.Component {
  sendData = () => {
    this.props.parentCallback("Hey Popsie, How’s it going?");
  };

  render() {
    return (
      <button onClick={() => this.sendData()}>Data exchange</button>
    );
  }
};

// ========================================
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  
    <ApiTest />
  
);
