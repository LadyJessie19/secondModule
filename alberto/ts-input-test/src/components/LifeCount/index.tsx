import React from "react"

import Heart from "../../assets/heart.svg"

type State = {
  lifes: number
}

type Props = {
  initialLifes: number
}

class LifeCount extends React.Component<Props, State> {
  state = {
    lifes: this.props.initialLifes,
  }

  death = () => {
    const { lifes } = this.state
    this.setState({ lifes: lifes - 1 })
  }

  render() {
    return (
      <div>
        {this.state.lifes > 0 ? (
          <>
            Number of lifes:
            {Array(this.state.lifes)
              .fill(null)
              .map(() => (
                <img src={Heart} width={20} height={20} />
              ))}
            <button onClick={this.death}>Character dies</button>
          </>
        ) : (
          <p>Que pena, você perdeu</p>
        )}
      </div>
    )
  }
}

export default LifeCount
