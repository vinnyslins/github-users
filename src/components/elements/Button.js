import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  font-family: courier new;
  font-size: 12px;
  padding: 5px 10px;

  &:hover {
    font-weight: bold;
    transform: translateY(2px);
    transition: all 0.2s;
  }
`;

export default Button;
