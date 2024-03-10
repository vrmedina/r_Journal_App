import { v2 as cloudinary } from "cloudinary";
import { uploadFile } from "../../../src/journal/helpers/uploadFile";

cloudinary.config({
  cloud_name: "vrmedina-cloud",
  api_key: "342394644777112",
  api_secret: "Bq421tG_9YncJVBO-rgKwPbaWcE",
  secure: true,
});

describe("Pruebas en uploadFile", () => {
  test("debe subir el archivo correctamente a cloudinary", async () => {
    const imgUrl =
      "https://res.cloudinary.com/vrmedina-cloud/image/upload/v1709568398/cld-sample-5.jpg";
    const resp = await fetch(imgUrl);
    const blob = await resp.blob();
    const file = new File([blob], "pato.jpg");
    const url = await uploadFile(file);
    expect(typeof url).toBe("string");

    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");
    await cloudinary.api.delete_resources(["journal-app/" + imageId], {
      resource_type: "image",
    });
  }, 10000);

  test("debe retornar null si hay error", async () => {
    const file = new File([], "pato.jpg");
    const url = await uploadFile(file);
    expect(url).toBe(null);
  }, 10000);
});
