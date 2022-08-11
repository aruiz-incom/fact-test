import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import { freight, token } from "../utils/incom";

export default function Freight() {
  const createFreight = () => {
    freight();
  };
  const getToken = () => {
    token();
  };
  return (
    <section>
      <h2>Flete</h2>
      <div className="flex flex-col justify-center items-center space-y-2 py-4">
        <button
          onClick={createFreight}
          className="text-base text-white rounded-full px-4 py-1 bg-blue-500 hover:bg-blue-600"
        >
          Crear flete
        </button>
        <button
          onClick={getToken}
          className="text-base text-white rounded-full px-4 py-1 bg-blue-500 hover:bg-blue-600"
        >
          Obtener token
        </button>
      </div>
    </section>
  );
}

Freight.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
