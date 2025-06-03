import Button from "../../../components/Button/Button";
import {
  decreaseCartItem,
  deleteCartItem,
  increaseCartItem,
} from "../../../store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import styles from "./CartBanner.module.scss";

function CartBanner() {
  const { cart } = useAppSelector((state) => state.cart);

  const totalPrice = cart.reduce((acc, el) => acc + el.price * el.count, 0);

  const dispatch = useAppDispatch();

  const deleteItem = (id: number) => {
    dispatch(deleteCartItem(id));
  };

  const increaseItem = (id: number) => {
    dispatch(increaseCartItem(id));
  };

  const decreaseItem = (id: number) => {
    dispatch(decreaseCartItem(id));
  };

  return (
    <div className={styles.banner}>
      <div style={{ height: "100%" }}>
        <h3>Your cart</h3>
        {!!cart.length ? (
          <div className={styles.col}>
            {cart.map(({ title, price, count, category, images, id }) => (
              <div key={id} className={styles.item}>
                <div className={styles.info}>
                  <img src={images[0]} alt="" />
                  <div>
                    <p className={styles.title} title={title}>
                      {title}
                    </p>
                    <p className={styles.category}>{category.name}</p>
                  </div>
                </div>
                <div className={styles.counter}>
                  <span>{price}$</span>
                  <div className={styles.counter__row}>
                    <button onClick={() => decreaseItem(id)}>
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4895 8.3125H3.51055C2.8834 8.3125 2.375 8.84316 2.375 9.5C2.375 10.1568 2.8834 10.6875 3.51055 10.6875H15.4895C16.1166 10.6875 16.625 10.1568 16.625 9.5C16.625 8.84316 16.1166 8.3125 15.4895 8.3125Z"
                          fill="white"
                          fillOpacity="0.5"
                        />
                      </svg>
                    </button>
                    <p>{count}</p>
                    <button onClick={() => increaseItem(id)}>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_103_316)">
                          <path
                            d="M13.125 6.5625H8.4375V1.875C8.4375 1.3575 8.0175 0.9375 7.5 0.9375C6.9825 0.9375 6.5625 1.3575 6.5625 1.875V6.5625H1.875C1.3575 6.5625 0.9375 6.9825 0.9375 7.5C0.9375 8.0175 1.3575 8.4375 1.875 8.4375H6.5625V13.125C6.5625 13.6425 6.9825 14.0625 7.5 14.0625C8.0175 14.0625 8.4375 13.6425 8.4375 13.125V8.4375H13.125C13.6425 8.4375 14.0625 8.0175 14.0625 7.5C14.0625 6.9825 13.6425 6.5625 13.125 6.5625Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_103_316">
                            <rect width="15" height="15" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className={styles.delete}>
                  {price * count}$
                  <button onClick={() => deleteItem(id)}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_103_289)">
                        <path
                          d="M5.65572 6.383C5.75272 6.4805 5.88022 6.529 6.00772 6.529C6.13522 6.529 6.26272 6.4805 6.35972 6.383C6.55422 6.1885 6.55422 5.873 6.35972 5.6785L2.37722 1.692C2.18272 1.4975 1.86772 1.4975 1.67322 1.692C1.47872 1.8865 1.47872 2.202 1.67322 2.3965L5.65572 6.383Z"
                          fill="white"
                          fillOpacity="0.5"
                        />
                        <path
                          d="M8.70342 8.024L14.3259 2.3965C14.5204 2.202 14.5204 1.8865 14.3259 1.692C14.1314 1.4975 13.8164 1.4115 13.6219 1.6065L7.64792 7.5H7.49992V7.6725L1.59992 13.6515C1.40542 13.846 1.44242 14.1615 1.63642 14.356C1.73342 14.4535 1.87942 14.502 2.00692 14.502C2.13442 14.502 2.27092 14.4535 2.36792 14.356L7.99492 8.729L13.6194 14.3565C13.7164 14.454 13.8454 14.5025 13.9724 14.5025C14.0994 14.5025 14.2279 14.454 14.3249 14.3565C14.5194 14.162 14.5199 13.8465 14.3254 13.652L8.70342 8.024Z"
                          fill="white"
                          fillOpacity="0.5"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_103_289">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            Cart is empty
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(2,2)">
                  <path
                    d="M66.3,28.1c-0.8,-1 -2.1,-1.4 -3.3,-0.9l-48,17c-0.7,0.2 -1.2,0.7 -1.6,1.3l-12,20c-0.7,1.1 -0.6,2.5 0.2,3.4c0.7,0.7 1.5,1.1 2.4,1.1c0.3,0 0.7,-0.1 1,-0.2l48,-17c0.7,-0.2 1.2,-0.7 1.6,-1.3l12,-20c0.6,-1 0.5,-2.4 -0.3,-3.4z"
                    fill="#576067"
                  ></path>
                  <path
                    d="M112,47l-48,-17l-48,17v60l48,17l48,-17z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M112,47l-48,-17l-48,17v60l48,17l48,-17zM112,47l-48,-17"
                    fill="#191919"
                  ></path>
                  <path
                    d="M64,127c-0.3,0 -0.7,-0.1 -1,-0.2l-48,-17c-1.2,-0.4 -2,-1.6 -2,-2.8v-60c0,-1.3 0.8,-2.4 2,-2.8l48,-17c1.6,-0.6 3.3,0.3 3.8,1.8c0.6,1.6 -0.3,3.3 -1.8,3.8l-46,16.3v55.8l46,16.3c1.6,0.6 2.4,2.3 1.8,3.8c-0.4,1.2 -1.6,2 -2.8,2z"
                    fill="#576067"
                  ></path>
                  <path
                    d="M112,47l-48,-17M112,47l-48,-17M64,64l-48,-17M124,67l-48,17l-12,-20l48,-17z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M126.6,65.5l-12,-20l-0.1,-0.1c0,-0.1 -0.1,-0.1 -0.1,-0.2v0c0,-0.1 -0.1,-0.1 -0.1,-0.2c0,0 0,0 0,-0.1c-0.1,-0.1 -0.1,-0.1 -0.2,-0.2l-0.1,-0.1l-0.1,-0.1h-0.1l-0.1,-0.1c-0.1,-0.1 -0.2,-0.1 -0.3,-0.1c-0.1,0 -0.1,-0.1 -0.2,-0.1v0v0l-48,-17c-0.2,-0.1 -0.4,-0.1 -0.6,-0.1h-0.1c-0.2,0 -0.4,0 -0.5,0c-0.1,0 -0.1,0 -0.2,0c-0.2,0 -0.4,0.1 -0.6,0.1l-48,17c-1.2,0.4 -2,1.6 -2,2.8v60c0,1.3 0.8,2.4 2,2.8l48,17v0c0.1,0 0.2,0.1 0.3,0.1c0.1,0 0.1,0 0.2,0c0.1,0 0.2,0 0.4,0h0.1c0.2,0 0.3,0 0.5,0h0.1c0.1,0 0.2,-0.1 0.3,-0.1v0l48,-17c1.2,-0.4 2,-1.6 2,-2.8v-33.6l10,-3.5c0.8,-0.3 1.5,-1 1.8,-1.8c0.3,-0.8 0.1,-1.9 -0.3,-2.6zM103,47l-36,12.8v-25.6zM19,51.2l42,14.9v53.6l-42,-14.9zM109,104.9l-42,14.9v-45l6.4,10.7c0.6,1 1.6,1.5 2.6,1.5c0.3,0 0.7,-0.1 1,-0.2l32,-11.3zM77.3,80.4l-8.9,-14.8l42.2,-15l8.9,14.8z"
                    fill="#576067"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        )}
      </div>

      {!!cart.length && (
        <div className={styles.row}>
          <p>
            TOTAL PRICE: <span>{totalPrice}$</span>
          </p>
          <Button>Proceed to checkout</Button>
        </div>
      )}
    </div>
  );
}

export default CartBanner;
