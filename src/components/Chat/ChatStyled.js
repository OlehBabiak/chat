import styled from "styled-components"

const ChatTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  background: #eeeaea;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`

const MessageField = styled.div`
  width: 100%;
  height: 100%;
  border-left: 2px solid lightgray;
  border-top: 2px solid lightgray;
  border-bottom: 2px solid lightgray;
  box-sizing: border-box;
  padding: 10px;
  overflow-x: hidden;
`

const InputMessages = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  background: #eeeaea
`

const UserTextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const DateWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #f5f1f1;
  font-size: 12px;
`

const UserTextWrapper = styled.div`
  background: #bbbbba;
  width: 40%;
  padding: 10px;
  font-size: 20px;
  border-radius: 20px;
  word-wrap: break-word
`

const BotTextWrapper = styled.div`
  background: #2c2c76;
  width: 40%;
  padding: 10px;
  font-size: 20px;
  border-radius: 20px;
  color: cornsilk;
`

export {
    ChatTitle,
    MessageField,
    InputMessages,
    UserTextContainer,
    UserTextWrapper,
    DateWrapper,
    BotTextWrapper
}