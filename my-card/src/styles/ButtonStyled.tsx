import styled from "styled-components";


export const StyledBtn = styled.button`
  border: none;
  background-color: #4E71FE;
  padding: 10px 20px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  font-size: 10px;
  font-weight: bold;
  width: 86px;
  height: 30px;
`
export const StyledBtnSave = styled(StyledBtn)`
  border: 2px solid rgb(78, 113, 254);
  background-color: transparent;
  color: rgb(78, 113, 254);
`

export const ContainerBtn = styled.div`
  display: flex;
  gap: 12px;
`
export const ContainerPar = styled.div`
  color: rgb(171, 179, 186);
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
`
export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  margin: 0 20px 22px;
`
