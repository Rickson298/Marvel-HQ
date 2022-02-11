import { useRouter } from "next/router";
import { BsTrash } from "react-icons/bs";
import {
  IoIosAddCircleOutline,
  IoIosArrowBack,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { ContainerCart } from "../../components/Cart/ContainerCart";
import { ItemCard } from "../../components/Cart/ItemCard";
import Header from "../../components/Header/Header";

export default function MeuCarrinho() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  var valorInicial = 0;
  var totalValue = cart.items?.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual.price,
    valorInicial
  );
  const router = useRouter();

  return (
    <>
      <Header />
      <ContainerCart>
        <div className="cart-title">Carrinho de Compras</div>
        {cart.items.map((item, index) => {
          return (
            <ItemCard key={index}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="capa item"
                src={
                  item.thumbnail?.path?.includes("image_not_available")
                    ? "/images/imageDefault.jpg"
                    : `${item.thumbnail.path}.${item.thumbnail.extension}`
                }
              />
              <div className="item-group price">
                <span>Valor Unitário</span>
                <div className="initial-value">R${item.initialPrice}</div>
              </div>
              <div className="item-group">
                <span>Item</span>
                <div className="informations-item">
                  <div className="item-title">{item.title}</div>
                  <div className="item-description ">{item.description}</div>
                </div>
              </div>
              <div className="item-group">
                <span>Quantidade</span>
                <div className="buttons">
                  <IoIosAddCircleOutline
                    onClick={() => {
                      dispatch(
                        setUpdateCart({
                          index,
                          quantity: cart.items[index].quantity + 1,
                          price: item.initialPrice,
                        })
                      );
                    }}
                    className="increase"
                  />
                  {cart.items[index].quantity}
                  <IoIosRemoveCircleOutline
                    onClick={() =>
                      cart.items[index].quantity > 1 &&
                      dispatch(
                        setUpdateCart({
                          index,
                          quantity: cart.items[index].quantity - 1,
                          price: item.initialPrice,
                        })
                      )
                    }
                    className="decrease"
                  />
                </div>
              </div>
              <div className="item-group price">
                <span>Sub-total</span>
                <div className="price">R${item.price.toFixed(2)}</div>
              </div>
              <div
                onClick={() => {
                  if (cart.items.length > 1) {
                    dispatch(setRemoveCartItem({ id: item.id }));
                  } else {
                    dispatch(setRemoveCartItem({ id: item.id }));
                    router.push("/");
                  }
                }}
                className="trash"
              >
                <BsTrash className="trash-icon" />
              </div>
            </ItemCard>
          );
        })}
        <footer>
          <div onClick={() => router.push("/")} className="link">
            <IoIosArrowBack />
            <span>Continue comprando</span>
          </div>
          <div className="total-value">Total: R${totalValue.toFixed(2)} </div>
        </footer>
      </ContainerCart>
    </>
  );
}
