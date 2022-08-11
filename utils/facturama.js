import Swal from "sweetalert2";
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);
const date = dayjs().format("YYYY-MM-DD HH:mm:ss");

// API  by alexrs 🤠

const valuesFacturama = {
  token: "SW5jb20yMDIxOlBydWViYXMwMA==",
  url: "https://apisandbox.facturama.mx/",
};

const Toast = Swal.mixin({
  toast: true,
  position: "top-right",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
});

export const CreateCFDI33 = () => {
  const url = valuesFacturama.url + "2/cfdis";
  const header = new Headers();
  header.set("Authorization", "Basic " + valuesFacturama.token);
  header.append("Content-Type", "application/json");
  const newCFDI = {
    Currency: "MXN",
    ExpeditionPlace: "08710",
    PaymentConditions: "CREDITO A SIETE DIAS",
    Folio: "100",
    CfdiType: "I",
    PaymentForm: "03",
    PaymentMethod: "PUE",
    Date: "2022-03-30T09:51:39",
    Receiver: {
      Rfc: "CACX7605101P8",
      Name: "XOCHILT CASAS CHAVEZ",
      CfdiUse: "P01",
    },
    Items: [
      {
        ProductCode: "10101504",
        IdentificationNumber: "EDL",
        Description: "Estudios de viabilidad",
        Unit: "NO APLICA",
        UnitCode: "MTS",
        UnitPrice: "50.0",
        Quantity: "2.0",
        Subtotal: "100.0",
        Taxes: [
          {
            Total: "16.0",
            Name: "IVA",
            Base: "100.0",
            Rate: "0.16",
            IsRetention: "false",
          },
        ],
        Total: "116.0",
      },
      {
        ProductCode: "10101504",
        IdentificationNumber: "001",
        Description: "Servicio de colocación",
        Unit: "NO APLICA",
        UnitCode: "E49",
        UnitPrice: "100.0",
        Quantity: "15.0",
        Subtotal: "1500.0",
        Discount: "0.0",
        Taxes: [
          {
            Total: "240.0",
            Name: "IVA",
            Base: "1500.0",
            Rate: "0.16",
            IsRetention: "false",
          },
        ],
        Total: "1740.0",
      },
    ],
  };

  const body = {
    Serie: "FC",
    Currency: "MXN",
    ExpeditionPlace: "08710",
    PaymentConditions: "",
    Folio: "530",
    CfdiType: "I",
    NameId: "1",
    PaymentMethod: "PPD",
    PaymentForm: "99",
    Issuer: {
      FiscalRegime: "601",
      Rfc: "ICO190826SB2",
      Name: "I C O METALLISCH S.A. DE C.V. (Sociedad Anónima de Capital Variable)",
    },
    Receiver: {
      Rfc: "POL190620AZ0",
      Name: "POLIMERIKO S.A. DE C.V. (Sociedad Anónima de Capital Variable)",
      CfdiUse: "G01",
    },
    Observations:
      "Pedido SAP: 48554\n  Vendedor: FRANCISCO IGNACIO GARCIA GASTELUM ",
    Items: [
      {
        ProductCode: "73151802",
        IdentificationNumber: "SERCORPETC",
        Description:
          "SERCORPETC - SERVICIO DE CORTE CIRCULAR Y CUADRADO DE PETATILLO",
        Unit: "PIEZA",
        UnitCode: "EA",
        UnitPrice: 1.0,
        Quantity: 1700.0,
        Subtotal: 1700.0,
        Discount: 0.0,
        Taxes: [
          {
            Total: 272,
            Name: "IVA",
            Base: 1700.0,
            Rate: 0.16,
            IsRetention: false,
          },
        ],
        Total: 1972.0, // 1804.38 // I: 1972.0
      },
      {
        ProductCode: "73151802",
        IdentificationNumber: "SERCORPETT",
        Description: "SERCORPETT - SERVICIO DE CORTE DE PETATILLO EN TIRAS",
        Unit: "KILOGRAMO",
        UnitCode: "KGM",
        UnitPrice: 1.4,
        Quantity: 42.39,
        Subtotal: 59.35, // 59.346
        Discount: 0.0, //0.20
        Taxes: [
          {
            Total: 9.5,
            Name: "IVA",
            Base: 59.35,
            Rate: 0.16,
            IsRetention: false,
          },
        ],
        Total: 68.85, // I: 68.85 // 68.65
      },
    ],
  };

  try {
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: header,
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok && response.status === 201) {
          return response.json();
        } else {
          Toast.fire({
            icon: "error",
            title: "Error",
          });
        }
      })
      .then((data) => {
        Toast.fire({
          icon: "success",
          title: "Facturado con éxito",
        });
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

export const CreateCFDI40 = () => {
  const url = valuesFacturama.url + "3/cfdis";
  const header = new Headers();
  header.set("Authorization", "Basic " + valuesFacturama.token);
  header.append("Content-Type", "application/json");

  const jsonBody = {
    Serie: "FC",
    Currency: "USD",
    CurrencyExchangeRate: 19.4953,
    ExpeditionPlace: "08710",
    NameId: "1",
    PaymentConditions: "30 DÍAS DE CRÉDITO",
    Folio: "48167",
    CfdiType: "I",
    PaymentMethod: "PUE",
    PaymentForm: "03",
    Receiver: {
      RFC: "TCI770922C22",
      Name: "CABLEMAS TELECOMUNICACIONES",
      TaxZipCode: "01219",
      FiscalRegime: "601",
      CfdiUse: "G03",
      Address: {
        Street: "AVENIDA JAVIER BARROS SIERRA",
        ExteriorNumber: "540",
        InteriorNumber: "",
        Neighborhood: "LOMAS DE SANTA FE",
        ZipCode: "01219",
        Municipality: "ALVARO OBREGON",
        State: "CMX",
        Country: "MX",
      },
    },
    Observations:
      "Pedido SAP: 47597 Entrega: SC-49529 Vendedor: PAMELA ELIZALDE MELLADO ",
    Items: [
      {
        ProductCode: "39121404",
        Description: "Cierre de empalme en línea con 4 puertos",
        Unit: "Pieza",
        UnitCode: "EA",
        UnitPrice: 157.32, //194.22
        Quantity: 80.0,
        Subtotal: 12585.6, //15537.6
        Discount: 0, //2952.14
        Taxes: [
          {
            Total: 2013.7, //2013.67
            Name: "IVA",
            Base: 12585.6,
            Rate: 0.16,
            IsRetention: false,
          },
        ],
        TaxObject: "02",
        Total: 14599.3, //14599.13
      },
    ],
  };

  try {
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: header,
      body: JSON.stringify(jsonBody),
    })
      .then((response) => {
        if (response.ok && response.status === 201) {
          return response.json();
        } else {
          Toast.fire({
            icon: "error",
            title: "Error",
          });
        }
        return response.json();
      })
      .then((data) => {
        if (data.Id !== undefined) {
          Toast.fire({
            icon: "success",
            title: "Facturado con exito.",
          });
        } else {
          console.log(data);
          Toast.fire({
            icon: "error",
            title: data.Message,
            text: "Revisar la consola para mayor información",
          });
        }
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

export const CreateCFDIWithCP = () => {
  const url = valuesFacturama.url + "2/cfdis";
  const header = new Headers();
  header.set("Authorization", "Basic " + valuesFacturama.token);
  header.append("Content-Type", "application/json");

  const generalJson = {
    CfdiType: "T",
    Receiver: {
      Name: "INSUMOS COMERCIALES DE OCCIDENTE SA DE C",
      CfdiUse: "P01",
      Rfc: "EKU9003173C9",
    },
    NameId: "33",
    ExpeditionPlace: "08710",
    Observations: "INCOM test",
    Items: [
      {
        Quantity: "20",
        ProductCode: "43223338",
        UnitCode: "KT",
        Unit: "KIT",
        Description: "HERRAJE AEREO UNIV P/2178",
        IdentificationNumber: "2183UHB",
        UnitPrice: "0.00",
        Subtotal: "0.00",
        Taxes: null,
        Total: "0.00",
        Discount: null,
      },
    ],
    Complemento: {
      CartaPorte20: {
        TranspInternac: "No",
        Ubicaciones: [
          {
            TipoUbicacion: "Origen",
            RFCRemitenteDestinatario: "ICO990224H93",
            FechaHoraSalidaLlegada: "14/06/2022",
            DistanciaRecorrida: "1",
            Domicilio: {
              Pais: "MEX",
              CodigoPostal: "01219",
              Estado: "DIF",
              Municipio: "010",
              Localidad: "01",
              Colonia: "0084",
              Calle: "AVENIDA JAVIER BARROS SIERRA",
              NumeroExterior: "540",
            },
          },
          {
            TipoUbicacion: "Destino",
            RFCRemitenteDestinatario: "EKU9003173C9",
            FechaHoraSalidaLlegada: "14/06/2022",
            DistanciaRecorrida: "1",
            Domicilio: {
              Pais: "MEX",
              CodigoPostal: "01219",
              Estado: "DIF",
              Municipio: "010",
              Localidad: "",
              Colonia: "0084",
              Calle: "AVENIDA JAVIER BARROS SIERRA",
              NumeroExterior: "540",
            },
          },
        ],
        Mercancias: {
          UnidadPeso: "KGM",
          Mercancia: [
            {
              Cantidad: "20",
              BienesTransp: "43223338",
              Descripcion: "HERRAJE AEREO UNIV P/2178",
              ClaveUnidad: "KT",
              PesoEnKg: "8.40",
              ValorMercancia: "1",
              Moneda: "MXN",
            },
          ],
          Autotransporte: {
            PermSCT: "TPAF02",
            NumPermisoSCT: "TPAF01",
            IdentificacionVehicular: {
              ConfigVehicular: "C2",
              PlacaVM: "370DV7",
              AnioModeloVM: "2006",
            },
            Seguros: {
              AseguraRespCivil: "QUALITAS COMPAÑIA DE SEGUROS SA DE CV",
              PolizaRespCivil: "0860436759",
            },
          },
        },
        FiguraTransporte: [
          {
            TipoFigura: "01",
            RFCFigura: "SAHH9111159Y0",
            NombreFigura: "HUGO ANTONIO SANDOVAL HERRERA",
            NumLicencia: "g182932",
          },
        ],
      },
    },
  };

  const general = {
    CfdiType: "T",
    Receiver: {
      Name: "INSUMOS COMERCIALES DE OCCIDENTE SA DE C",
      CfdiUse: "P01",
      Rfc: "EKU9003173C9",
    },
    NameId: "33",
    ExpeditionPlace: "08710",
    Observations: "INCOM test",
    Items: [
      {
        Quantity: "20",
        ProductCode: "39121700",
        UnitCode: "EA",
        Unit: "Pieza",
        Description: "CIERRE D/EMP LIN 4PTO 2CHA",
        IdentificationNumber: "2178S",
        UnitPrice: "0.00",
        Subtotal: "0.00",
        Taxes: null,
        Total: "0.00",
        Discount: null,
      },
    ],
    Complemento: {
      CartaPorte20: {
        TranspInternac: "No",
        Ubicaciones: [
          {
            TipoUbicacion: "Origen",
            RFCRemitenteDestinatario: "ICO990224H93",
            FechaHoraSalidaLlegada: "24/06/2022",
            DistanciaRecorrida: "1",
            Domicilio: {
              Pais: "MEX",
              CodigoPostal: "08710",
              Estado: "CMX",
              Municipio: "006",
              Localidad: "08",
              Colonia: "1279",
              Calle: "Plutarco Elias Calles",
              NumeroExterior: "276",
            },
          },
          {
            TipoUbicacion: "Destino",
            RFCRemitenteDestinatario: "EKU9003173C9",
            FechaHoraSalidaLlegada: "24/06/2022",
            DistanciaRecorrida: "1",
            Domicilio: {
              Pais: "MEX",
              CodigoPostal: "01210",
              Estado: "CMX",
              Municipio: "010",
              Localidad: "01",
              Colonia: "0082",
              Calle: "AV VASCO DE QUIROGA",
              NumeroExterior: "2000",
            },
          },
        ],
        Mercancias: {
          UnidadPeso: "KGM",
          Mercancia: [
            {
              Cantidad: "20",
              BienesTransp: "39121700",
              Descripcion: "CIERRE D/EMP LIN 4PTO 2CHA",
              ClaveUnidad: "EA",
              PesoEnKg: "94.60",
              ValorMercancia: "1",
              Moneda: "MXN",
            },
          ],
          Autotransporte: {
            PermSCT: "TPAF02",
            NumPermisoSCT: "TPAF01",
            IdentificacionVehicular: {
              ConfigVehicular: "C2R3",
              PlacaVM: "370DV7",
              AnioModeloVM: "2006",
            },
            Seguros: {
              AseguraRespCivil: "QUALITAS COMPAÑIA DE SEGUROS SA DE CV",
              PolizaRespCivil: "0860436759",
            },
            Remolques: [
              {
                SubTipoRem: "CTR003",
                Placa: "18UE4K",
              },
            ],
          },
        },
        FiguraTransporte: [
          {
            TipoFigura: "01",
            RFCFigura: "SAHH9111159Y0",
            NombreFigura: "HUGO ANTONIO SANDOVAL HERRERA",
            NumLicencia: "g182932",
          },
        ],
      },
    },
  };

  try {
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: header,
      body: JSON.stringify(general),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

export const CreateCFDIWithFT = () => {
  const url = valuesFacturama.url + "3/cfdis";
  const header = new Headers();
  header.set("Authorization", "Basic " + valuesFacturama.token);
  header.append("Content-Type", "application/json");
  const ftOrigin = {
    Receiver: {
      Name: "JOSE ALBERTO  LOPEZ CAMARILLO",
      CfdiUse: "P01",
      Rfc: "XEXX010101000",
      TaxRegistrationNumber: "123456789",
      TaxResidence: "USA",
      TaxZipCode: "08710",
      FiscalRegime: "616",
    },
    CfdiType: "I",
    NameId: "26",
    ExpeditionPlace: "08710",
    PaymentForm: "01",
    PaymentMethod: "PUE",
    Items: [
      {
        IdentificationNumber: "CX-000988",
        Quantity: "1",
        ProductCode: "41106300",
        UnitCode: "EA",
        Unit: "PIEZA",
        Description: "ABACO",
        UnitPrice: "100",
        Subtotal: "100.00",
        TaxObject: "02",
        Taxes: [
          {
            Name: "IVA",
            Rate: "0.16",
            Total: "16",
            Base: "100",
            IsRetention: "false",
          },
        ],
        Total: "116.00",
      },
      {
        Quantity: "1",
        ProductCode: "41106300",
        UnitCode: "EA",
        Unit: "PIEZA",
        Description: " ABACO",
        UnitPrice: "100",
        Subtotal: "100.00",
        IdentificationNumber: "CX-000988",
        TaxObject: "02",
        Taxes: [
          {
            Name: "IVA",
            Rate: "0.16",
            Total: "16",
            Base: "100",
            IsRetention: "false",
          },
        ],
        Total: "116.00",
      },
    ],
    Complemento: {
      ForeignTrade: {
        Issuer: {
          Address: {
            Street: "PLUTARCO ELIAS CALLES",
            ExteriorNumber: "276",
            Municipality: "006",
            State: "DIF",
            Locality: "08",
            Country: "MEX",
            ZipCode: "08710",
          },
        },
        Receiver: {
          Address: {
            Street: "ERMENEGILDO ZEDNA",
            ExteriorNumber: "110",
            InteriorNumber: "",
            Neighborhood: "",
            Locality: "-",
            Municipality: "La Victoria",
            State: "LIMA",
            Country: "PER",
            ZipCode: "LIMA 13",
          },
        },
        Commodity: [
          {
            SpecificDescriptions: [
              {
                Brand: "Volkswagen",
                Model: "Polo",
                SubModel: "GTI",
                SerialNumber: "4556789542156",
              },
            ],
            IdentificationNumber: "CX-000988",
            TariffFraction: "8302200201",
            CustomsQuantity: "1",
            CustomsUnit: "01",
            CustomsUnitValue: "10.60",
          },
        ],
        OperationType: "2",
        RequestCode: "A1",
        OriginCertificate: "true",
        Incoterm: "CFR",
        Subdivision: 1,
        ExchangeRateUSD: "18.78",
        TotalUSD: "1",
        OriginCertificateNumber: "20001000000300022817",
        ReliableExporterNumber: null,
        Observations: "sample string 8",
      },
    },
  };

  const newCfdi = {
    Receiver: {
      Name: "JOSE ALBERTO  LOPEZ CAMARILLO",
      CfdiUse: "P01",
      Rfc: "XEXX010101000",
      FiscalRegime: "605",
      TaxZipCode: "12345",
      TaxRegistrationNumber: "123456789",
      TaxResidence: "USA",
    },
    CfdiType: "I",
    NameId: "26",
    ExpeditionPlace: "08710",
    PaymentForm: "01",
    PaymentMethod: "PUE",
    Items: [
      {
        IdentificationNumber: "CX-000988",
        Quantity: "1",
        ProductCode: "41106300",
        UnitCode: "EA",
        Unit: "PIEZA",
        Description: "ABACO",
        UnitPrice: "100",
        Subtotal: "100.00",
        Taxes: [
          {
            Name: "IVA",
            Rate: "0.16",
            Total: "16",
            Base: "100",
            IsRetention: "false",
          },
        ],
        ObjetoImp: "02",
        Total: "116.00",
      },
      {
        Quantity: "1",
        ProductCode: "41106300",
        UnitCode: "EA",
        Unit: "PIEZA",
        Description: " ABACO",
        UnitPrice: "100",
        Subtotal: "100.00",
        IdentificationNumber: "CX-000988",
        Taxes: [
          {
            Name: "IVA",
            Rate: "0.16",
            Total: "16",
            Base: "100",
            IsRetention: "false",
          },
        ],
        ObjetoImp: "02",
        Total: "116.00",
      },
    ],
    Complemento: {
      ForeignTrade: {
        Issuer: {
          Address: {
            Street: "Cañada de Gomez",
            ExteriorNumber: "110",
            InteriorNumber: "A",
            Reference: "-",
            Municipality: "028",
            State: "SLP",
            Country: "PER",
            ZipCode: "78216",
          },
        },
        Receiver: {
          Address: {
            Street: "ERNESTO KRUMDIECK",
            ExteriorNumber: "287",
            InteriorNumber: "",
            Locality: "",
            Municipality: "",
            State: "LA VICTORIA",
            Country: "PE",
            ZipCode: "LIMA 13",
          },
        },
        Commodity: [
          {
            SpecificDescriptions: [
              {
                Brand: "Volkswagen",
                Model: "Polo",
                SubModel: "GTI",
                SerialNumber: "4556789542156",
              },
            ],
            IdentificationNumber: "CX-000988",
            TariffFraction: "8302100299",
            CustomsQuantity: "1",
            CustomsUnit: "01",
            CustomsUnitValue: "10.60",
          },
        ],
        OperationType: "2",
        RequestCode: "A1",
        OriginCertificate: "true",
        Incoterm: "CFR",
        Subdivision: 1,
        ExchangeRateUSD: "18.78",
        TotalUSD: "1",
        OriginCertificateNumber: "20001000000300022817",
        ReliableExporterNumber: null,
        Observations: "sample string 8",
      },
    },
  };

  const jsonBody1 = {
    Serie: "FC",
    Currency: "USD",
    CurrencyExchangeRate: 20.63,
    ExpeditionPlace: "08710",
    PaymentConditions: "CONTADO",
    Folio: "37281",
    CfdiType: "I",
    PaymentMethod: "PPD",
    PaymentForm: "99",
    Receiver: {
      RFC: "XEXX010101000",
      Name: "ABL GROUP",
      TaxZipCode: "08710",
      FiscalRegime: "616",
      CfdiUse: "S01",
      Address: {
        // Faltó comillas en Address
        Street: "ERNESTO KRUNDIECK",
        ExteriorNumber: "287",
        InteriorNumber: "",
        Neighborhood: "-",
        ZipCode: "LIMA 13",
        Municipality: "DISTRITO LA VICTORIA",
        State: "26",
        Country: "PE",
      },
    },
    Observations: "  Vendedor: ALEXIS RUIZ ",
    Items: [
      {
        ProductCode: "30191501",
        Description:
          "D62081 - ESCALERA RECTA DE FIBRA DE VIDRIO DE 2.44 METROS CON 8 PELDAÑOS Y CAPACIDAD DE CARGA DE 136 KG MARCA WERNER",
        Unit: "Pieza",
        UnitCode: "EA",
        UnitPrice: 300.0,
        Quantity: 1.0,
        Subtotal: 300.0,
        Discount: 0.0,
        Taxes: [
          {
            Total: 0.0,
            Name: "IVA",
            Base: 300.0,
            Rate: 0.0,
            IsRetention: false,
          },
        ],
        TaxObject: "02",
        Total: 300.0,
      },
    ],
    Complemento: {
      ForeignTrade: {
        Commodity: [
          {
            SpecificDescriptions: [
              {
                Brand: "163",
                Model: "-", // Not void
                Submodel: "-", // Not void
                SerialNumber: "S/N", // Not void
              },
            ],
            IdentificationNumber: "D62081MX",
            TariffFraction: "7616991300",
            CustomsQuantity: "1.00",
            CustomsUnit: "01",
            CustomsUnitValue: "300.00",
          },
        ],
        OperationType: "2",
        RequestCode: "A1",
        OriginCertificate: "false",
        Incoterm: "CFR",
        Subdivision: 1,
        ExchangeRateUSD: "20.6300",
        TotalUSD: "300.00",
        OriginCertificateNumber: null,
        ReliableExporterNumber: null,
        Observations: "", // Coma de más
        Issuer: {
          Address: {
            Street: "PLUTARCO ELIAS CALLES",
            ExteriorNumber: "276",
            InteriorNumber: "",
            Municipality: "006",
            State: "DIF",
            Country: "PER",
            ZipCode: "08710",
          },
        },
        Receiver: {
          Address: {
            Street: "ERNESTO KRUNDIECK",
            ExteriorNumber: "287",
            InteriorNumber: "",
            Neighborhood: "",
            Locality: "-",
            Municipality: "DISTRITO LA VICTORIA",
            State: "26",
            Country: "PER",
            ZipCode: "LIMA 13",
          },
        },
      },
    },
  };

  const jsonBody = {
    Serie: "FC",
    Currency: "USD",
    CurrencyExchangeRate: 20.63,
    ExpeditionPlace: "08710",
    PaymentConditions: "CONTADO",
    Folio: "37288",
    CfdiType: "I",
    PaymentMethod: "PUE",
    PaymentForm: "01",
    Receiver: {
      RFC: "XEXX010101000",
      Name: "ABL GROUP",
      TaxZipCode: "01001", // Según response debe ser el CP de quien expide, la guía del SAT indicia "01001"
      FiscalRegime: "616", // Clave genérica del SAT para clientes extranjeros.
      CfdiUse: "P01",
      TaxRegistrationNumber: "123456789",
      TaxResidence: "PER",
      Address: {
        Street: "ERNESTO KRUNDIECK",
        ExteriorNumber: "287",
        InteriorNumber: "",
        Neighborhood: "-",
        ZipCode: "08710", // Anterior "LIMA 13". Solucion? Si pero debe ponerse el valor ExpeditionPlace del Issuer.
        Municipality: "DISTRITO LA VICTORIA",
        State: "26",
        Country: "PE",
      },
    },
    Observations: "  Vendedor: ALEXIS RUIZ ",
    Items: [
      {
        ProductCode: "30191501",
        Description:
          "9291 - CONJUNTO DE GANCHO PARA CABLES Y PELDAÑO EN V PARA SOPORTE EN POSTE PARA ESCALERAS DE LA SERIE 71001MX MARCA WERNER",
        Unit: "Pieza",
        UnitCode: "EA",
        UnitPrice: 40.0,
        Quantity: 1.0,
        Subtotal: 40.0,
        Discount: 0.0,
        Taxes: [
          {
            Total: 0.0,
            Name: "IVA",
            Base: 40.0,
            Rate: 0.0,
            IsRetention: false,
          },
        ],
        TaxObject: "02",
        Total: 40.0,
      },
      {
        ProductCode: "30191501",
        Description:
          "D59242 - ESCALERA DE EXTENSION DE FIBRA DE VIDRIO DE 7.32 METROS CON 24 PELDAÑOS Y CAPACIDAD DE CARGA DE 102 KG MARCA WERNER",
        Unit: "Pieza",
        UnitCode: "EA",
        UnitPrice: 250.0,
        Quantity: 1.0,
        Subtotal: 250.0,
        Discount: 0.0,
        Taxes: [
          {
            Total: 0.0,
            Name: "IVA",
            Base: 250.0,
            Rate: 0.0,
            IsRetention: false,
          },
        ],
        TaxObject: "02",
        Total: 250.0,
      },
      {
        ProductCode: "30191501",
        Description:
          "D62081 - ESCALERA RECTA DE FIBRA DE VIDRIO DE 2.44 METROS CON 8 PELDAÑOS Y CAPACIDAD DE CARGA DE 136 KG MARCA WERNER",
        Unit: "Pieza",
        UnitCode: "EA",
        UnitPrice: 350.0,
        Quantity: 1.0,
        Subtotal: 350.0,
        Discount: 0.0,
        Taxes: [
          {
            Total: 0.0,
            Name: "IVA",
            Base: 350.0,
            Rate: 0.0,
            IsRetention: false,
          },
        ],
        TaxObject: "02",
        Total: 350.0,
      },
    ],
    Complemento: {
      ForeignTrade: {
        Commodity: [
          {
            SpecificDescriptions: [
              {
                Brand: "163",
                Model: "-",
                Submodel: "-",
                SerialNumber: "SN",
              },
            ],
            IdentificationNumber: "9291MX",
            TariffFraction: "7616991300",
            CustomsQuantity: "1.00",
            CustomsUnit: "01",
            CustomsUnitValue: "10.00",
          },
          {
            SpecificDescriptions: [
              {
                Brand: "163",
                Model: "-",
                Submodel: "-",
                SerialNumber: "SN",
              },
            ],
            IdentificationNumber: "D59242MX",
            TariffFraction: "7616991300",
            CustomsQuantity: "1.00",
            CustomsUnit: "01",
            CustomsUnitValue: "150.00",
          },
          {
            SpecificDescriptions: [
              {
                Brand: "163",
                Model: "-",
                Submodel: "-",
                SerialNumber: "SN",
              },
            ],
            IdentificationNumber: "D62081MX",
            TariffFraction: "7616991300",
            CustomsQuantity: "1.00",
            CustomsUnit: "01",
            CustomsUnitValue: "300.00",
          },
        ],
        OperationType: "2",
        RequestCode: "A1",
        OriginCertificate: "false",
        Incoterm: "DAP",
        Subdivision: 1,
        ExchangeRateUSD: "20.6300",
        TotalUSD: "460.00",
        OriginCertificateNumber: null,
        Observations: "Más información sobre los incoterms",
        Issuer: {
          Address: {
            Street: "PLUTARCO ELIAS CALLES",
            ExteriorNumber: "276",
            InteriorNumber: "",
            Municipality: "006",
            State: "DIF",
            Country: "PER",
            ZipCode: "08710",
          },
        },
        Receiver: {
          Address: {
            Street: "ERNESTO KRUNDIECK",
            ExteriorNumber: "287",
            InteriorNumber: "",
            Neighborhood: "-",
            Locality: "-",
            Municipality: "DISTRITO LA VICTORIA",
            State: "26",
            Country: "PER",
            ZipCode: "01001",
          },
        },
      },
    },
  };

  const facturama = {
    Serie: "FC",
    Currency: "USD",
    CurrencyExchangeRate: 20.63,
    ExpeditionPlace: "08710",
    PaymentConditions: "CONTADO",
    Folio: "37288",
    CfdiType: "I",
    PaymentMethod: "PUE",
    PaymentForm: "01",
    Receiver: {
      RFC: "XEXX010101000",
      Name: "ABL GROUP",
      TaxZipCode: "01001",
      FiscalRegime: "616",
      CfdiUse: "S01", // MODIFIED
      TaxRegistrationNumber: "123456789",
      TaxResidence: "PER",
      Address: {
        Street: "ERNESTO KRUNDIECK",
        ExteriorNumber: "287",
        InteriorNumber: "",
        Neighborhood: "-",
        ZipCode: "08710",
        Municipality: "DISTRITO LA VICTORIA",
        State: "26",
        Country: "PE",
      },
    },
    Observations: "  Vendedor: ALEXIS RUIZ ",
    Items: [
      {
        ProductCode: "30191501",
        IdentificationNumber: "9291MX", // ADDED
        Description:
          "9291 - CONJUNTO DE GANCHO PARA CABLES Y PELDAÑO EN V PARA SOPORTE EN POSTE PARA ESCALERAS DE LA SERIE 71001MX MARCA WERNER",
        Unit: "Pieza",
        UnitCode: "EA",
        UnitPrice: 40.0,
        Quantity: 1.0,
        Subtotal: 40.0,
        Discount: 0.0,
        Taxes: [
          {
            Total: 0.0,
            Name: "IVA",
            Base: 40.0,
            Rate: 0.0,
            IsRetention: false,
          },
        ],
        TaxObject: "02",
        Total: 40.0,
      },
      {
        ProductCode: "30191501",
        IdentificationNumber: "D59242MX", // ADDED
        Description:
          "D59242 - ESCALERA DE EXTENSION DE FIBRA DE VIDRIO DE 7.32 METROS CON 24 PELDAÑOS Y CAPACIDAD DE CARGA DE 102 KG MARCA WERNER",
        Unit: "Pieza",
        UnitCode: "EA",
        UnitPrice: 250.0,
        Quantity: 1.0,
        Subtotal: 250.0,
        Discount: 0.0,
        Taxes: [
          {
            Total: 0.0,
            Name: "IVA",
            Base: 250.0,
            Rate: 0.0,
            IsRetention: false,
          },
        ],
        TaxObject: "02",
        Total: 250.0,
      },
      {
        ProductCode: "30191501",
        IdentificationNumber: "D62081MX", // ADDED
        Description:
          "D62081 - ESCALERA RECTA DE FIBRA DE VIDRIO DE 2.44 METROS CON 8 PELDAÑOS Y CAPACIDAD DE CARGA DE 136 KG MARCA WERNER",
        Unit: "Pieza",
        UnitCode: "EA",
        UnitPrice: 350.0,
        Quantity: 1.0,
        Subtotal: 350.0,
        Discount: 0.0,
        Taxes: [
          {
            Total: 0.0,
            Name: "IVA",
            Base: 350.0,
            Rate: 0.0,
            IsRetention: false,
          },
        ],
        TaxObject: "02",
        Total: 350.0,
      },
    ],
    Complemento: {
      ForeignTrade: {
        Commodity: [
          {
            SpecificDescriptions: [
              {
                Brand: "163",
                Model: "-",
                Submodel: "-",
                SerialNumber: "SN",
              },
            ],
            IdentificationNumber: "9291MX",
            TariffFraction: "7616991300",
            CustomsQuantity: "1.00",
            CustomsUnit: "01",
            CustomsUnitValue: "10.00",
          },
          {
            SpecificDescriptions: [
              {
                Brand: "163",
                Model: "-",
                Submodel: "-",
                SerialNumber: "SN",
              },
            ],
            IdentificationNumber: "D59242MX",
            TariffFraction: "7616991300",
            CustomsQuantity: "1.00",
            CustomsUnit: "01",
            CustomsUnitValue: "150.00",
          },
          {
            SpecificDescriptions: [
              {
                Brand: "163",
                Model: "-",
                Submodel: "-",
                SerialNumber: "SN",
              },
            ],
            IdentificationNumber: "D62081MX",
            TariffFraction: "7616991300",
            CustomsQuantity: "1.00",
            CustomsUnit: "01",
            CustomsUnitValue: "300.00",
          },
        ],
        OperationType: "2",
        RequestCode: "A1",
        OriginCertificate: "false",
        Incoterm: "DAP",
        Subdivision: 1,
        ExchangeRateUSD: "20.6300",
        TotalUSD: "460.00",
        OriginCertificateNumber: null,
        Observations: "Más información sobre los incoterms",
        Issuer: {
          Address: {
            Street: "PLUTARCO ELIAS CALLES",
            ExteriorNumber: "276",
            InteriorNumber: "",
            Municipality: "006",
            State: "DIF",
            Country: "PER",
            ZipCode: "08710",
          },
        },
        Receiver: {
          Address: {
            Street: "ERNESTO KRUNDIECK",
            ExteriorNumber: "287",
            InteriorNumber: "",
            Neighborhood: "-",
            Locality: "-",
            Municipality: "DISTRITO LA VICTORIA",
            State: "26",
            Country: "PER",
            ZipCode: "01001",
          },
        },
      },
    },
  };

  try {
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: header,
      body: JSON.stringify(facturama),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

export const CreateCFDIWithPC = () => {
  const url = valuesFacturama.url + "3/cfdis";
  const header = new Headers();
  header.set("Authorization", "Basic " + valuesFacturama.token);
  header.append("Content-Type", "application/json");

  // const jsonBody = {
  //   CfdiType: "P",
  //   NameId: "14",
  //   Folio: "4",
  //   ExpeditionPlace: "08710",
  //   Receiver: {
  //     Rfc: "TCA0407219T6",
  //     CfdiUse: "CP01",
  //     Name: "TELEFONIA POR CABLE",
  //     FiscalRegime: "601",
  //     TaxZipCode: "44900",
  //     Address: {
  //       Street: "AV LAZARO CARDENAS",
  //       ExteriorNumber: "1694",
  //       InteriorNumber: "",
  //       Neighborhood: "DEL FRESNO",
  //       ZipCode: "44900",
  //       Municipality: "GUADALAJARA",
  //       State: "JAL",
  //       Country: "MX",
  //     },
  //   },
  //   Complemento: {
  //     Payments: [
  //       {
  //         Date: "2022-06-15",
  //         PaymentForm: "05",
  //         Amount: "128587,54",
  //         Currency: "USD",
  //         RelatedDocuments: [
  //           {
  //             TaxObject: "01",
  //             Uuid: "0B071559-334F-0744-984E-6DD407FBD9F3",
  //             Serie: "FC",
  //             Folio: "44336",
  //             Currency: "USD",
  //             PaymentMethod: "PPD",
  //             PartialityNumber: "1",
  //             PreviousBalanceAmount: "1042,84",
  //             AmountPaid: "1042,84",
  //             ImpSaldoInsoluto: "0,00",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // };

  const sap = {
    CfdiType: "P",
    NameId: "14",
    Folio: "13",
    ExpeditionPlace: "08710",
    Receiver: {
      Rfc: "TCA0407219T6",
      CfdiUse: "CP01",
      Name: "TELEFONIA POR CABLE",
      FiscalRegime: "601",
      TaxZipCode: "44900",
    },
    Complemento: {
      Payments: [
        {
          Date: "2022-05-20",
          PaymentForm: "05",
          Amount: "145000.00",
          Currency: "MXN",
          RelatedDocuments: [
            {
              TaxObject: "01",
              Uuid: "AB2361D3-5833-7045-9FF4-693926A05CFF",
              Serie: "FC",
              Folio: "34544",
              Currency: "USD",
              PaymentMethod: "PPD",
              PartialityNumber: "1",
              PreviousBalanceAmount: "30.54",
              AmountPaid: "18.26",
              ImpSaldoInsoluto: "12.28",
            },
          ],
        },
        {
          Date: "2022-05-20",
          PaymentForm: "05",
          Amount: "145000.00",
          Currency: "MXN",
          RelatedDocuments: [
            {
              TaxObject: "01",
              Uuid: "D5F4B53E-742A-264E-A60A-1334E5E99E3E",
              Serie: "FC",
              Folio: "35981",
              Currency: "USD",
              PaymentMethod: "PPD",
              PartialityNumber: "1",
              PreviousBalanceAmount: "3376.06",
              AmountPaid: "3376.06",
              ImpSaldoInsoluto: "0.00",
            },
          ],
        },
      ],
    },
  };

  // const jsonBody = {
  //   CfdiType: "P",
  //   NameId: "14",
  //   Folio: "10",
  //   ExpeditionPlace: "08710",
  //   Receiver: {
  //     Rfc: "TCA0407219T6",
  //     CfdiUse: "CP01",
  //     Name: "TELEFONIA POR CABLE",
  //     FiscalRegime: "601",
  //     TaxZipCode: "44900",
  //     Address: {
  //       Street: "AV LAZARO CARDENAS",
  //       ExteriorNumber: "1694",
  //       InteriorNumber: "",
  //       Neighborhood: "DEL FRESNO",
  //       ZipCode: "44900",
  //       Municipality: "GUADALAJARA",
  //       State: "JAL",
  //       Country: "MX",
  //     },
  //   },
  //   Complemento: {
  //     Payments: [
  //       {
  //         Date: "2022-06-16",
  //         PaymentForm: "05",
  //         Amount: "1890.96",
  //         Currency: "USD",
  //         ExchangeRate: "19.4953",
  //         RelatedDocuments: [
  //           {
  //             TaxObject: "01",
  //             Uuid: "A8C5438C-49D7-1247-B965-94E9E7AECF31",
  //             Serie: "FC",
  //             Folio: "45823",
  //             Currency: "MXN",
  //             ExchangeRate: "19.4953",
  //             PaymentMethod: "PPD",
  //             PartialityNumber: "1",
  //             PreviousBalanceAmount: "12029.20",
  //             AmountPaid: "12029.20",
  //             ImpSaldoInsoluto: "0.00",
  //           },
  //           {
  //             TaxObject: "01",
  //             Uuid: "5D174428-6AFC-DE41-8BF6-4055DF3A9E31",
  //             Serie: "FC",
  //             Folio: "44301",
  //             Currency: "MXN",
  //             PaymentMethod: "PPD",
  //             PartialityNumber: "1",
  //             PreviousBalanceAmount: "7006.40",
  //             AmountPaid: "7006.40",
  //             ImpSaldoInsoluto: "0.00",
  //             ExchangeRate: "19.4953",
  //           },
  //           {
  //             TaxObject: "01",
  //             Uuid: "D378F730-2607-A841-B100-C8294C3CBCE7",
  //             Serie: "FC",
  //             Folio: "47395",
  //             Currency: "MXN",
  //             PaymentMethod: "PPD",
  //             PartialityNumber: "1",
  //             PreviousBalanceAmount: "17829.20",
  //             AmountPaid: "17829.20",
  //             ImpSaldoInsoluto: "0.00",
  //             ExchangeRate: "19.4953",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // };

  const jsonBody = {
    CfdiType: "P",
    NameId: "14",
    Folio: "15",
    ExpeditionPlace: "08710",
    Receiver: {
      Rfc: "TCA0407219T6",
      CfdiUse: "CP01",
      Name: "TELEFONIA POR CABLE",
      FiscalRegime: "601",
      TaxZipCode: "44900",
      Address: {
        Street: "AV LAZARO CARDENAS",
        ExteriorNumber: "1694",
        InteriorNumber: "",
        Neighborhood: "DEL FRESNO",
        ZipCode: "44900",
        Municipality: "GUADALAJARA",
        State: "JAL",
        Country: "MX",
      },
    },
    Complemento: {
      Payments: [
        {
          Date: "2022-06-23",
          PaymentForm: "05",
          Amount: "500.00",
          Currency: "USD",
          ExchangeRate: "19.4953",
          RelatedDocuments: [
            {
              TaxObject: "01",
              Uuid: "C4B78360-891F-1B48-94ED-89D64448B91D",
              Serie: "FC",
              Folio: "47678",
              Currency: "USD",
              ExchangeRate: "1",
              PaymentMethod: "PPD",
              PartialityNumber: "1",
              PreviousBalanceAmount: "124.56",
              AmountPaid: "124.56",
              ImpSaldoInsoluto: "0.00",
            },
          ],
        },
      ],
    },
  };

  try {
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: header,
      body: JSON.stringify(jsonBody),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

export const CreateClientFacturama = () => {
  const url = valuesFacturama.url + "client";
  const header = new Headers();
  header.set("Authorization", "Basic " + valuesFacturama.token);
  header.append("Content-Type", "application/json");
  const newClient = {
    Email: "example@domain.com",
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
  try {
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: header,
      body: JSON.stringify(newClient),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

export const CreateProductFacturama = () => {
  const url = valuesFacturama.url + "product";
  const header = new Headers();
  header.set("Authorization", "Basic " + valuesFacturama.token);
  header.append("Content-Type", "application/json");
  const newProduct = {
    Unit: "Servicio",
    UnitCode: "E48",
    IdentificationNumber: "WEB003",
    Name: "Sitio web CMS",
    Description: "Desarrollo e implementación de sitio web empleando un CMS",
    Price: 6500.0,
    CodeProdServ: "43232408",
    CuentaPredial: "123",
    Taxes: [
      {
        Name: "IVA",
        Rate: 0.16,
        IsRetention: false,
        IsFederalTax: true,
      },
    ],
  };
  try {
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: header,
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

export const getProducts = () => {
  const url = valuesFacturama.url + "product";
  const header = new Headers();
  header.set("Authorization", "Basic " + valuesFacturama.token);
  header.append("Content-Type", "application/json");
};

export const getCFDIFacturama = () => {
  const url = valuesFacturama.url + "2/cfdi";
  console.log(url);
  const header = new Headers();
  header.set("Authorization", "Basic " + valuesFacturama.token);
  // header.append("Content-Type", "application/json");
  try {
    fetch(url, { method: "POST", headers: header, credentials: "include" })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

const Facturama = () => {
  const header = new Headers();
  header.set("Authorization", "Basic " + valuesFacturama.token);
  const url = valuesFacturama.url + "client";
  const data = {
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
};
