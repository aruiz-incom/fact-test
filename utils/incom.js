const axios = require("axios").default;

export const freight = () => {
  const header = new Headers();
  header.append("Content-Type", "application/json; charset=UTF-8");
  const url = "https://apiweb.incom.mx/api/CalcularFlete/";
  const body = {
    Direccion: {
      Calle: "Plaza aviación",
      Numero: "79",
      CodigoPostal: "15500",
      Colonia_Asentamiento: "Moctezuma 1ra sección",
      Municipio: "Venustiano Carranza",
      Estado: "CDMX",
      Ciudad: "CDMX",
      Pais: "México",
      Referencia: "",
    },
    Productos: [
      {
        ProductoID: 2,
        Numero_Parte: "2170",
        PesoKg: 0.08,
        Largo: 0.23,
        Ancho: 0.0116,
        Alto: 0.173,
        Cantidad: 1.0,
        RotacionVertical: true,
        RotacionHorizontal: true,
      },
    ],
    TipoOperacion: "",
    NumeroOperacion: "aruiz@it4u.com.mx",
    MontoDeclarado: 1000,
  };

  const jsonBody = {
    Direccion: {
      Calle: "JORGE CAMPOS",
      Numero: "212",
      CodigoPostal: "03660",
      Colonia_Asentamiento: "DEPORTIVA 1A SECCION",
      Municipio: "ZINACANTEPEC",
      Estado: "MEX",
      Ciudad: "",
      Pais: "MX",
      Referencia: "",
    },
    Productos: [
      {
        ProductoID: "27112115",
        Numero_Parte: "302",
        PesoKg: "34000",
        Largo: "80000",
        Ancho: "600000",
        Alto: "400000",
        Cantidad: "2.00",
        RotacionVertical: true,
        RotacionHorizontal: true,
      },
    ],
    TipoOperacion: "",
    NumeroOperacion: "2200026094",
    MontoDeclarado: "5000.00",
  };

  const json = {
    Direccion: {
      Calle: "DENTISTAS",
      Numero: "40",
      CodigoPostal: "09400",
      Colonia_Asentamiento: "SIFON",
      Municipio: "IZTAPALAPA",
      Estado: "CMX",
      Ciudad: "",
      Pais: "MX",
      Referencia: "",
    },
    Productos: [
      {
        ProductoID: "43223338",
        Numero_Parte: "2178S",
        PesoKg: "1000.00",
        Largo: "57.00",
        Ancho: "23.00",
        Alto: "16.00",
        Cantidad: "1.00",
        RotacionVertical: false,
        RotacionHorizontal: false,
      },
    ],
    TipoOperacion: "",
    NumeroOperacion: "2200026159",
    MontoDeclarado: "1000.00",
  };

  try {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(json),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

export const token = () => {
  const header = new Headers();
  header.append("Content-Type", "application/json; charset=UTF-8");
  const url = "http://apiweb.incom.mx/api/Login";
  const json = {
    Usuario: "SAPByD",
    Password: "jkjklñSDAJKÑLDsa",
  };
  try {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(json),
      headers: header,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};
