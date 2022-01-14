import axios from "axios";

export const MapSearchApi = async () => {
  try {
    const data = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/local.json",
      {
        params: {
          query: "티랩스튜디오",
          display: 100,
        },
        headers: {
          "X-Naver-Client-Id": `${process.env.REACT_APP_NAVER_CLIENT_ID}`,
          "X-Naver-Client-Secret": `${process.env.REACT_APP_NAVER_CLIENT_SECRET}`,
        },
      }
    );

    console.log(data);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
