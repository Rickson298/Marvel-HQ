import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { md5, PUBLIC_KEY, timeStamp } from "../../api/keys/keys";
import { Header } from "../HomeStyles";
import {
  ContainerHQ, ContainerRareHQ, GoBack,
  HqInformation,
  Image
} from "./SingleHqstyles";

export default function SingleHQ() {
  let router = useRouter();
  const [hq, setHq] = useState([]);
  const [hqId, setHqId] = useState();
  useEffect(() => {
    setHqId(router.query.hq);
  }, [router.query.hq]);

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
    hqId && fetchData();
  }, [hqId]);

  return (
    <ContainerRareHQ>
      <Header>
        <img src="/images/logoMarvel.jpg" />
      </Header>
      {hq.map((item) => (
        <>
          <GoBack onClick={() => router.back()}>
            <BsFillArrowLeftCircleFill size="30" />
            Voltar
          </GoBack>
          <ContainerHQ>
            <Image
              src={
                item.thumbnail.path.includes("image_not_available")
                  ? "/images/imageDefault.jpg"
                  : `${item.thumbnail.path}.${item.thumbnail.extension}`
              }
            />
            <HqInformation
              title={item.title}
              price={(item.prices[0].price ||= "5.99")}
              description={item.description}
            />
          </ContainerHQ>
        </>
      ))}
    </ContainerRareHQ>
  );
}
