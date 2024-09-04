import {
  ButtonImage,
  ResultChoiceContainer,
  GameResultsContainer,
} from './styledComponents'

const GameResults = props => {
  const {myChoice, opponentChoice, resultMessage, onPlayAgain} = props
  const {imageUrl} = opponentChoice

  const onClickPlayAgain = () => {
    onPlayAgain()
  }

  return (
    <GameResultsContainer>
      <ResultChoiceContainer>
        <div>
          <h1>YOU</h1>
          <ButtonImage src={myChoice[1]} alt="your choice" />
        </div>
        <div>
          <h1>OPPONENT</h1>
          <ButtonImage src={imageUrl} alt="opponent choice" />
        </div>
      </ResultChoiceContainer>
      <p>{resultMessage}</p>
      <button type="button" onClick={onClickPlayAgain}>
        PLAY AGAIN
      </button>
    </GameResultsContainer>
  )
}

export default GameResults
