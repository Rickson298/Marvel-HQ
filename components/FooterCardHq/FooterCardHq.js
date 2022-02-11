import { FooterHq } from "../FooterHq/FooterHq";
import styled from "styled-components";
import { HqPrice } from "../HqPrice/HqPrice";
import { HqTitle } from "../HqTitle/HqTitle";
export function FooterCardHq({ title, price, index, onClick }) {
  return (
    <FooterHq onClick={onClick}>
      <HqTitle className="hq-title">{title}</HqTitle>
      <div>
        <HqPrice>R${price}</HqPrice>
      </div>
    </FooterHq>
  );
}