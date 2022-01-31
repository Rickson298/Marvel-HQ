import axios from "axios";
import { useEffect, useState } from "react";
import { md5, PUBLIC_KEY, timeStamp } from "../api/keys/keys";
import {
  CapaPrincipal,
  CardHQ,
  ContainerCardHq,
  FooterHq,
  Header,
} from "./styles";

export default function Home() {
  const [pagination, setPagination] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hqRareId, setHqRareId] = useState();

  async function fetchData() {
    setIsLoading(true);
    let {
      data: {
        data: { results },
      },
    } = await axios.get(
      `https://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&orderBy=issueNumber&apikey=${PUBLIC_KEY}&hash=${md5}&offset=${pagination}&limit=10`
    );
    setData(results);
    setIsLoading(false);
    setHqRareId(Math.floor(Math.random() * data.length));
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [pagination]);

  return (
    <>
      <Header>
        <img src="/images/logoMarvel.jpg" />
      </Header>
      <CapaPrincipal>
        <img
          className="marvel-logo"
          src="https://th.bing.com/th/id/OIP.FHzX-n7QNC-0mR-qRSiUFQHaEw?pid=ImgDet&rs=1"
        />
      </CapaPrincipal>
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <ContainerCardHq>
          {data.map((item, index) => (
            <>
              <CardHQ
                onClick={() => console.log(item)}
                key={index}
                rareItem={index === hqRareId}
                image={
                  item.thumbnail.path.includes("image_not_available")
                    ? "/images/imageDefault.jpg"
                    : `${item.thumbnail.path}.${item.thumbnail.extension}`
                }
              >
                <FooterHq rareItem={index === hqRareId}>
                  <span className="hq-title">{item.title}</span>
                  <div>
                    <span className="hq-price">R${item.prices[0].price}</span>
                    {index == hqRareId && <span className="rare-hq">RARO</span>}
                  </div>
                </FooterHq>
              </CardHQ>
            </>
          ))}
          <button onClick={() => setPagination((prevState) => prevState + 10)}>
            Aumentar
          </button>
          <button onClick={() => setPagination((prevState) => prevState - 10)}>
            Diminuir
          </button>
        </ContainerCardHq>
      )}
    </>
  );
}
