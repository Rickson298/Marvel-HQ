import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ContentLoader from "../../components/ContentLoader/ContentLoader";
import { Pagination } from "../../components/Pagination/Pagination";
import { md5, PUBLIC_KEY, timeStamp } from "../api/keys/keys";
import {
  CardHQ,
  ContainerCardHq,
  FooterCardHq,
  Header,
  MainBackground,
} from "./HomeStyles";

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [hqs, setHqs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hqRareId, setHqRareId] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  let router = useRouter();

  async function fetchData() {
    setIsLoading(true);
    let {
      data: {
        data: { results },
      },
    } = await axios.get(
      `https://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&orderBy=issueNumber&apikey=${PUBLIC_KEY}&hash=${md5}&offset=${offset}&limit=10`
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
    setOffset((currentPage - 1) * 10);
  }, [currentPage]);

  return (
    <>
      <Header>
        <img src="/images/logoMarvel.jpg" />
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
