import React from 'react'

const OPTIONS = {
  PEDRA: 'pedra',
  TESOURA: 'tesoura',
  PAPEL: 'papel'
}

const SCREEN = {
  START: 'tela-selecao',
  PROGRESS: 'tesoura',
  END: 'papel'
}

const DEFAULT_INIT = {
  title: 'Escolha uma opção',
  screen: SCREEN.START,
  player1: null,
  player2: null
}

class App extends React.Component {
  state = DEFAULT_INIT

  randomOption () {
    const option = Math.floor(Math.random() * 3)

    switch (option) {
      case 0: return OPTIONS.PEDRA
      case 1: return OPTIONS.TESOURA
      default: return OPTIONS.PAPEL
    }
  }

  winner (player1, player2) {
    if (player1 === player2) {
      return 'empate'
    }

    if (
      (player1 === OPTIONS.PEDRA && player2 === OPTIONS.TESOURA) ||
      (player1 === OPTIONS.TESOURA && player2 === OPTIONS.PAPEL) ||
      (player1 === OPTIONS.PAPEL && player2 === OPTIONS.PEDRA)
    ) {
      return 'player1'
    }

    return 'player2'

  }

  selectOption (option) {
    if (this.state.player1) return;
    const player1 = option
    const player2 = this.randomOption()
    const winner = this.winner(player1, player2)

    let title = 'Você venceu!'

    if (winner === 'empate') {
      title = 'O jogo empatou!'
    } else if (winner === 'player2') {
      title = 'O computador venceu!'
    }

    this.setState({
      player1,
      player2,
      title,
      screen: SCREEN.PROGRESS
    })
  }

  gameStart () {
    this.setState(DEFAULT_INIT)
  }

  gameOver () {
    this.setState({
      player1: null,
      player2: null,
      screen: SCREEN.END,
      title: 'Obrigado por jogar'
    })
  }

  render () {
    
    if (this.state.screen === SCREEN.END) {
      return (
        <div className="jokenpo">
          <h2>{this.state.title}</h2>
        </div>
      )
    }

    return (
      <div className="jokenpo">
        <h2>{this.state.title}</h2>

        <div className="row player">
          <div className="box player1">{this.state.player1}</div>
          <div className="box player2">{this.state.player2}</div>
        </div>

        <div className="row options">
          <div
            className="box pedra"
            onClick={() => this.selectOption(OPTIONS.PEDRA)}
          >
            pedra
          </div>
          
          <div
            className="box tesoura"
            onClick={() => this.selectOption(OPTIONS.TESOURA)}
          >
            tesoura
          </div>

          <div
            className="box papel"
            onClick={() => this.selectOption(OPTIONS.PAPEL)}
          >
            papel
          </div>
        </div>

        {this.state.screen === SCREEN.PROGRESS && (
          <div>
            <h2>Jogar novamente?</h2>
            <div className="row">
              <button onClick={this.gameStart.bind(this)}>SIM</button>
              <button onClick={this.gameOver.bind(this)}>NÃO</button>
            </div>
          </div>
        )}

      </div>
    )
  }
  
}

export default App
