import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { setUpdateCart } from "../redux/reducers/cartReducer";

export default function MeuCarrinho() {
  const cart = useSelector((state) => state.cart);

  const ItemCard = styled.div`
    background: #e9e9e9;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 15px;
    gap: 25px;
    border-radius: 25px;
    img {
      width: 100px;
      border-radius: 15px;
    }

    .title {
      font-size: 20px;
      font-weight: 600;
    }

    .descricao {
      width: 250px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
      color: gray;
    }

    .price {
      font-size: 20px;
      font-weight: 600;
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
      border: 1px solid gray;
      outline: none;
      width: 25px;
      height: 25px;
      border-radius: 100%;
      font-size: 24px;
      cursor: pointer;
      color: gray;
    }

    .increase {
      background: lightBlue;
    }

    .decrease {
      background: lightRed;
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
  `;

  const ContainerCart = styled.div`
    padding: 15px;
    width: 750px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  `;

  var valorInicial = 0;
  var totalValue = cart.items.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual.price,
    valorInicial
  );

  const dispatch = useDispatch();

  // console.log(cart.items[0].quantity)

  return (
    <ContainerCart>
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
            <div className="containerFooter">
              <div className="descriptionContent">
                <div className="title">{item.title}</div>
                <div className="descricao">{item.description}</div>
              </div>
              <div className="footer">
                <div className="buttons">
                  <button
                    onClick={() => {
                      dispatch(
                        setUpdateCart({
                          index,
                          quantity: cart.items[index].quantity + 1,
                          price:item.initialPrice
                        })
                      );
                    }}
                    className="increase"
                  >
                    +
                  </button>
                  {cart.items[index].quantity}
                  <button
                    onClick={() =>
                      cart.items[index].quantity >= 1 &&
                      dispatch(
                        setUpdateCart({
                          index,
                          quantity: cart.items[index].quantity - 1,
                          price:item.initialPrice
                        })
                      )
                    }
                    className="decrease"
                  >
                    -
                  </button>
                </div>
                <div className="price">
                  {/* R${item.price * cart.items[index].quantity} */}
                  R${item.price.toFixed(2)}
                </div>
              </div>
            </div>
          </ItemCard>
        );
      })}
      Valor total: R${totalValue.toFixed(2)}
    </ContainerCart>
  );
}
