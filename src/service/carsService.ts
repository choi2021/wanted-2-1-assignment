const getCars = async () => {
  const response = await fetch('https://preonboarding.platdev.net/api/cars');
  const data = response.json();
};

export default getCars;
