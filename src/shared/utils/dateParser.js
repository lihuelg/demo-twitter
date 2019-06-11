import dateFormat from 'dateformat';

export const postDateFromTimestamp = timestamp => dateFormat(timestamp.toDate(), 'dd/mm/yy hh:MM');