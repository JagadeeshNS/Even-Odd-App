// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  IncrementButtonText = () => {
    const num =    Math.ceil(Math.random() * 100)
    return num
  }

  incrementButton = () => {
    const randomNumber = this.IncrementButtonText()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="card-container">
          <h1>Count {count}</h1>
          <p>Count is {displayText}</p>
          <div className="button-container">
            <button
              type="button"
              className="button"
              onClick={this.incrementButton}
            >
              Increment
            </button>
          </div>
          <p>*Increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
