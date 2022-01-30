import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Image from "next/image";
import Document from "next/document";
import { md5, PUBLIC_KEY, timeStamp } from "../api/keys/keys";
import { CapaPrincipal, CardHQ, ContainerCardHq, Header } from "./styles";

export default function Home() {
  const [pagination, setPagination] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    let response = await axios.get(
      `https://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&orderBy=issueNumber&apikey=${PUBLIC_KEY}&hash=${md5}&offset=${pagination}&limit=10`
    );
    let responseData = response.data.data.results;
    if (data) {
      setData(() => {
        return responseData.filter((itemToFilter) => {
          return !data.map((itemData) => itemData.id).includes(itemToFilter.id);
        });
      });
    } else {
      setData(responseData);
    }
    setIsLoading(false);
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
          {data.map((item) => (
            <div>
              <CardHQ
                image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              >
                <div className="hq-title">{item.title}</div>
                <div className="hq-price">R${item.prices[0].price}</div>
              </CardHQ>
            </div>
          ))}
          <button onClick={() => setPagination((prevState) => prevState + 10)}>
            Aumentar
          </button>
        </ContainerCardHq>
      )}
    </>
  );
}
