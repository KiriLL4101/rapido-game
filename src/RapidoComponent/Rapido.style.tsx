import styled from "styled-components";

export const Wrap = styled.div`
  width: 343px;
  padding: 20px;
  margin: 30px auto;
  background: linear-gradient(180deg, #4568dc 0%, #b06ab3 100%), #ef8e48;
`;

export const Wrapper = styled.div`
  background: #fff;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-size: 16px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.div`
  font-size: 14px;
  margin-bottom: 15px;
  span {
    font-weight: bold;
    margin-right: 10px;
  }
`;

export const Ticket = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 15px;
`;

export const TicketItem = styled.div<{ isActive: boolean }>`
  width: 40px;
  height: 40px;
  margin: 1px;
  text-align: center;
  border: 1px solid #dddddd;
  border-color: ${(props) => (props.isActive ? "#dddddd" : "none")};
  background: ${(props) => (props.isActive ? "#ffd205" : "#fff")};
  line-height: 36px;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
`;

export const Button = styled.button`
  padding: 13px 26px;
  border: 1px soled #000;
  border-radius: 40px;
  opacity: 0.4;
  color: #000000;
  cursor: pointer;
  margin: 20px 0;
  align-self: center;
`;

export const ResultTitle = styled.div`
  height: 343px;
`;
