let nbr = 1;
const autoSlide = () => {
  nbr = nbr > 5 ? 1 : nbr;
  const next = document.getElementById(`s${nbr}`);
  if (next) {
    next.click();
  }
  nbr += 1;
};

setInterval(autoSlide, 4000);
