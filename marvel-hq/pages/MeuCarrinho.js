import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useState, useEffect } from "react";
import {
  setUpdateCart,
  setRemoveCartItem,
} from "../redux/reducers/cartReducer";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";
import { useRouter } from "next/router";
import { Header, CartLength, Cart } from "./home/styles";

export default function MeuCarrinho() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const ItemCard = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 15px;
    border-top: 1px solid lightGray;

    img {
      width: 75px;
    }

    .title {
      font-size: 20px;
      font-weight: 600;
      width: 300px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .descricao {
      width: 250px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
      color: gray;
      font-weight: normal;
    }

    .price {
      font-size: 20px;
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .increase,
    .decrease {
      display: flex;
      justify-content: center;
      align-items: center;
      outline: none;
      width: 25px;
      height: 25px;
      border-radius: 100%;
      font-size: 24px;
      cursor: pointer;
      color: #b07aff;
    }

    .increase {
      &:hover {
        color: #00008b;
      }
    }

    .decrease {
      &:hover {
        color: red;
      }
    }

    .footer {
      display: flex;
      gap: 10px;
    }

    .containerFooter {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .descriptionContent {
      width: max-content;
    }

    .trash {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      padding: 7px;
      border-radius: 100%;
      transition: all ease 0.2s;
      cursor: pointer;

      &:hover {
        color: white;
        background: red;
      }
    }
  `;

  const ContainerCart = styled.div`
    padding: 15px;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .valorTotal {
      margin-left: auto;
      font-size: 26px;
    }

    .group span {
      margin-bottom: 10px;
    }

    .group {
      display: flex;
      flex-direction: column;
      height: 100%;
      font-weight: 600;
    }

    .valorUnico {
      font-weight: normal;
    }

    .infoBottom {
      display: flex;
      align-items: center;
    }

    .titleCarrinho {
      font-size: 36px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 25px;
    }

    .link {
      display: flex;
      align-items: center;
      color: blue;
      cursor: pointer;
      &:hover {
        border-bottom: 1px solid blue;
      }
    }
  `;

  var valorInicial = 0;
  var totalValue = cart.items.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual.price,
    valorInicial
  );
  const router = useRouter();

  return (
    <>
      <Header>
        <img src="/images/logoMarvel.jpg" />
        <Cart>
          <RiShoppingBag3Fill className="cart-icon" />
          <CartLength>{cart.items.length}</CartLength>
        </Cart>
      </Header>
      <ContainerCart>
        <div className="titleCarrinho">Carrinho de Compras</div>
        {cart.items.map((item, index) => {
          return (
            <ItemCard>
              <img
                src={
                  item.thumbnail?.path?.includes("image_not_available")
                    ? "/images/imageDefault.jpg"
                    : `${item.thumbnail.path}.${item.thumbnail.extension}`
                }
              />
              <div className="group">
                <span>Valor Unitário</span>
                <div className="valorUnico">R${item.initialPrice}</div>
              </div>
              <div className="group">
                <span>Item</span>
                <div className="descriptionContent">
                  <div className="title">{item.title}</div>
                  <div className="descricao">{item.description}</div>
                </div>
              </div>
              <div className="group">
                <span>Quantidade</span>
                <div className="buttons">
                  <IoIosAddCircleOutline
                    onClick={() => {
                      dispatch(
                        setUpdateCart({
                          index,
                          quantity: cart.items[index].quantity + 1,
                          price: item.initialPrice,
                        })
                      );
                    }}
                    className="increase"
                  />
                  {cart.items[index].quantity}
                  <IoIosRemoveCircleOutline
                    onClick={() =>
                      cart.items[index].quantity > 1 &&
                      dispatch(
                        setUpdateCart({
                          index,
                          quantity: cart.items[index].quantity - 1,
                          price: item.initialPrice,
                        })
                      )
                    }
                    className="decrease"
                  />
                </div>
              </div>
              <div className="group">
                <span>Sub-total</span>
                <div className="price">R${item.price.toFixed(2)}</div>
              </div>
              <div
                onClick={() => {
                  if (cart.items.length > 1) {
                    dispatch(setRemoveCartItem({ id: item.id }));
                  } else {
                    dispatch(setRemoveCartItem({ id: item.id }));
                    router.push("home");
                  }
                }}
                className="trash"
              >
                <BsTrash />
              </div>
            </ItemCard>
          );
        })}
        <div className="infoBottom">
          <div onClick={() => router.push("/home")} className="link">
            <IoIosArrowBack />
            <span>Continue comprando</span>
          </div>
          <div className="valorTotal">Total: R${totalValue.toFixed(2)} </div>
        </div>
      </ContainerCart>
    </>
  );
}
