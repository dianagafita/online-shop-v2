// // CartModal.js
// import React from "react";
// import { useCart } from "../hooks/useCart";
// const CartModal = ({ onClose }) => {
//   const { cart, clearCart } = useCart();

//   return (
//     <div>
//       {/* Your modal content */}
//       <h2>Cart Contents</h2>
//       <ul>
//         {cart.items.map((item) => (
//           <li key={item.prod.id}>
//             {item.prod.name} - Quantity: {item.quantity}
//           </li>
//         ))}
//       </ul>
//       <p>Total Price: {cart.totalPrice}</p>

//       <button onClick={clearCart}>Clear Cart</button>
//       <button onClick={onClose}>Close</button>
//     </div>
//   );
// };

// export default CartModal;
// import React from "react";
// import Modal from "antd/lib/modal/Modal";
// import { List, Avatar } from "antd";

// const CartModal = ({ show, handleClose, cart }) => {
//   return (
//     <Modal
//       title="Cart"
//       visible={show}
//       onCancel={handleClose}
//       footer={null}
//       width={600}
//     >
//       <List
//         itemLayout="horizontal"
//         dataSource={cart.items}
//         renderItem={(item) => (
//           <List.Item>
//             <List.Item.Meta
//               avatar={<Avatar src={item.prod.img} />}
//               title={<a href={`/products/${item.prod.id}`}>{item.prod.name}</a>}
//               description={`Quantity: ${item.quantity}`}
//             />
//             <div>Price: {item.price}</div>
//           </List.Item>
//         )}
//       />
//       <div>Total Items: {cart.totalCount}</div>
//       <div>Total Price: {cart.totalPrice}</div>
//     </Modal>
//   );
// };

// export default CartModal;
// import React from "react";
// import { List, Avatar } from "antd";
// import styles from "./CartModal.module.css";

// const CartModal = ({ show, handleClose, cart }) => {
//   return (
//     <div className={`${styles.modal} ${show ? styles.showModal : ""}`}>
//       <div className={styles.modalContent}>
//         <button className={styles.closeBtn} onClick={handleClose}>
//           Close
//         </button>
//         <List
//           itemLayout="horizontal"
//           dataSource={cart.items}
//           renderItem={(item) => (
//             <List.Item>
//               <List.Item.Meta
//                 avatar={<Avatar src={item.prod.img} />}
//                 title={
//                   <a href={`/products/${item.prod.id}`}>{item.prod.name}</a>
//                 }
//                 description={`Quantity: ${item.quantity}`}
//               />
//               <div>Price: {item.price}</div>
//             </List.Item>
//           )}
//         />
//         <div>Total Items: {cart.totalCount}</div>
//         <div>Total Price: {cart.totalPrice}</div>
//       </div>
//     </div>
//   );
// };

// export default CartModal;
import React from "react";
import { List, Avatar } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./CartModal.module.css";
import { motion } from "framer-motion";
import Price from "./Price/Price";

const CartModal = ({ show, handleClose, cart }) => {
  const navigate = useNavigate();

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const goToCartPage = () => {
    handleClose();
    navigate("/cart"); // Replace with your cart page path
  };

  return (
    <motion.div
      className={`${styles.modal} ${show ? styles.showModal : ""}`}
      onClick={handleOutsideClick}
      initial={{ x: 10 }}
      animate={{ x: show ? 0 : 10 }}
      transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
    >
      <motion.div className={styles.modalContent}>
        <List
          itemLayout="horizontal"
          dataSource={cart.items}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.prod.img} className={styles.img} />}
                title={
                  <a href={`/products/${item.prod.id}`}>{item.prod.name}</a>
                }
                description={`Quantity: ${item.quantity}`}
              />
              <Price price={item.price}>{item.price}</Price>
            </List.Item>
          )}
        />
        <div className={styles.items}>Items: {cart.totalCount}</div>
        <div className={styles.price}>
          <Price className={styles.price} price={cart.totalPrice}>
            {cart.totalPrice}
          </Price>
        </div>
        <button className={styles.cartPageBtn} onClick={goToCartPage}>
          Go to Cart
        </button>
      </motion.div>
    </motion.div>
  );
};

export default CartModal;
