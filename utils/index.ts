import dayjs from "dayjs";

const formatDate = (dateString: string) => {
  return dayjs(dateString).format("YYYY.MM.DD");
};

const utils = {
  formatDate,
};
export default utils;
