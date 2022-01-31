import styled from "styled-components";

export function Flex(htmlElement, justifyContent, alignItems,  flexDirection ="row") {
  return styled[htmlElement]`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;
}
