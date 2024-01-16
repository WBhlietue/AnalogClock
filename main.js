const main = document.getElementById("main");


function CreateRing(size, elements) {
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
        const child = Elem(elements[i], ((i+1) / elements.length) * 360);
        elem.appendChild(child);
    }
    return elem;
}

function GetList(num) {
    list = [];
    for (let i = num-1; i >= 0; i--) {
        list.push(i);
    }
    return list;
}

const second = CreateRing(750, GetList(60));
const minut = CreateRing(640, GetList(60));
const hour = CreateRing(530, GetList(24));
const day = CreateRing(420, GetList(30));
const month = CreateRing(310, ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].reverse());

main.appendChild(second);
main.appendChild(minut);
main.appendChild(hour);
main.appendChild(day);
main.appendChild(month);

const date = new Date();
const year = document.createElement("div");
year.className = "centerElement";
year.innerHTML = date.getFullYear();

function SetTime() {
    const date = new Date();
    const s = date.getSeconds();
    const m = date.getMinutes();
    const h = date.getHours();
    const d = date.getDate();
    const mo = date.getMonth();
    second.style.transform = `rotate(${s/60*360}deg)`
    minut.style.transform = `rotate(${m/60*360}deg)`
    hour.style.transform = `rotate(${h/24*360}deg)`
    day.style.transform = `rotate(${d/30*360}deg)`
    month.style.transform = `rotate(${mo/12*360}deg)`
}

SetTime();
setInterval(()=>{
    SetTime();
}, 1000)

main.appendChild(year);
