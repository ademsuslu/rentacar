import { useQuery, useMutation } from "@tanstack/react-query";
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
