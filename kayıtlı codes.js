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
/* Backend Search ıcın  */
// const cars = req.query;
// const fuzzySearch = (cars) => {
//   const fuzzySearchFilter = {};
//   Object.keys(cars).forEach((key) => {
//     fuzzySearchFilter[key] = { $regex: cars[key], $options: "i" }; // 'i' for case-insensitive matching
//   });
//   return fuzzySearchFilter;
// };
// const filter = fuzzySearch(cars);
// const results = await Car.find(filter);

/*import { useQuery, useMutation } from "@tanstack/react-query";
import { createItem, getItems } from "../api/deneme/route";

const Page = () => {
  const denemeQuery = useQuery({
    queryKey: ["items"],
    queryFn: () => getItems(),
  });

  const denemeMutation = useMutation({
    mutationFn: (data) => createItem(data),
    onSuccess: (data) => console.log("success", data),
    onError: (data) => console.log("err", data),
  });

  return (
    <div>
      <button
        onClick={() =>
          denemeMutation.mutate({
            name: "deneme",
            data: {
              year: 2019,
              price: 1849.99,
              "CPU model": "Intel Core i9",
              "Hard disk size": "1 TB",
            },
          })
        }
      >
        create
      </button>
      <pre>
        <code>{JSON.stringify(denemeQuery.data, null, 2)}</code>
      </pre>
    </div>
  );
};

export default Page;
*/
