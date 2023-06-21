import React from "react";
import data from "../data";
import CartitemsContext, {
  useGlobalcontext5,
} from "../components/context/CartitemsContext";
import { useState } from "react";
import { useGlobalcontext2 } from "../components/context/HeadphoneContext";
import { useGlobalcontext3 } from "../components/context/SpeakersContext";
import { useGlobalcontext4 } from "../components/context/EarphoneContext";

const Cartcomponent = ({ id, Quantity, setQuantity }) => {
  const { HeadphoneCartitems, setHeadphoneCartitems } = useGlobalcontext2();
  const { SpeakersCartitems, setSpeakersCartitems } = useGlobalcontext3();
  const { EarphoneCartitems, setEarphoneCartitems } = useGlobalcontext4();
  const { Cartitems, setCartitems } = useGlobalcontext5();
  const product = data.find((product) => product.id == id);
  const [ItemsQuantity, setItemsQuantity] = useState(Quantity);
  let array = [];

  const increament = () => {
    setItemsQuantity(ItemsQuantity + 1);
    let obj = { id: product.id, Quantity: ItemsQuantity + 1 };

    let Earphones_filterd_items = EarphoneCartitems.filter((item) => {
      return item.id != product.id;
    });

    let Headphones_filterd_items = HeadphoneCartitems.filter((item) => {
      return item.id != product.id;
    });

    let Speakers_filterd_items = SpeakersCartitems.filter((item) => {
      return item.id != product.id;
    });

    if (product.id == 1) {
      Earphones_filterd_items.push(obj);
      setEarphoneCartitems(Earphones_filterd_items);
    }

    if (product.id == 6 || product.id == 5) {
      Speakers_filterd_items.push(obj);
      setSpeakersCartitems(Speakers_filterd_items);
      console.log("SpeakersCartitems", SpeakersCartitems);
    }
    if (product.id == 2 || product.id == 3 || product.id == 4) {
      Headphones_filterd_items.push(obj);
      setHeadphoneCartitems(Headphones_filterd_items);
      console.log("SpeakersCartitems", SpeakersCartitems);
    }
  };
  const decrease = () => {
    if (Quantity) {setItemsQuantity(ItemsQuantity - 1);
    let obj = { id: product.id, Quantity: ItemsQuantity - 1 };
    let Earphones_filterd_items = EarphoneCartitems.filter((item) => {
      return item.id != product.id;
    });

    let Headphones_filterd_items = HeadphoneCartitems.filter((item) => {
      return item.id != product.id;
    });

    let Speakers_filterd_items = SpeakersCartitems.filter((item) => {
      return item.id != product.id;
    });

    if (product.id == 1) {
      Earphones_filterd_items.push(obj);
      setEarphoneCartitems(Earphones_filterd_items);
    }

    if (product.id == 6 || product.id == 5) {
      Speakers_filterd_items.push(obj);
      setSpeakersCartitems(Speakers_filterd_items);
      console.log("SpeakersCartitems", SpeakersCartitems);
    }
    if (product.id == 2 || product.id == 3 || product.id == 4) {
      Headphones_filterd_items.push(obj);
      setHeadphoneCartitems(Headphones_filterd_items);
      console.log("SpeakersCartitems", SpeakersCartitems);
    }}
  };
  return (
    <section className="Cartcomponent-container">
      <div className="item">
        <div>
          <img src={product.image.desktop} />
        </div>
        <div className="description">
          <h5>{product.name}</h5>
          <span>$ {product.price}</span>
        </div>
        <div className="Quantity">
          <span onClick={increament} className="positive-sign">
            +
          </span>
          <span className="Quantity-value">{ItemsQuantity}</span>
          <span onClick={decrease} className="negative-sign">
            -
          </span>
        </div>
      </div>
    </section>
  );
};

export default Cartcomponent;
