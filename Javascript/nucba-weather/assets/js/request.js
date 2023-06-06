const KEY = '28fab2e3924177f022b38dfd79d38c19';

const requestCity = async city => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&APPID=${KEY}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
