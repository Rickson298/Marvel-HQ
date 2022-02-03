import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import ContentLoader from "../../components/ContentLoader/ContentLoader";
import { Pagination } from "../../components/Pagination/Pagination";
import { md5, PUBLIC_KEY, timeStamp } from "../api/keys/keys";
import {
  CardHQ,
  Cart, CartLength,
  ContainerCardHq,
  FooterCardHq,
  Header,
  MainBackground
} from "./styles";

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [hqs, setHqs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hqRareIndex, setHqRareIndex] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  let router = useRouter();

  async function fetchData() {
    setIsLoading(true);
    let {
      data: {
        data: { results },
      },
    } = await axios.get(
      `https://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&orderBy=issueNumber&apikey=${PUBLIC_KEY}&hash=${md5}&offset=${offset}&limit=14`
    );
    setHqs(results);
    setIsLoading(false);
    setHqRareIndex(Math.floor(Math.random() * hqs.length));
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [offset]);

  useEffect(() => {
    setOffset((currentPage - 1) * 14);
  }, [currentPage]);

  if (hqs[hqRareIndex]) {
    hqs[hqRareIndex].rare = true;
  }

  
  
  


  return (
    <>
      <Header>
        <img src="/images/logoMarvel.jpg" />
        <Cart onClick={() => router.push("/MeuCarrinho")}>
          <RiShoppingBag3Fill className="cart-icon" />
          <CartLength>{cart.items.length}</CartLength>
        </Cart>
      </Header>
      <MainBackground>
        <div className="backgroundEscuro">
          Teste
        </div>
        {/* <img
          className="marvel-logo"
          src="https://th.bing.com/th/id/OIP.FHzX-n7QNC-0mR-qRSiUFQHaEw?pid=ImgDet&rs=1"
        /> */}
      </MainBackground>
      <ContainerCardHq>
        {isLoading ? (
          <ContentLoader />
        ) : (
          <>
          <span className="marvelComics">Marvel Comics</span>
            {hqs.map((item, index) => (
              <>
                <CardHQ
                  key={index}
                  title={item.title}
                  key={index}
                  rareItem={item.rare}
                  image={
                    item.thumbnail.path.includes("image_not_available")
                      ? "/images/imageDefault.jpg"
                      : `${item.thumbnail.path}.${item.thumbnail.extension}`
                  }
                >
                  
                  <FooterCardHq
                    title={item.title}
                    onClick={() => router.push(`home/HQ/${item.id}`)}
                    price={(item.prices[0].price ||= "5.99")}
                    index={index}
                    hqRareId={hqRareIndex}
                  />
                </CardHQ>
              </>
            ))}
          </>
        )}
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </ContainerCardHq>
    </>
  );
}
