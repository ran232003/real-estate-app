export const apiCall = async (method, url, payload) => {
  console.log(method, url, payload);
  let data, response;
  try {
    switch (method) {
      case "GET":
        console.log(url, payload);
        response = await fetch(url, {
          credentials: "include",
        });
        break;
      case "POST":
        console.log(url, payload, method);

        response = await fetch(url, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        break;
      case "DELETE":
        response = await fetch(url, {
          method: "delete",
          credentials: "include",
        });
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      case "FORM_DATA":
        const formData = new FormData();

        for (const property in payload) {
          if (Array.isArray(payload[property])) {
            payload[property].forEach((file, i) => {
              formData.append("files", file);
            });
          } else {
            console.log(`${property}: ${payload[property]}`);
            formData.append([property], payload[property]);
          }
        }
        console.log(payload.file);
        // formData.append("file", payload.file);

        // formData.append("file2", "test");
        console.log(formData);
        response = await fetch(url, {
          method: "POST",
          headers: {
            // Note: You may not need to set "Content-Type" manually when using FormData
            // "Content-Type": "multipart/form-data",
          },
          body: formData,
        });
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      case "PATCH":
        response = await fetch(url, {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      default:
        console.log(`Sorry, we are out of.`);
    }
    data = await response.json();
    console.log(data);
    return data;
  } catch (error) {}
};
