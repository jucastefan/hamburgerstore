import { createContext, useEffect, useReducer, useContext } from "react";

const Cart = createContext();

const cartReducer = (state, action) => {
  console.log(state)
  if (action.type === "HAMBURGERS_DATA") {
    return { ...state, hamburgers: action.payload };
  }

  if (action.type === "DRINKS_DATA") {
    return { ...state, drinks: action.payload };
  }

  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cart: [
        ...state.cart,
        {
          ...action.payload,
          qty: 1,
        },
      ],
    };
  }

  if (action.type === "CHANGE_CART_QTY") {
    return {
      ...state,
      cart: state.cart.filter((e) =>
        e.id === action.payload.id ? (e.qty = action.payload.qty) : e.qty
      ),
    };
  }

  if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cart: state.cart.filter((e) => e.id !== action.payload.id),
    };
  }

  return state;
};

const Context = (props) => {
  const initialState = JSON.parse(localStorage.getItem("products")) || [];
  const [state, dispatch] = useReducer(cartReducer, {
    hamburgers: [],
    drinks: [],
    cart: initialState,
  });

  useEffect(() => {
    const fetchedHamburgers = async () => {
      const response = await fetch(
        "https://hamburgerstore-21072-default-rtdb.europe-west1.firebasedatabase.app/hamburgers.json"
      );
      const data = await response.json();

      const hamburgersList = [];
      for (const key in data) {
        hamburgersList.push({
          id: data[key].id,
          name: data[key].title,
          image: data[key].img,
          price: data[key].price,
        });
      }

      dispatch({ type: "HAMBURGERS_DATA", payload: hamburgersList });
    };

    fetchedHamburgers();
  }, []);

  useEffect(() => {
    const fetchedDrinks = async () => {
      const response = await fetch(
        "https://hamburgerstore-21072-default-rtdb.europe-west1.firebasedatabase.app/drinks.json"
      );
      const data = await response.json();

      const drinksList = [];
      for (const key in data) {
        drinksList.push({
          id: data[key].id,
          name: data[key].title,
          image: data[key].img,
          price: data[key].price,
        });
      }

      console.log(drinksList);
      dispatch({ type: "DRINKS_DATA", payload: drinksList });
    };

    fetchedDrinks();
  }, []);

  return (
    <Cart.Provider value={{ state, dispatch }}>{props.children}</Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
