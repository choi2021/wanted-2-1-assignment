const getCars = async () => {
  const response = await fetch('https://preonboarding.platdev.net/api/cars');
  console.log(response);
};

export default getCars;
