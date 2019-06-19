/* eslint-disable no-plusplus */
let nbr = 1;
const autoSlide = () => {
  nbr = nbr > 5 ? 1 : nbr;
  const next = document.getElementById(`s${nbr}`);
  if (next) {
    next.click();
  }
  nbr++;
};

setInterval(autoSlide, 4000);
