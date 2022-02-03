import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ContentLoader from "../components/ContentLoader/ContentLoader";
import Header from "../components/Header/Header";
import { Pagination } from "../components/Pagination/Pagination";
import { md5, PUBLIC_KEY, timeStamp } from "./api/keys/keys"
import { CardHQ, FooterCardHq, Main, MainBackground } from "./styles";

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [hqs, setHqs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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
      <Header />
      <MainBackground>
        <Main>
          <span className="marvel-comics">Marvel Comics</span>
          {isLoading ? (
            <ContentLoader />
          ) : (
            <>
              {hqs.map((item, index) => (
                <>
                  <CardHQ
                    key={index}
                    title={item.title}
                    image={
                      item.thumbnail.path.includes("image_not_available")
                        ? "/images/imageDefault.jpg"
                        : `${item.thumbnail.path}.${item.thumbnail.extension}`
                    }
                  >
                    <FooterCardHq
                      title={item.title}
                      onClick={() => router.push(`/HQ/${item.id}`)}
                      price={(item.prices[0].price ||= "5.99")}
                      index={index}
                    />
                  </CardHQ>
                </>
              ))}
            </>
          )}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Main>
      </MainBackground>
    </>
  );
}
