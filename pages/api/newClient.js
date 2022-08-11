const retrieve = require("./facturama.api");

export default function handler(req, res) {
  const email = req.body.email;
  const newClient = {
    Email: email,
    Address: {
      Street: "Av Seguridad SoC",
      ExteriorNumber: "123",
      InteriorNumber: "",
      Neighborhood: "Fidel Velázquez",
      ZipCode: "78436",
      Locality: "",
      Municipality: "Soledad de Graciano Sánchez",
      State: "San Luis Potosí",
      Country: "Mex",
    },
    RFC: "ROAM861021459",
    Name: "Manuel Romero Alva",
    CfdiUse: "P01",
  };
  console.log(retrieve);

  // Facturama.Clients.Create(newClient, (result) => {
  //   client = result;
  //   console.log("Creación: " + result);
  // });
}
