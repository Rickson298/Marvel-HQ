import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CardHQ } from "../components/CardHQ/CardHQ";
import ContentLoader from "../components/ContentLoader/ContentLoader";
import { FooterCardHq } from "../components/FooterCardHq/FooterCardHq";
import Header from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { MainBackground } from "../components/MainBackground/MainBackground";
import { Pagination } from "../components/Pagination/Pagination";
import { useGetApi } from "./api/httpClient";
import { md5, PUBLIC_KEY, timeStamp } from "./api/keys/keys";

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetchData, results, isLoading] = useGetApi();

  let router = useRouter();
  let url = `comics?ts=${timeStamp}&orderBy=issueNumber&apikey=${PUBLIC_KEY}&hash=${md5}&offset=${offset}&limit=14`;

  useEffect(() => {
    fetchData(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  useEffect(() => {
    setOffset((currentPage - 1) * 14);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              {results.map((item, index) => (
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
