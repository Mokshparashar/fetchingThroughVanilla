// let url = "https://course-api.com/react-store-products";
// let body = document.getElementsByTagName("body")[0];
// async function fetchData() {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
//   data.forEach((item) => {
//     const photo = document.createElement("img");
//     document.body.appendChild(photo);

//     console.log(item);

//     const src = photo.setAttribute("src", item.image);
//   });
// }
// fetchData();

let url = "https://course-api.com/react-store-products";
let body = document.getElementsByTagName("body")[0];
async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  data.forEach((item) => {
    body.innerHTML = body.innerHTML + `<img src=${item.image} alt="" />`;
  });
}
fetchData();
