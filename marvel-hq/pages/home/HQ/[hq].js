import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setShoppingCart } from "../../../redux/reducers/cartReducer";
import { md5, PUBLIC_KEY, timeStamp } from "../../api/keys/keys";
import { Header } from "../HomeStyles";
import {
  Button,
  Buttons,
  ContainerHQ,
  ContainerRareHQ,
  DescriptionHQ,
  GoBack,
  Image,
} from "./styles";

export default function SingleHQ() {
  let router = useRouter();
  const [hq, setHq] = useState([]);
  const [hqId, setHqId] = useState();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [showWarning, setShowWarning] = useState(false);

  async function fetchData() {
    let {
      data: {
        data: { results },
      },
    } = await axios.get(
      `https://gateway.marvel.com/v1/public/comics/${hqId}?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${md5}`
    );
    setHq(results);
  }

  useEffect(() => {
    setHqId(router.query.hq);
  }, [router.query.hq]);

  useEffect(() => {
    hqId && fetchData();
  }, [hqId]);

  const WarningMessage = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    position: fixed;
    width: 350px;
    transition: all ease 0.2s;
    right: ${showWarning ? "25px" : "-500px"};
    bottom: 25px;
    margin-right: 25px;
    background: gray;
    color: white;
    border-radius: 5px;

    .icon {
      font-size: 24px;
      margin-left: auto;
      color: white;
      cursor: pointer;
      &:hover {
        color: black;
      }
    }

    .titleWarning {
      display: flex;
      align-items: center;
    }
  `;

  return (
    <ContainerRareHQ>
      <Header>
        <img src="/images/logoMarvel.jpg" />
      </Header>
      {hq.map((hq) => (
        <>
          <GoBack onClick={() => router.back()}>
            <BsFillArrowLeftCircleFill size="30" />
            Voltar
          </GoBack>
          <ContainerHQ>
            <Image
              src={
                hq.thumbnail.path.includes("image_not_available")
                  ? "/images/imageDefault.jpg"
                  : `${hq.thumbnail.path}.${hq.thumbnail.extension}`
              }
            />
            <DescriptionHQ>
              <div className="container-title-price">
                <div className="title-hq">{hq.title}</div>
                <div className="price-hq">
                  R${(hq.prices[0].price ||= "5.99")}
                </div>
              </div>
              <div className="description">{hq.description}</div>
              <Buttons>
                <Button buy>Comprar</Button>
                <Button
                  onClick={() => {
                    if (cart.items.some((element) => element.id === hq.id)) {
                      setShowWarning(true);
                    } else {
                      dispatch(
                        setShoppingCart([
                          ...cart.items,
                          {
                            id: hq.id,
                            title: hq.title,
                            thumbnail: hq.thumbnail,
                            quantity: 1,
                            description: hq.description,
                            initialPrice:Number(hq.prices[0].price),
                            price: Number(hq.prices[0].price),
                          },
                        ])
                      );
                    }
                  }}
                >
                  Adicionar ao Carrinho
                </Button>
              </Buttons>
            </DescriptionHQ>
          </ContainerHQ>
        </>
      ))}
      <WarningMessage>
        <div className="titleWarning">
          Aviso!{" "}
          <IoMdClose onClick={() => setShowWarning(false)} className="icon" />
        </div>
        <p>
          ITEM ADICIONADO AO CARRINHO O item que você tentou adicionar já existe
          em seu carrinho, para evitar que você inclua mais itens que realmente
          quer, selecione a quantidade desejada no carrinho de compras.
        </p>
      </WarningMessage>
    </ContainerRareHQ>
  );
}
