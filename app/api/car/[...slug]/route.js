import Car from "@/app/model/CarModel";
import dbConnect from "@/app/util/dbConnet";

//delete
export async function DELETE(request, { params }) {
  await dbConnect();
  try {
    const { slug } = params;
    if (!params || !params.slug) {
      throw new Error("Slug parametresi tanımsız.");
    }

    const deleteCar = await Car.findByIdAndDelete(slug);
    if (!deleteCar) {
      throw new Error("Delete Car is not defined!");
    }

    return Response.json(deleteCar, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type: Authorization",
      },
    });
  } catch (err) {
    console.error(err);
    return Response.json("Post silme başarısız oldu!", {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type: Authorization",
      },
    });
  }
}

//Update
export async function PUT(request, { params }) {
  await dbConnect();
  const res = await request.json();

  const { slug } = params;
  console.log(typeof slug);
  if (!params || !params.slug) {
    throw new Error("Slug parametresi tanımsız.");
  }

  try {
    const updateCar = await Car.findOneAndUpdate(res);
    console.log("updateCar");
    console.log(updateCar);
    if (!updateCar) {
      throw new Error("Updated Car is not defined!");
    }
    return Response(updateCar, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.error(error);
    return Response("Ürün güncellenirken bir hata oluştu.", {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }
}

export async function GET(request, { params }) {
  await dbConnect();
  const id = params?.slug[0];

  const car = await Car.findById(id);

  if (!car) {
    throw new Error("Car is not defined");
  }
  const data = JSON.stringify(car);
  return new Response(data);
}
