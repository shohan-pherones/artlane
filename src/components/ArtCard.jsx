import { motion } from "framer-motion";
import { getTransition } from "../utils/getTransition";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";

const ArtCard = ({ art, index }) => {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={getTransition(index / 10)}
      className="card w-full bg-base-100 shadow-md"
    >
      <figure className="w-full h-[15rem] overflow-hidden">
        <img
          src={art.image}
          alt={art.title}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{art.title}</h2>
        <p>{art.description.substring(0, 100)}...</p>
        <div className="card-actions items-center">
          <p className="card-title">{formatCurrency(art?.price)}</p>
          <Link to={`/arts/${art.id}`} className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtCard;
