import axiosInstance from "./axios";

export const createOrder = async (amount) => {
  const { data } = await axiosInstance.post("/payment/create-order", { amount });
  return data;
};

export const verifyPayment = async (paymentData) => {
  const { data } = await axiosInstance.post("/payment/verify", paymentData);
  return data;
};
