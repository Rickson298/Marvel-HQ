// import { useEffect, useState } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import Image from "next/image";
// import Document from "next/document";

// export default function Home() {
//   const Header = styled.div`
//     background: rgba(0, 0, 0, 0.7);
//     padding: 25px;
//     width: 100%;
//     height: 5vh;
//     display: flex;
//     position: fixed;
//     z-index: 9999;
//     align-items: center;
//     img {
//       width: 150px;
//     }
//   `;
//   const ContainerCardHq = styled.div`
//     max-width: 100vw;
//     background: rgba(0, 0, 0, 0.8);
//     display: flex;
//     flex-wrap: wrap;
//     gap: 15px;
//     justify-content: center;
//     padding: 15px 0px 15px 0px;
//   `;

//   const CardHQ = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: end;
//     padding: 15px;
//     color: white;
//     transition: all ease 0.2s;
//     border: 1px solid gray;
//     background-image: url(${({ image }) => image});
//     background-size: contain;
//     background-position: top;
//     background-repeat: no-repeat;
//     width: 230px;
//     height: 380px;
//     box-shadow: -2px -64px 61px -11px rgba(0, 0, 0, 0.95) inset;
//     -webkit-box-shadow: -2px -64px 61px -11px rgba(0, 0, 0, 0.95) inset;
//     -moz-box-shadow: -2px -64px 61px -11px rgba(0, 0, 0, 0.95) inset;
//     &:hover {
//       box-shadow: -2px -129px 61px -11px rgba(0, 0, 0, 0.88) inset;
//       -webkit-box-shadow: -2px -129px 61px -11px rgba(0, 0, 0, 0.88) inset;
//       -moz-box-shadow: -2px -129px 61px -11px rgba(0, 0, 0, 0.88) inset;
//       transform: scale(1.05);
//     }

//     .hq-title {
//       text-align: start;
//       display: flex;
//       justify-content: center;
//       font-weight: 600;
//       width: 250px;
//     }

//     .price {
//       display: block;
//       margin-left: auto;
//       width: max-content;
//       border-radius: 15px;
//       margin-top: 5px;
//       background: red;
//       color: white;
//       padding: 5px 15px;
//     }
//   `;

//   const CapaPrincipal = styled.div`
//     width: 100vw;
//     height: 100vh;
//     background-image: url("https://images7.alphacoders.com/990/thumb-1920-990523.jpg");
//     background-position: center;
//     background-size: cover;
//     background-repeat: no-repeat;
//     display: flex;
//     justify-content: start;
//     align-items: center;
//     position: relative;

//     .logo {
//       margin-left: 250px;
//       border-radius: 15px;
//     }
//   `;

//   let timeStamp = "1643416461";
//   let PUBLIC_KEY = "c144e673874c20f005ece312e5a2f9ef";
//   let PRIVATE_KEY = "9738e492832d8d655912bf8ce31eb19631e00509";
//   let md5 = "819870dc1e7d51a390aba0b56f6016f1";
//   const [pagination, setPagination] = useState(0);
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   async function fetchData() {
//     setIsLoading(true);
//     let response = await axios.get(
//       `https://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&orderBy=issueNumber&apikey=${PUBLIC_KEY}&hash=${md5}&offset=${pagination}&limit=10`
//     );
//     let responseData = response.data.data.results;
//     if (data.length) {
//       setData(() => {
//         return responseData.filter((itemToFilter) => {
//           return !data.map((itemData) => itemData.id).includes(itemToFilter.id);
//         });
//       });
//     } else {
//       setData(responseData);
//     }
//     setIsLoading(false);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     fetchData();
//     console.log(pagination);
//   }, [pagination]);

//   return (
//     <>
//       <Header>
//         <img src="/images/logoMarvel.jpg" />
//       </Header>
//       <CapaPrincipal>
//         <img
//           className="logo"
//           src="https://th.bing.com/th/id/OIP.FHzX-n7QNC-0mR-qRSiUFQHaEw?pid=ImgDet&rs=1"
//         />
//       </CapaPrincipal>
//       {isLoading ? (
//         <div>Carregando...</div>
//       ) : (
//         <ContainerCardHq>
//           {data.map((item) => (
//             <div>
//               <CardHQ
//                 image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
//               >
//                 <div className="hq-title">{item.title}</div>
//                 <div className="price">R${item.prices[0].price}</div>
//               </CardHQ>
//             </div>
//           ))}
//           <button
//             onClick={() => {
//               setPagination((prevState) => prevState + 10);
//             }}
//           >
//             Aumentar
//           </button>
//         </ContainerCardHq>
//       )}
//     </>
//   );
// }
