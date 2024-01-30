//   iki arasını hesaplayan code
//   const calculateTotal = (formData) => {
//   const { koltuk, sigorta, car } = formData;
//   const aTarihi = new Date(formData.aTarihi);
//   const vTarihi = new Date(formData.vTarihi);
//   const carInfo = formData.car.split(",");
//   const carId = carInfo[0];
//   const carPrice = parseInt(carInfo[1]);

//   const dateDiff = (date1, date2) => {
//     const diff = new Date(date2).getTime() - new Date(date1).getTime();
//     return Math.ceil(diff / (1000 * 60 * 60 * 24));
//   };

//   const cars = a.find((item) => item._id === carId);
//   console.log(cars);
//   const gun = dateDiff(aTarihi, vTarihi);
//   const koltukUcreti = koltuk ? 10 : 0;
//   const sigortaUcreti = sigorta ? 100 : 0;

//   const toplamUcret = gun * carPrice + koltukUcreti + sigortaUcreti;
//   return { toplamUcret, gun };
// };
