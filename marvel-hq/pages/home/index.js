import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ContentLoader from "../../components/ContentLoader/ContentLoader";
import { Pagination } from "../../components/Pagination/Pagination";
import { md5, PUBLIC_KEY, timeStamp } from "../api/keys/keys";
import { RiShoppingBag3Fill } from "react-icons/ri";
import {
  CardHQ,
  Cart,
  CartItems,
  CartLength,
  ContainerCardHq,
  FooterCardHq,
  Header,
  MainBackground,
} from "./HomeStyles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setShoppingCart } from "../../redux/reducers/cartReducer";

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [hqs, setHqs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hqRareId, setHqRareId] = useState();
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
    setHqRareId(Math.floor(Math.random() * hqs.length));
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

  return (
    <>
      <Header>
        <img src="/images/logoMarvel.jpg" />
        <Cart
        onClick={() => router.push(`MeuCarrinho`)}
        >
          <RiShoppingBag3Fill className="cart-icon" />
          <CartLength>{cart.items.length}</CartLength>
        </Cart>
      </Header>
      <MainBackground>
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
            {hqs.map((item, index) => (
              <>
                <CardHQ
                  key={index}
                  title={item.title}
                  onClick={() => router.push(`home/HQ/${item.id}`)}
                  key={index}
                  rareItem={index === hqRareId}
                  image={
                    item.thumbnail.path.includes("image_not_available")
                      ? "/images/imageDefault.jpg"
                      : `${item.thumbnail.path}.${item.thumbnail.extension}`
                  }
                >
                  <FooterCardHq
                    title={item.title}
                    price={(item.prices[0].price ||= "5.99")}
                    index={index}
                    hqRareId={hqRareId}
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
