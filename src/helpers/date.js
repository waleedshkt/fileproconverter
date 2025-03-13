import dayjs from "dayjs";

export const getFormattedDate = (timestamp, format) => dayjs.unix(timestamp).format(format);

export const getFutureFormattedDate = (timestamp, aheadCount, aheadScale, format) => dayjs.unix(timestamp).add(aheadCount, aheadScale).format(format);