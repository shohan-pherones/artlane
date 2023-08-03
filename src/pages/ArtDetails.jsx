import { useCallback, useEffect, useState } from "react";
import { data } from "../data/artsData";
import { useParams } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { formatCurrency } from "../utils/formatCurrency";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { motion } from "framer-motion";
import { getTransition } from "../utils/getTransition";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "rgb(16, 218, 184)",
  inactiveFillColor: "rgba(16, 218, 184, 0.3)",
};

const ArtDetails = () => {
  const [art, setArt] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const singleArt = data.find((art) => art.id === +id);
      singleArt && setArt(singleArt);
      return;
    }
    return;
  }, [id, data]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...art, quantity }));
    navigate("/cart");
  };

  const handleIncrease = useCallback(() => {
    if (quantity >= 20) {
      return null;
    }

    setQuantity((prev) => prev + 1);
  }, [quantity]);

  const handleDecrease = useCallback(() => {
    if (quantity === 1) {
      return null;
    }

    setQuantity((prev) => prev - 1);
  }, [quantity]);

  return (
    <main className="mt-16">
      <section className="wrapper section-padding min-h-screen">
        <SectionTitle subtitle="Art Details" title="Details about art" />

        {art && (
          <div className="grid grid-cols-2 gap-20">
            {/* LEFT */}
            <div className="w-full h-[60vh] overflow-hidden">
              <motion.img
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={getTransition()}
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* RIGHT */}
            <div className="w-full h-[60vh] overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                transition={getTransition()}
                className="flex flex-col gap-2"
              >
                <h2 className="text-4xl">{art.title}</h2>
                <div className="flex gap-5 items-center">
                  <p className="uppercase font-bold text-violet-500">
                    {art.category}
                  </p>
                  <Rating
                    value={art.rating}
                    readOnly
                    style={{ maxWidth: 100 }}
                    itemStyles={myStyles}
                  />
                </div>
                <div className="flex gap-5 items-center mb-5">
                  <p className="text-4xl w-[10rem]">
                    {formatCurrency(art.price * quantity)}
                  </p>
                  {/* COUNTER */}
                  <div className="grid grid-cols-3 w-[10rem] border border-black/25 rounded-md text-xl h-[3rem]">
                    <div
                      onClick={handleDecrease}
                      className="w-full h-full flex items-center justify-center bg-rose-300/25 hover:bg-rose-300/50 duration-300 cursor-pointer select-none"
                    >
                      -
                    </div>
                    <div className="w-full h-full flex items-center justify-center">
                      {quantity}
                    </div>
                    <div
                      onClick={handleIncrease}
                      className="w-full h-full flex items-center justify-center bg-rose-300/25 hover:bg-rose-300/50 duration-300 cursor-pointer select-none"
                    >
                      +
                    </div>
                  </div>
                </div>
                <button onClick={handleAddToCart} className="btn btn-secondary">
                  Add to cart
                </button>
                <div className="mt-5">
                  <h3 className="uppercase font-bold mb-2">Art Description</h3>
                  <p>{art.description}</p>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default ArtDetails;
