import React, { useState, useRef } from "react";
import LocationBoxCSS from "./LocationBox.module.css";
import { usePutRequest } from "../../../Hooks/CustomHooks";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../../Redux/user-slice";
function LocationBox() {
  const styled = LocationBoxCSS;
  const dispatch = useDispatch();

  const buildingRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const countryRef = useRef();
  const pinRef = useRef();
  const putRequests = usePutRequest();

  const userAddress = useSelector((state) => state.user.userAddress);

  const [isAddressScreen, setAddressScreen] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      building: `${buildingRef.current.value}`,
      street: `${streetRef.current.value}`,
      city: `${cityRef.current.value}`,
      state: `${stateRef.current.value}`,
      country: `${countryRef.current.value}`,
      pin: `${pinRef.current.value}`,
    };
    putRequests.updateAddress(obj);
    dispatch(userActions.assignUserAddress(obj));
    setAddressScreen(false);
  };

  if (isAddressScreen) {
    return (
      <div className={styled.AddressScreenContainer}>
        <form onSubmit={submitHandler} className={styled.form}>
          <input
            defaultValue={userAddress && userAddress.building}
            ref={buildingRef}
            required
            placeholder="Building Number"
            type="text"
          />
          <input
            defaultValue={userAddress && userAddress.street}
            ref={streetRef}
            required
            placeholder="Street Name"
            type="text"
          />
          <input
            defaultValue={userAddress && userAddress.city}
            ref={cityRef}
            required
            placeholder="City"
            type="text"
          />
          <input
            defaultValue={userAddress && userAddress.state}
            ref={stateRef}
            required
            placeholder="State"
            type="text"
          />
          <input
            defaultValue={userAddress && userAddress.country}
            ref={countryRef}
            required
            placeholder="Country"
            type="text"
          />
          <input
            defaultValue={userAddress && userAddress.pin}
            ref={pinRef}
            required
            placeholder="Postal Code"
            type="number"
          />
          <div className={styled.buttons}>
            <button
              onClick={() => {
                setAddressScreen(false);
              }}
              className={styled.cancelButton}
            >
              Cancel
            </button>
            <button type="submit" className={styled.updateButton}>
              Update
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className={styled.LocationBoxContainer}>
        {!userAddress && (
          <div className={styled.errorBox}>
            <p>No Address Found</p>
          </div>
        )}
        {userAddress && (
          <div className={styled.addressBox}>
            <h3 className={styled.title}>Address:</h3>
            <p>
              {userAddress.building}, {userAddress.street}
            </p>
            <p>
              {userAddress.city}, {userAddress.state}, {userAddress.country}
            </p>
            <p>
              <strong>POSTAL CODE:</strong> {userAddress.pin}
            </p>
          </div>
        )}

        <button
          onClick={() => {
            setAddressScreen(true);
          }}
          className={styled.addAddressButton}
        >
          {userAddress ? "Update Address" : "Add Address"}
        </button>
      </div>
    );
  }
}

export default LocationBox;
