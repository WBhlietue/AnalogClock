const main = document.getElementById("main");

const config = {
    mainColor:"#ffffff",
    activeColor:"#ffff00"
}

class Ring {
    CreateRing(size, elements) {
      let list = [];
      function Elem(value, rot) {
        const elem = document.createElement("div");
        elem.className = "ringElem";
        elem.style.transform = `translate(-50%, -50%)  rotateZ(${rot}deg)`;
        elem.innerHTML = value;
        return elem;
      }
      const elem = document.createElement("div");
      elem.className = "ring";
      elem.style.width = size + "px";
      elem.style.height = size + "px";
      for (let i = 0; i < elements.length; i++) {
        const child = Elem(elements[i], ((i + 1) / elements.length) * 360);
        list.push(child);
        elem.appendChild(child);
      }
      this.list = list;
      this.elem = elem;
    }
    Active(num, total){
        this.list.map((i) => {
            i.style.color = "#ffffff"
        })
        this.list[total-num-1].style.color = "#ffff00"

    }
  }
  

function GetList(num, o) {
  list = [];
  for (let i = num - 1; i >= 0; i--) {
    list.push(i+o);
  }
  return list;
}


const date = new Date();
const year = document.createElement("div");
year.className = "centerElement";
year.innerHTML = date.getFullYear();

const second = new Ring();
const minut = new Ring();
const hour = new Ring();
const day = new Ring();
const month = new Ring();
second.CreateRing(750, GetList(60, 0));
minut.CreateRing(640, GetList(60, 0));
hour.CreateRing(530, GetList(24, 0));
day.CreateRing(420, GetList(new Date(date.getFullYear(), date.getMonth(), 0).getDate(), 1));
month.CreateRing(
  310,
  [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ].reverse()
);


main.appendChild(second.elem);
main.appendChild(minut.elem);
main.appendChild(hour.elem);
main.appendChild(day.elem);
main.appendChild(month.elem);



function SetTime() {
  const date = new Date();
  const s = date.getSeconds();
  const m = date.getMinutes();
  const h = date.getHours();
  const d = date.getDate();
  const mo = date.getMonth();
  second.elem.style.transform = `rotate(${(s / 60) * 360}deg)`;
  minut.elem.style.transform = `rotate(${(m / 60) * 360}deg)`;
  hour.elem.style.transform = `rotate(${(h / 24) * 360}deg)`;
  day.elem.style.transform = `rotate(${((d-1) / new Date(date.getFullYear(), date.getMonth(), 0).getDate()) * 360}deg)`;
  month.elem.style.transform = `rotate(${(mo / 12) * 360}deg)`;
  second.Active(s, 60);
  minut.Active(m, 60);
  hour.Active(h, 24);
  day.Active(d-1, new Date(date.getFullYear(), date.getMonth(), 0).getDate());
  month.Active(mo, 12);
}

SetTime();
setInterval(() => {
  SetTime();
}, 1000);

main.appendChild(year);
