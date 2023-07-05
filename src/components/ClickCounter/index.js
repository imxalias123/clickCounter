// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked
          <span className="timer">{count}</span> {'  '}
          times
        </h1>
        <p className="para">Click the button to increase the count</p>
        <button onClick={this.onIncrement} className="button">
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
