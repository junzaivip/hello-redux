import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types'

// function App() {
//   return (
//     <div className="App">
//       <p>{ this.props.value }</p>
//       <button>增加</button>
//       <button>减少</button>
//
//      </div>
//   );
// }


class App extends Component {
    render() {
        return (
            <div className="App">
                <p className="bg-warning">{this.props.value}</p>
                <button type="button" className="btn btn-success" onClick={this.props.onIncrement}> 增加 </button>&nbsp;&nbsp;
                <button type="button" className="btn btn-success" onClick={this.props.onDecrement}> 减少 </button>
            </div>

        )
    }
}


App.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement:PropTypes.func.isRequired,
    OnDecrement: PropTypes.func.isRequired
}

export default App;
