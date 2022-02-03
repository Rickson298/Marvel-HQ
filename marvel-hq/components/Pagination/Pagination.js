import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Flex } from "../../styles/DefaultStyles";

export function Pagination({ currentPage, setCurrentPage }) {
  const Page = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    color: black;
    padding: 10px;
    border: 1px solid gray;
    width: max-content;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    border-radius: 20px;

    .page {
      outline: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      border: none;
      background: none;
      cursor: pointer;
      color: gray;
      transition: all ease 0.2s;
      &:hover {
        background: gray;
        color: white;
      }
    }

    .page-selected {
      background: gray;
      color: white;
    }

    .navigation {
      outline: none;
      background: none;
      border: none;
      color: gray;
      cursor: pointer;
      &:hover {
        color: white;
      }
      @media (max-width: 420px) {
        display: none;
      }
    }

    .arrow-pagination {
      color: gray;
      font-size: 20px;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
  `;

  const ContainerPagination = styled(Flex("footer", "center", "center"))`
    backgroud: rgba(255, 255, 255, 0.6);
    width: 100vw;
  `;

  const [pagination, setPagination] = useState(0);
  let pages = [1, 2, 3, 4, 5];

  pages.forEach((item, index) => {
    pages[index] += pagination;
  });

  return (
    <ContainerPagination>
      <Page>
        <IoIosArrowBack
          onClick={() =>
            pages[0] > 1 && setPagination((prevState) => prevState - 5)
          }
          className="arrow-pagination"
        />
        <button
          onClick={() => {
            if (currentPage > 1) {
              if (currentPage === pages[0]) {
                setPagination((prevState) => prevState - 5);
                setCurrentPage((prevState) => prevState - 1);
              } else {
                setCurrentPage((prevState) => prevState - 1);
              }
            }
          }}
          class="navigation"
        >
          Anterior
        </button>
        {pages.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentPage(item);
            }}
            className={`page ${currentPage === item && "page-selected"}`}
          >
            {item}
          </button>
        ))}
        <button
          onClick={() => {
            if (currentPage < 4235) {
              if (currentPage === pages[4]) {
                setPagination((prevState) => prevState + 5);
                setCurrentPage((prevState) => prevState + 1);
              } else {
                setCurrentPage((prevState) => prevState + 1);
              }
            }
          }}
          class="navigation"
        >
          Próximo
        </button>
        <IoIosArrowForward
          onClick={() =>
            pages[4] < 4235 && setPagination((prevState) => prevState + 5)
          }
          className="arrow-pagination"
        />
      </Page>
    </ContainerPagination>
  );
}
