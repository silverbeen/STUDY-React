import axios from "axios";

export const test = async () => {
  try {
    const data = await axios(
      "https://map.naver.com/v5/api/search?caller=pcweb&query=%ED%8B%B0%EB%9E%A9%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4&type=all&searchCoord=127.0193027000005;37.500352999999876&page=1&displayCount=20&isPlaceRecommendationReplace=true&lang=ko"
    );

    return data.data.result.place.list;
  } catch (e) {
    console.log(e);
  }
};
