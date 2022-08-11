const dayjs = require("dayjs");
const date = dayjs().format("YYYY-MM-DD HH:mm:ss");

const CFDI40 = {
  CfdiType: "I", //Clave con la que se identifica el tipo de comprobante fiscal para el contribuyente emisor (FormaPago)
  PaymentForm: "01", //Forma de pago en Efectivo (FormaPago)
  PaymentMethod: "PUE", //Pago en Una sola Exhibición, PPD Pago en Parcialidades o Diferido (MetodoPago)
  ExpeditionPlace: "78240", //CP de expedición del comprobante (LugarExpedicion)
  Date: date, //Fecha y hora de expedición del comprobante fiscal en formato AAAA-MM-DDThh:mm:ss (Fecha)
  Receiver: {
    //Nodo del receptor (Nodo:Receptor)
    RFC: "URE180429TM6", //RFC del receptor
    CfdiUse: "G03", //Clave correspondiente al uso que se le dará al comprobante fiscal el receptor (UsoCFDI)
    Name: "UNIVERSIDAD ROBOTICA ESPAÑOLA", //Nombre completo o razón social registrados en el RFC del contribuyente receptor (Nombre)
    FiscalRegime: "601", //Clave vigente del régimen fiscal del contribuyente receptor (RegimenFiscalReceptor)
    TaxZipCode: "65000", //CP del domicilio fiscal del receptor del comprobante (DomicilioFiscalReceptor)
  },
  Items: [
    //Nodo de conceptos (Nodo:Conceptos)
    {
      ProductCode: "25173108", //Clave para clasificar los conceptos del comprobante como productos o servcios (ClaveProdServ)
      Description: "GPS estandar pruebas", //Descripción del bien o servicio propio de la empresa por cada concepto (Unidad)
      UnitCode: "E48", //Clave de unidad de medida estandarizada (ClaveUnidad)
      Quantity: 1.0, //Cantidad de bienes o servicios que corresponde a cada concepto (Cantidad)
      UnitPrice: 100.0, //Valor o precio unitario del bien o servicio por cada concepto (ValorUnitario)
      Subtotal: 100.0, //Valor o precio obtenido a través de multiplicar el UnitPrice por la cantidad.
      ObjetoImp: "02", //Clave correspondiente para indicar si la operación comercial es objeto o no de impuesto (ObjetoImp)
      Taxes: [
        //Nodo Impuestos (Nodo:Impuestos)
        {
          Total: 16, //Importe del impuesto retenido que aplica a cada concepto (Importe)
          Name: "IVA", //Tipo de impuesto retenido aplicable a cada concepto (Impuesto?)
          Base: 100, //Valor para el cálculo de la retención (Base)
          Rate: 0.16, //Valor de la tasa o cuota del impuesto que se retiene para cada concepto (TasaOCuota)
          IsRetention: false, //Valor verdadero en caso de que sea retención.
        },
      ],
      Total: 116, //Suma del subtotal menos los descuentos aplicables, más las contribuciones recibidas (Total del Nodo:Comprobante)
    },
  ],
};
