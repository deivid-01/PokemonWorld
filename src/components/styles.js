import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 15px;
  h1 {
    padding: 0;
  }
  h5 {
    padding: 10px 0 5px 0;
  }
`;
export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 15px;
  padding-bottom: 30px;
`;
export const Card = styled.div`

  
  width: 500px;
  height: 600px;
  display: grid;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const SubCard = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 10px -4px rgba(0, 0, 0, 0.25);
  background: #f1f1f1;
  min-height: 360px;
  padding: 15px;
  position: absolute;
  width: 100%;
  margin-top: 100px;
  padding-top: 15px;
`;

export const BoxTypes = styled.div`
  position: absolute;
  top: 5px;
  right: 0;
  max-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Name = styled.div`
  text-transform: capitalize;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
  }
  div {
    margin-left: 10px;
    text-align: right;
    margin-right: 0;
    margin-top: 7px;
  }
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Row = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  width: 100%;
  @media screen and (max-width: 996px) {
    flex-direction: column;
  }
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  flex: 1 1 auto;
  padding-right: 10px;

  &:last-child {
    padding-right: 0;
  }

  @media screen and (max-width: 996px) {
    width: 100%;
    flex: none;
  }
`;
export const Id = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  z-index: 2;
  letter-spacing: 0.25px;
`;

export const Info = styled.div`
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.25);
  font-size: 14px;
  color: #fff;
  padding: 2px 6px 3px 6px;
  display: inline-flex;
  margin-right: 10px;
  margin-top: 3px;
`;
export const BasicInfo = styled.div`
  border-radius: 15px;
  font-size: 12px;
  color: #fff;
  display: inline-flex;
  margin-right: 5px;
  margin-top: 3px;
  align-items: center;
  b {
    font-weight: 600;
    margin-right: 2px;
    font-size: 10px;
  }
`;

export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #fff;
`;

export const Evolutions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Evolution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  strong {
    align-self: center;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.6);
  }
  b {
    color: #fff;
    align-self: center;
    font-weight: 500;
    font-size: 13px;
  }
  img {
    width: 76px;
  }
  /* &::after {
    content: '⮞';
    color: #eee;
    position: absolute;
    right: -2.5px;
    top: 50%;
    z-index: 2;
  } */

  svg {
    color: #eee;
    position: absolute;
    right: -2.5px;
    top: 50%;
    z-index: 2;
  }

  span {
    font-weight: bold;
    font-size: 14px;
    color: #eee;
    position: absolute;
    left: -12.5px;
    top: calc(50% - 15px);
  }

  padding-right: 10px;

  &:last-child {
    padding-right: 0;
  }

  &:last-child svg {
    display: none;
  }

  @media screen and (max-width: 996px) {
    img {
      width: 95px;
    }
  }
`;

export const Colors = styled.div`
  display: flex;
  @media screen and (max-width: 996px) {
    flex-wrap: wrap;
  }
`;
export const Color = styled.button`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 5px 10px;
  color: #fff;
  font-size: 12px;
  box-shadow: 2px 2px 10px -4px rgba(0, 0, 0, 0.25);
  margin-right: 5px;
  margin-bottom: 5px;
  flex: 1 1 auto;
  justify-content: center;

  &:first-child {
    flex: 1 !important;
  }

  cursor: pointer;
  border: none;
  ${props =>
    props.active &&
    'font-weight:bold;box-shadow: inset 0 0 5px -1px rgba(0,0,0,0.5),inset 1px -2px 5px -1px rgba(255,255,255,0.5), 2px 2px 10px -4px rgba(0, 0, 0, 0.25);'}

  @media screen and (max-width: 996px) {
    padding: 5px 5px;
  }
`;

export const Types = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 996px) {
  }
`;
export const Type = styled.button`
  display: flex;
  align-items: center;
  justify-content:center;
  border-radius: 5px;
  padding: 3px 5px;
  color: #fff;
  font-size: 12px;
  box-shadow: 2px 2px 10px -4px rgba(0, 0, 0, 0.25);
  margin-right: 5px;
  cursor: pointer;
  border: none;
  margin-bottom: 5px;
  flex-direction: column;
  align-items: center;
  flex: 1 1 auto;
  background:#bbb;
  span {
    color: rgba(255, 255, 255, 0.8);
  }

  /* ${props => (props.active ? 'background:#999;' : 'background:#bbb;')} */
  ${props =>
    props.active &&
    'box-shadow: inset 0 0 5px -1px rgba(0,0,0,0.5), 2px 2px 10px -4px rgba(0, 0, 0, 0.25);'}

  @media screen and (max-width: 996px) {
    padding: 5px 5px;
  }
`;

export const Select = styled.select`
  display: flex;

  @media screen and (max-width: 996px) {
    flex-wrap: wrap;
  }
`;
export const Option = styled.option`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 3px 5px;
  margin-right: 5px;
  cursor: pointer;
  border: none;
  margin-bottom: 5px;
  flex-direction: column;
  align-items: center;
  flex: 1 1 auto;
`;

export const ButtonTop = styled.button`
  border: none;
  border-radius: 100%;
  background: #999;
  box-shadow: 2px 2px 10px -4px rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 900;
  color: #fff;
  padding: 5px 7px;
  cursor: pointer;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;
export const StatLabel = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 2px;
  text-transform: capitalize;
`;
export const StatBar = styled.div`
  width: 100%;
  height: 4px;
  background: #ccc;
  border-radius: 5px;
  position: relative;
  &::before {
    content: ' ';
    background: #999;
    height: 4px;
    width: ${props => (props.base_stat ? (props.base_stat * 100) / 500 : 0)}%;
    position: absolute;
    border-radius: 5px;
  }
  &::after {
    content: ' ${props => props.title}/500';
    position: absolute;
    right: 0;
    top: -15px;
    color: #fff;
    font-size: 11px;
  }
`;
