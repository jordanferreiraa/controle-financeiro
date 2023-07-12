import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;

  svg {
    width: 18px;
    height: 18px;
  }

  &:nth-child(4) {
    transition: .3s;
  }

  &:nth-child(4):hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;