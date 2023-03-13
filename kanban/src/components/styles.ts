import styled from  "styled-components"

export const Back = styled.div`
  display: flex;
  gap:1em;
`
export const ColummS = styled.div`
  background-color: #EAEAEA;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #3A72F8;
  font-weight: 600;
  border-radius: 17px;
  width: 300px;
  min-height: 85vh;
  padding: 15;
`
export const CardNewD = styled.div`
  border-radius: 35px;
  box-shadow: 2px 3px 5px gray;
  width: 95%;
  max-height: 250px;
  min-height: 250px;
  overflow-y: hidden;
  box-sizing: border-box;
  padding: 1em;
  background-color: whitesmoke;
  margin-bottom: 1em;
`
export const InputTitle = styled.input`
  border-radius: 35px;
  width: 100%;
  font-weight: 800;
  height: 15%;
  margin-bottom: .2em;
  padding: 10px;
  box-sizing: border-box;
  font-size:20px;
`

export const InputTextarea = styled.textarea`
  border-radius: 20px;
  width: 100%;
  font-weight: 16px;
  height: 70%;
  margin-bottom: 0.1em;
  padding: 10px;
  box-sizing: border-box;
  font-size:20px;
  resize: none;
`

export const CardTask = styled.div`
  border-radius: 35px;
  box-shadow: 2px 3px 5px gray;
  width: 95%;
  min-height: 300px;
  overflow-y: hidden;
  box-sizing: border-box;
  padding: 1em;
  background-color: whitesmoke;
  margin-bottom: 1em;
  position: relative;
`

export const Title = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 21px;
`

export const Text = styled.p`
  font-weight:500;
  height:55%;
`
export const DeleteIcon = styled.span`
  margin-bottom: 10px;
`
export const NextIcon = styled.span`
  margin-bottom: 10px;
`
export const PreviousIcon = styled.span`
  margin-bottom: 10px;
`
export const EditIcon = styled.span`

`
export const ButtonsBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CardEdit = styled.div`
  border-radius: 35px;
  box-shadow: 2px 3px 5px gray;
  width: 95%;
  max-height: 250px;
  min-height: 250px;
  overflow-y: hidden;
  box-sizing: border-box;
  padding: 1em;
  background-color: whitesmoke;
  margin-bottom: 1em;
  position: relative;
`