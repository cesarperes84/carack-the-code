// import axios from 'axios';

/* export const getCode =  () => // responseLoadData;
   axios.get(`${process.env.NEXT_PUBLIC_API_URL}/codly`); */

import formatDate from "../utility/formatDate";
export const getCode = async () => {
  await new Promise((r) => setTimeout(r, 200));
  const today = formatDate({ date: Date.now(), formatString: "yyyy-MM-dd" });
  const digit1 = parseInt(today.split("-")[2][1], 10);
  const digit2 = parseInt(today.split("-")[1][1], 10);
  const digit3 = parseInt(today.split("-")[2][0], 10);
  const code = `${digit1}${digit2}${digit3}`;

  return {
    data:
      { code, date: today },
  };
};
