import { useRouter } from "next/router";
import { Cart, CartLength } from "../../pages/styles";
import { RiShoppingBag3Fill } from "react-icons/ri";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

export default function Header({children}) {
  const HeaderComponent = styled.header`
    background: rgba(0, 0, 0, 1);
    height: 10%;
    padding: 25px;
    width: 100%;
    transition: all ease 0.2s;
    display: flex;
    justify-content: space-between;
    z-index: 9999;
    align-items: center;
    color: white;
    img {
      width: 150px;
    }
  `;

  const router = useRouter();
  const cart = useSelector((state) => state.cart);

  return (
    <HeaderComponent>
      <img src="/images/logoMarvel.jpg" />
      <Cart onClick={() => router.push("/Carrinho/FinalizarCompra")}>
        {children}
        <RiShoppingBag3Fill className="cart-icon" />
        <CartLength>{cart.items.length}</CartLength>
      </Cart>
    </HeaderComponent>
  );
}
