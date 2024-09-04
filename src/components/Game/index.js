import {Component} from 'react'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

import Buttons from '../Buttons'
import GameResults from '../GameResults'
import {
  GameContainer,
  ScoreContainer,
  ItemsContainer,
  Heading,
  ScoreCardContainer,
  ParagraphScore,
  ScoreSpan,
  ButtonImagesContainer,
} from './styledComponent'

class Game extends Component {
  state = {
    showResult: false,
    myChoice: {},
    opponentChoice: {},
    score: 0,
    resultMessage: '',
  }

  onPlayAgain = () => {
    this.setState({
      showResult: false,
      myChoice: {},
      opponentChoice: {},
      resultMessage: '',
    })
  }

  onGetResults = () => {
    const {myChoice, opponentChoice, resultMessage} = this.state
    return (
      <GameResults
        myChoice={myChoice}
        opponentChoice={opponentChoice}
        resultMessage={resultMessage}
        onPlayAgain={this.onPlayAgain}
      />
    )
  }

  onGetButtonId = (id, imageUrl) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)

    if (id === 'ROCK' && choicesList[number].id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (id === 'ROCK' && choicesList[number].id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (id === 'PAPER' && choicesList[number].id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (id === 'PAPER' && choicesList[number].id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (id === 'SCISSORS' && choicesList[number].id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (id === 'SCISSORS' && choicesList[number].id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else {
      this.setState({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        resultMessage: 'IT IS DRAW',
      })
    }
  }

  onGetImages = () => {
    const {choicesList} = this.props
    return (
      <ButtonImagesContainer>
        {choicesList.map(eachItem => (
          <Buttons
            key={eachItem.id}
            buttonDetails={eachItem}
            onGetButtonId={this.onGetButtonId}
          />
        ))}
      </ButtonImagesContainer>
    )
  }

  render() {
    const {showResult, score} = this.state
    return (
      <GameContainer>
        <ScoreContainer>
          <ItemsContainer>
            <Heading>
              Rock
              <br />
              Paper
              <br />
              Scissors
            </Heading>
          </ItemsContainer>
          <ScoreCardContainer>
            <ParagraphScore>Score</ParagraphScore>
            <ScoreSpan>{score}</ScoreSpan>
          </ScoreCardContainer>
        </ScoreContainer>
        {showResult ? this.onGetResults() : this.onGetImages()}
        <div>
          <Popup
            modal
            trigger={
              <button data-testid="Rules" type="button">
                Rules
              </button>
            }
            overlayStyle
          >
            {close => (
              <div>
                <button type="button" onClick={() => close()}>
                  <RiCloseLine aria-label="close" />
                </button>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </div>
            )}
          </Popup>
        </div>
      </GameContainer>
    )
  }
}

export default Game
