const { encode } = require("base-64");

export default function handler(req, res) {
  const uname = "incom2021";
  const pword = "Pruebas00";
  const url = "https://apisandbox.facturama.mx/client";
  const headers = new Headers();
  headers.set("Authorization", "Basic " + encode(uname + ":" + pword));
  try {
    fetch(url, {
      method: "GET",
      headers: headers,
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        res.send(JSON.stringify(data));
      });
  } catch (err) {
    console.log(err);
  }
}
