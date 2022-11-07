import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuActions } from "../Redux/menu-slice";
import { userActions } from "../Redux/user-slice";
import { cartActions } from "../Redux/cart-slice";
import { useNavigate } from "react-router-dom";

export const useFetchMenu = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.menu.menuItems);
  const convertToArray = (obj) => {
    const array = [];
    Object.keys(obj).forEach((elem) => {
      array.push(obj[`${elem}`]);
    });

    return array;
  };

  const fetchMenu = (url) => {
    if (menuItems.length < 1) {
      dispatch(menuActions.loadingSwitch(true));
      fetch(url)
        .then((response) => response.json())
        .then((response) =>
          dispatch(menuActions.assignMenuItems(convertToArray(response)))
        )
        .catch((error) => console.log(error))
        .finally(() => dispatch(menuActions.loadingSwitch(false)));
    }
  };
  return fetchMenu;
};

export const useUserRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [idToken, setIdToken] = useState("");
  const addUserToDb = useAddUserToDb();
  const userRegister = (email, password) => {
    dispatch(userActions.registeringSwitch(true));
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOdredUCAcv2Jtvu1rMA3PH3q6L5bJ5rE",
      {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    )
      .then((response) => response.json())
      .then((resp) => {
        if (resp.localId) {
          addUserToDb(resp.localId);
          alert("register successfull");
          navigate("/login");
        } else {
          alert(resp.error.message);
        }
      })
      .then((resp) => {
        console.log(resp);
      })

      .catch((error) => alert(error))
      .finally(() => {
        dispatch(userActions.registeringSwitch(false));
      });
  };

  return { userRegister: userRegister, idToken: idToken };
};
export const useUserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUserInfosFromDb = useGetUserInfosFromDb();

  const userLogin = (email, password) => {
    dispatch(userActions.signingInSwitch(true));

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAOdredUCAcv2Jtvu1rMA3PH3q6L5bJ5rE",
      {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.localId) {
          getUserInfosFromDb(response.localId);
          dispatch(userActions.switchLoginState(true));
          alert("successfully logged in.");
          navigate("/");
        } else {
          alert(response.error.message);
        }
      })
      .catch((error) => alert(error));
  };
  return userLogin;
};

export const useGetUserInfosFromDb = () => {
  const dispatch = useDispatch();

  const getUserInfosFromDb = (id) => {
    fetch(`https://grandma-s-default-rtdb.firebaseio.com/users/${id}.json`)
      .then((resp) => resp.json())
      .then((resp) => {
        dispatch(userActions.assignUserAddress(resp.address));
        dispatch(userActions.assignUserId(id));
        dispatch(cartActions.assignCartItems(resp.cart));
        dispatch(userActions.assignUserOrders(resp.orders));
      });
  };
  return getUserInfosFromDb;
};

export const useAddUserToDb = () => {
  const addUserToDb = (userId) => {
    fetch(
      `https://grandma-s-default-rtdb.firebaseio.com/users/${userId}.json`,
      {
        method: "PUT",
        "Content-Type": "application/json",
        body: JSON.stringify({
          userId: userId,
        }),
      }
    ).then((response) => response.json());
  };
  return addUserToDb;
};

export const usePutRequest = () => {
  const userId = useSelector((state) => state.user.userId);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const updateCart = (data) => {
    fetch(
      `https://grandma-s-default-rtdb.firebaseio.com/users/${userId}/cart.json`,
      {
        method: "PUT",
        "Content-Type": "application/json",
        body: JSON.stringify(data === undefined ? cartItems : data),
      }
    ).then((resp) => resp.json());
  };
  const updateAddress = (address) => {
    fetch(
      `https://grandma-s-default-rtdb.firebaseio.com/users/${userId}/address.json`,
      {
        method: "PUT",
        "Content-Type": "application/json",
        body: JSON.stringify(address),
      }
    )
      .then((resp) => resp.json())
      .then((resp) => console.log(resp));
  };
  return { updateCart: updateCart, updateAddress: updateAddress };
};

export const useChangePassword = () => {
  const dispatch = useDispatch();
  const idToken = useSelector((state) => state.user.userId);
  const navigate = useNavigate();
  const changePassword = (password) => {
    dispatch(userActions.changingPasswordSwitch(true));
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAOdredUCAcv2Jtvu1rMA3PH3q6L5bJ5rE",
      {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify({
          idToken: idToken,
          password: password,
          returnSecureToken: true,
        }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.idToken) {
          alert("Successfully Changed Password.");
          navigate("/");
          window.location.reload();
        } else {
          alert(response.error.message);
        }
      })
      .catch((error) => alert(error))
      .finally(() => {
        dispatch(userActions.changingPasswordSwitch(false));
      });
  };
  return changePassword;
};

export const usePlaceOrder = () => {
  const putRequests = usePutRequest();
  const dispatch = useDispatch();
  const date = new Date();
  const time = date.toUTCString();
  const userId = useSelector((state) => state.user.userId);
  const userAddress = useSelector((state) => state.user.userAddress);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const userOrders = useSelector((state) => state.user.userOrders);
  const placeOrder = () => {
    fetch(
      `https://grandma-s-default-rtdb.firebaseio.com/users/${userId}/orders.json`,
      {
        method: "PUT",
        "Content-Type": "application/json",
        body: JSON.stringify([
          ...userOrders,
          {
            time: time,
            address: userAddress,
            items: cartItems,
          },
        ]),
      }
    ).then(
      putRequests.updateCart([]),
      dispatch(
        userActions.assignUserOrders([
          ...userOrders,
          {
            time: time,
            address: userAddress,
            items: cartItems,
          },
        ])
      )
    );
  };
  return placeOrder;
};

//  {
//       time: "Sun Nov 06 2022",
//       address: {
//         building: "buildingsss",
//         city: "cityasdasd",
//         country: "country asd",
//         pin: "12345",
//         state: "stateasdasd",
//         street: "sssss",
//       },
//       items: [
//         {
//           amount: 1,
//           description: "A delicious cupcake item",
//           img: "/assets/cupcake-1.jpeg",
//           name: "Cupcake Item",
//           price: 5,
//         },
//         {
//           amount: 3,
//           description: "A delicious doughnut item",
//           img: "/assets/doughnut-1.jpeg",
//           name: "Doughnut Item",
//           price: 5,
//         },
//       ],
//     },
