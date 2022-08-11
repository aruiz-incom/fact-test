import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import {
  CreateClientFacturama,
  getCFDIFacturama,
  CreateProductFacturama,
  CreateCFDI33,
  CreateCFDI40,
  CreateCFDIWithCP,
  CreateCFDIWithFT,
  CreateCFDIWithPC,
} from "../utils/facturama";

export default function Index() {
  const [rawClients, setRawClients] = useState({});
  const getClients = () => {
    try {
      fetch("/api/getClients")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setRawClients(data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  const createClient = () => {
    CreateClientFacturama();
    // const url = CreateClientFacturama();
    // console.log(url);
    // try {
    //   fetch("/api/newClient", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email: "example@domain.com",
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))
    //     .catch((err) => console.log(err));
    // } catch (err) {
    //   console.log(err);
    // }
  };
  const getCFDI = () => {
    getCFDIFacturama();
  };
  const createProduct = () => {
    CreateProductFacturama();
  };
  const createCfdi33 = () => {
    CreateCFDI33();
  };
  const createCfdi40 = () => {
    CreateCFDI40();
  };
  const createCfdiWithCP = () => {
    CreateCFDIWithCP();
  };
  const createCfdiWithFT = () => {
    CreateCFDIWithFT();
  };
  const createCfdiWithPC = () => {
    CreateCFDIWithPC();
  };
  useEffect(() => {
    console.log(rawClients);
  }, [rawClients]);
  return (
    <section className="w-full h-screen">
      <h2 className="font-semibold">API Facturación 4.0</h2>
      <div className="flex flex-col justify-around items-center py-4 w-full h-3/4">
        {/* <button
          onClick={getClients}
          className="text-base text-white rounded-full px-4 py-1 bg-blue-500 hover:bg-blue-600"
        >
          Obtener clientes
        </button>
        <button
          onClick={createClient}
          className="text-base text-white rounded-full px-4 py-1 bg-blue-500 hover:bg-blue-600"
        >
          Crear cliente
        </button> */}
        {/* <button
          onClick={getCFDI}
          className="text-base text-white rounded-full px-4 py-1 bg-blue-500 hover:bg-blue-600"
        >
          Obtener CFDI's
        </button>
        <button
          onClick={createProduct}
          className="text-base text-white rounded-full px-4 py-1 bg-blue-500 hover:bg-blue-600"
        >
          Crear producto
        </button> */}
        <button
          onClick={createCfdi33}
          className="text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 w-1/2 2xl:w-1/4 py-2 rounded-md"
        >
          Crear CFDI 3.3
        </button>
        <button
          onClick={createCfdi40}
          className="text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 w-1/2 2xl:w-1/4 py-2 rounded-md"
        >
          Crear CFDI 4.0
        </button>
        <button
          onClick={createCfdiWithCP}
          className="text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 w-1/2 2xl:w-1/4 py-2 rounded-md"
        >
          Crear CFDI con CP
        </button>
        <button
          onClick={createCfdiWithFT}
          className="text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 w-1/2 2xl:w-1/4 py-2 rounded-md"
        >
          Crear CFDI con FT
        </button>
        <button
          onClick={createCfdiWithPC}
          className="text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 w-1/2 2xl:w-1/4 py-2 rounded-md"
        >
          Crear CFDI con PC
        </button>
      </div>
    </section>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
