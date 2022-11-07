import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {
  useUserLogin,
  useGetUserInfosFromDb,
  useCheckUserExisting,
  useAddUserToDb,
} from "../Hooks/CustomHooks";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../Redux/user-slice";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOdredUCAcv2Jtvu1rMA3PH3q6L5bJ5rE",
  authDomain: "grandma-s.firebaseapp.com",
  databaseURL: "https://grandma-s-default-rtdb.firebaseio.com",
  projectId: "grandma-s",
  storageBucket: "grandma-s.appspot.com",
  messagingSenderId: "795410424857",
  appId: "1:795410424857:web:42ae4db425ca74d4a0b688",
  measurementId: "G-SZTEG990W3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const useGoogleSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkUserExisting = useCheckUserExisting();
  const getUserInfosFromDb = useGetUserInfosFromDb();
  const addUserToDb = useAddUserToDb();
  const userLogin = useUserLogin();
  const googleSignIn = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const isExisting = await checkUserExisting(user.uid);
      if (!isExisting) {
        await addUserToDb(user.uid);
      }
      //login user

      getUserInfosFromDb(user.uid);
      dispatch(userActions.switchLoginState(true));
      alert("successfully logged in.");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  return googleSignIn;
};

export { useGoogleSignIn };
