import classes from "./Thumbnails.module.css";
import { Link } from "react-router-dom";
import React from "react";
import Price from "../Price/Price";

export default function Thumbnails({ products }) {
  return (
    <>
      <ul className={classes.display}>
        {products.map((prod) => (
          <li key={prod.id} className={classes.container}>
            <Link to={`/products/${prod.id}`}>
              <img className={classes.prodImg} src={prod.img} alt={prod.name} />
              <div className={classes.content}>
                <div className={classes.name}>{prod.name}</div>
                <div>
                  <div className={classes.memory}>{prod.memory}</div>
                </div>
                <span className={classes.colour}>
                  <span>Color: </span>
                  {prod.colour}
                </span>

                <div className={classes.price}>
                  <Price price={prod.price} />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
