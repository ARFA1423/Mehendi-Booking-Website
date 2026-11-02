
db.collection('bookings').onSnapshot(s=>{
let html='';
s.forEach(d=>{
const x=d.data();
html+=`<tr><td>${x.name}</td><td>${x.phone}</td><td>${x.date}</td></tr>`;
});
document.getElementById('data').innerHTML=html;
});
