import axios from "axios";

const BASE_URL =
  "https://api.soowgood.com/api/AppointmentSettings/AppointmentListForBooking";
export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
