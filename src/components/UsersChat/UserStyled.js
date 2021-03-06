import styled from "styled-components"

const UserImageWrapper = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 5px 15px
`

const UserWrapper = styled.div`
  width: 99%;
  background: #f5f4f1;
  border-bottom: 2px solid gray;
  margin-top: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 72px;
  overflow: hidden;
`

const DialogTitle = styled.p`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  height: 26px;
`

const DialogSubTitle = styled.p`
  overflow: hidden;
  height: 26px;
  color: darkgrey;
`

const DateWrapper = styled.span`
  font-size: 12px;
  color: darkgrey;
  margin-top: 5px;
`

const UserNameWrapper = styled.span`
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
`

const UserContentWrapper = styled.span`
  width: 100%;
`

export {
    UserImageWrapper,
    UserWrapper,
    DialogTitle,
    DialogSubTitle,
    DateWrapper,
    UserNameWrapper,
    UserContentWrapper
}