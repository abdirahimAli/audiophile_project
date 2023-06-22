import React from "react";
import data from "../data";
import { useGlobalcontext } from "../components/AppContext";
import CartitemsContext, {
  useGlobalcontext5,
} from "../components/context/CartitemsContext";
import { useState } from "react";
import { useGlobalcontext2 } from "../components/context/HeadphoneContext";
import { useGlobalcontext3 } from "../components/context/SpeakersContext";
import { useGlobalcontext4 } from "../components/context/EarphoneContext";

const Cartcomponent = ({ id, Quantity, setQuantity, setRemoveitem }) => {
  const { catagoreyfilter, setCatagoreyfilter } = useGlobalcontext();
  const { HeadphoneCartitems, setHeadphoneCartitems } = useGlobalcontext2();
  const { SpeakersCartitems, setSpeakersCartitems } = useGlobalcontext3();
  const { EarphoneCartitems, setEarphoneCartitems } = useGlobalcontext4();
  const { Cartitems, setCartitems } = useGlobalcontext5();
  const product = data.find((product) => product.id == id);
  const [ItemsQuantity, setItemsQuantity] = useState(Quantity);
  let array = [];
  let newarray=[];
//  newarray.push(catagoreyfilter); 

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
    if (Quantity) {
      setItemsQuantity(ItemsQuantity - 1);
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
      }
    }
  };

  const Removeitem = () => {
    // setRemoveitem(product.id);
    
    newarray.push(product.id);
    setCatagoreyfilter(newarray);
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
          <span
            style={{ marginLeft: 29 }}
            onClick={decrease}
            className="negative-sign"
          >
            -
          </span>
        </div>
        <span style={{marginLeft:40}} onClick={Removeitem} className="Remove-item">
          Remove item
        </span>
      </div>
    </section>
  );
};

export default Cartcomponent;
