// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    isHeads: true,
    tailsCount: 0,
    headsCount: 0,
  }

  onClickTossBotton = () => {
    const {tailsCount, headsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    console.log(toss)

    let latestHeadCount = headsCount
    let latestTailCount = tailsCount

    if (toss === 0) {
      latestHeadCount += 1
      this.setState({isHeads: true, headsCount: latestHeadCount})
    } else {
      latestTailCount += 1
      this.setState({isHeads: false, tailsCount: latestTailCount})
    }
  }

  render() {
    const {isHeads, tailsCount, headsCount} = this.state
    const totalCount = tailsCount + headsCount
    const imgUrl = isHeads
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-tails">Heads (or) Tails</p>
          <img className="coin-img" src={imgUrl} alt="toss result" />
          <button
            type="button"
            className="button"
            onClick={this.onClickTossBotton}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
