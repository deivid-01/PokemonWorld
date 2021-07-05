import styled from 'styled-components';


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
