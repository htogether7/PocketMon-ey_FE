import { userServiceAxiosInstance } from '../axios';

export const putPrimeRate = async (inputValue: number) => {
  const { data } = await userServiceAxiosInstance.put(`/user/PIR`, {
    id: 1,
    interestRate: inputValue,
  });
  return data;
};

export const fetchPrimeRate = () => userServiceAxiosInstance.get(`/user/PIR/2`);
