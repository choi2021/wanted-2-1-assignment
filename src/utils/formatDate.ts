const formatDate = (date: Date) => {
  const targetDate = new Date(date);
  const formattedDate = targetDate.toLocaleDateString('ko', {
    day: 'numeric',
    month: 'long',
    weekday: 'short',
  });
  return formattedDate;
};

export default formatDate;
