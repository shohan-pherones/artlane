import { useSelector } from "react-redux";
import SectionTitle from "../components/SectionTitle";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatCurrency } from "../utils/formatCurrency";
import { VATRATE } from "../constants/constants";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(10);
  const [vat, setVat] = useState(0);

  useEffect(() => {
    const calcTotal = items.reduce(
      (sum, item) => (sum = sum + item.price * item.quantity),
      0
    );

    setTotal(calcTotal);
  }, [items]);

  useEffect(() => {
    if (total >= 1000) {
      setShipping(15);
    }
  }, [total]);

  useEffect(() => {
    const calcVat = total * VATRATE;

    setVat(calcVat);
  }, [total]);

  return (
    <main className="mt-16">
      <section className="wrapper section-padding min-h-screen">
        {items.length === 0 && (
          <div className="flex flex-col justify-center items-center gap-5">
            <h2 className="text-4xl font-medium">You're cart is empty!</h2>
            <Link to="/arts" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        )}

        {items.length > 0 && (
          <>
            <SectionTitle
              subtitle="Cart"
              title={`You've added ${items.length} item${
                items.length > 1 ? "s" : ""
              }`}
            />

            <div className="grid grid-cols-2 gap-20">
              {/* CART ITEMS */}
              <div className="flex flex-col gap-10">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              {/* CART SUMMARY */}
              <div>
                <h3 className="text-2xl">Cart Summary</h3>

                <div className="mt-5">
                  <p className="flex justify-between text-xl">
                    Total: <span>{formatCurrency(total)}</span>
                  </p>
                  <p className="flex justify-between text-xl">
                    Shipping: <span>{formatCurrency(shipping)}</span>
                  </p>
                  <p className="flex justify-between text-xl">
                    VAT: <span>{formatCurrency(vat)}</span>
                  </p>
                  <hr className="my-2" />
                  <p className="flex justify-between text-3xl">
                    Subtotal:{" "}
                    <span>{formatCurrency(total + shipping + vat)}</span>
                  </p>
                </div>

                <div className="mt-5 flex flex-col items-end">
                  <Link to="/checkout" className="btn btn-secondary">
                    Proceed to Checkpoint
                  </Link>
                  <p className="mt-2 opacity-60">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Suscipit, corrupti.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default CartPage;
