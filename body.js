const json =
  "{'ProductCode': '', 'Description': '', 'Unit': 'Pieza', 'UnitCode': 'EA', 'UnitPrice': 194.22, 'Quantity': 80.00, 'Subtotal': 15537.60, 'Discount': 2952.15, 'Taxes': [{ 'Total': 2013.67, 'Name': 'IVA', 'Base': 12585.45, 'Rate': 0.160000, 'IsRetention': false }], 'TaxObject': '02', 'Total': 14599.12,},";
const exchangeRate = "'CurrencyExchangeRate': 19.4953, ";
const body =
  "{'Serie': 'FC', 'Currency': 'USD', 'CurrencyExchangeRate': 19.4953, 'ExpeditionPlace': '08710', 'NameId': '1', 'PaymentConditions': '30 DÍAS DE CRÉDITO', 'Folio': '48167', 'CfdiType': 'I', 'PaymentMethod': 'PUE', 'PaymentForm': '03', 'Receiver': {'RFC': 'TCI770922C22', 'Name': 'CABLEMAS TELECOMUNICACIONES', 'TaxZipCode': '01219', 'FiscalRegime': '601', 'CfdiUse': 'G03', 'Address': { 'Street': 'AVENIDA JAVIER BARROS SIERRA', 'ExteriorNumber': '540', 'InteriorNumber': '', 'Neighborhood': 'LOMAS DE SANTA FE', 'ZipCode': '01219', 'Municipality': 'ALVARO OBREGON', 'State': 'CMX', 'Country': 'MX',},}, 'Observations': 'Pedido SAP: 47597 Entrega: SC-49529 Vendedor: PAMELA ELIZALDE MELLADO ', 'Items': [{'ProductCode': '', 'Description': '', 'Unit': 'Pieza', 'UnitCode': 'EA', 'UnitPrice': 194.22, 'Quantity': 80.00, 'Subtotal': 15537.60, 'Discount': 2952.15, 'Taxes': [{ 'Total': 2013.67, 'Name': 'IVA', 'Base': 12585.45, 'Rate': 0.160000, 'IsRetention': false }], 'TaxObject': '02', 'Total': 14599.";

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
      ProductCode: "",
      Description: "",
      Unit: "Pieza",
      UnitCode: "EA",
      UnitPrice: 194.22,
      Quantity: 80.0,
      Subtotal: 15537.6,
      Discount: 2952.15,
      Taxes: [
        {
          Total: 2013.67,
          Name: "IVA",
          Base: 12585.45,
          Rate: 0.16,
          IsRetention: false,
        },
      ],
      TaxObject: "02",
      Total: 14599.12,
    },
  ],
};
