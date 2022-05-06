import axios from "axios";
import { useSelector } from "react-redux";

import { transfersActions } from "../slices/transfers.slice";

const API_URL = "";

export const getUsersTransfers = (userId) => {
  return async (dispatch) => {
    try {
      // API REQUEST
      const res = await axios.get(
        `http://localhost:5000/api/v1/users/${userId}/history`
      );
      const transfers = res.data;
      console.log(transfers);
      dispatch(transfersActions.getTransfers(transfers));
    } catch (error) {
      console.log(error);
    }
  };
};

export const newTransfer = (amount, senderUserId, reciverUserId) => {
  return async (dispatch) => {
    try {
      // API REQUEST

      const transferData = {
        amountToTransfer: Number(amount),
        senderUserId,
        reciverUserId,
      };
      const res = await axios.post(
        `http://localhost:5000/api/v1/transfer`,
        transferData
      );
      const transferSucces = res.data;

      dispatch(transfersActions.newTransfer(transferSucces));
    } catch (error) {
      console.log(error);
    }
  };
};
