let idx = Math.floor(new Date().getHours());
const body = document.getElementsByTagName("body")[0];
body.className = "heaven-" + idx;

setInterval(() => {
  if (idx < 23) {
    idx++;
  }
  else {
    idx = 0;
  }
  body.className = "heaven-" + idx;
}, 1000)