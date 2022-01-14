import axios from "axios";

const geocodingUrl = "map-geocode/v2/geocode";

export async function geocoding(query: string) {
  try {
    const data = await axios.get(`${geocodingUrl}?query=${query}`, {
      headers: {
        "X-NCP-APIGW-API-KEY-ID": `${process.env.REACT_APP_NCP_CLIENT_ID}`,
        "X-NCP-APIGW-API-KEY": `${process.env.REACT_APP_NCP_CLIENT_SECRET}`,
      },
    });

    console.log(data);

    return data.data;
  } catch (e) {
    console.log(e);
  }
}
