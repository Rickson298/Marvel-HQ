import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { setShoppingCart } from "../../redux/reducers/cartReducer";
import { md5, PUBLIC_KEY, timeStamp } from "../api/keys/keys";
import {
  Button,
  Buttons,
  ContainerCardItem,
  DescriptionHQ,
  GoBack,
  HQ,
  Image,
  Message
} from "./styles";

export default function SingleHQ() {
  let router = useRouter();
  const [hq, setHq] = useState([]);
  const [hqId, setHqId] = useState();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [warningAddedItem, setWarningAddedItem] = useState(false);
  const [addedItem, setAddedItem] = useState(false);

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

  useEffect(() => {
    (addedItem || warningAddedItem) &&
      setTimeout(() => {
        setAddedItem(false);
        setWarningAddedItem(false);
      }, 2000);
  }, [addedItem, warningAddedItem]);

  return (
    <ContainerCardItem>
      <Header></Header>
      {hq.map((hq) => (
        <>
          <GoBack onClick={() => router.push("/")}>
            <BsFillArrowLeftCircleFill size="30" />
            Voltar
          </GoBack>
          <HQ>
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
                      setWarningAddedItem(true);
                      setAddedItem(false);
                    } else {
                      setAddedItem(true);
                      dispatch(
                        setShoppingCart([
                          ...cart.items,
                          {
                            id: hq.id,
                            title: hq.title,
                            thumbnail: hq.thumbnail,
                            quantity: 1,
                            description: hq.description,
                            initialPrice: Number(hq.prices[0].price),
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
              {(addedItem || warningAddedItem) && (
                <Message addedItem={addedItem}>
                  {addedItem && <>Item adicionado ao seu carrinho</>}
                  {warningAddedItem && (
                    <>Este item já foi adicionado ao seu carrinho</>
                  )}
                </Message>
              )}
            </DescriptionHQ>
          </HQ>
        </>
      ))}
    </ContainerCardItem>
  );
}
