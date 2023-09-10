// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    bananaCount: 0,
    mangosCount: 0,
  }

  onEatingMango = () => {
    this.setState(prevState => ({mangosCount: prevState.mangosCount + 1}))
  }

  onEatingBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {bananaCount, mangosCount} = this.state

    return (
      <div className="fruits-counter-container">
        <div className="fruits-counter">
          <h1 className="main-heading">
            Bob ate <span className="count-format">{mangosCount}</span> mangoes
            and <span className="count-format">{bananaCount}</span> bananas
          </h1>
          <div className="counters-control-container">
            <div className="counter-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                type="button"
                className="btn"
                onClick={this.onEatingMango}
              >
                Eat Mango
              </button>
            </div>

            <div className="counter-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                type="button"
                className="btn"
                onClick={this.onEatingBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
