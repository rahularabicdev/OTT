import axios from "axios";
import Cookies from "js-cookie";

const FetchUserData = async () => {
  const accessToken = Cookies.get("accessToken");
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/profile`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    return null;
  }
};

export default FetchUserData;
