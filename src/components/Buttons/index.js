import {ButtonsContainer, Button, ButtonImage} from './styledComponents'

const Buttons = props => {
  const {buttonDetails, onGetButtonId} = props
  const {id, imageUrl} = buttonDetails
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    onGetButtonId(id, imageUrl)
  }
  return (
    <ButtonsContainer>
      <Button
        type="button"
        data-testid={`${lowerCaseId}Button`}
        onClick={onClickButton}
      >
        <ButtonImage src={imageUrl} alt={id} />
      </Button>
    </ButtonsContainer>
  )
}

export default Buttons
