import { FC } from "react";

export const metricsData = [
  {
    title: "Ingresos",
    value: "$50,846.90",
    percentage: "12%",
    color: "#025cca",
    isIncrease: false,
  },
  {
    title: "Propinas",
    value: "10,342",
    percentage: "16%",
    color: "#02ca3a",
    isIncrease: true,
  },
  {
    title: "Total de clientes",
    value: "19,720",
    percentage: "10%",
    color: "#f6b100",
    isIncrease: true,
  },
  {
    title: "Día de mayor ingreso",
    value: "Lunes",
    percentage: "10%",
    color: "#be3e3f",
    isIncrease: false,
  },
];

export const itemsData = [
  {
    title: "Total Categorías",
    value: "8",
    percentage: "12%",
    color: "#5b45b0",
    isIncrease: false,
  },
  {
    title: "Total de platos",
    value: "50",
    percentage: "12%",
    color: "#285430",
    isIncrease: true,
  },
  {
    title: "Órdenes activas",
    value: "12",
    percentage: "12%",
    color: "#735f32",
    isIncrease: true,
  },
  { title: "Total mesas", value: "10", color: "#7f167f" },
];

const Metrics: FC = () => {
  return (
    <div className="container mx-auto py-2 px-6 md:px-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-[#f5f5f5] text-xl">
            Desempeño general
          </h2>
          <p className="text-sm text-[#ababab]">
            Estos valores muestran estadísticas generales del negocio
          </p>
        </div>
        <button className="flex items-center gap-1 px-4 py-2 rounded-md text-[#f5f5f5] bg-[#1a1a1a]">
          Último mes
          <svg
            className="w-3 h-3"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="4"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-4">
        {metricsData.map((metric, index) => {
          return (
            <div
              key={index}
              className="shadow-sm rounded-lg p-4"
              style={{ backgroundColor: metric.color }}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium text-xs text-[#f5f5f5]">
                  {metric.title}
                </p>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    style={{ color: metric.isIncrease ? "#f5f5f5" : "red" }}
                  >
                    <path
                      d={metric.isIncrease ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                    />
                  </svg>
                  <p
                    className="font-medium text-xs"
                    style={{ color: metric.isIncrease ? "#f5f5f5" : "red" }}
                  >
                    {metric.percentage}
                  </p>
                </div>
              </div>
              <p className="mt-1 font-semibold text-2xl text-[#f5f5f5]">
                {metric.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col justify-between mt-12">
        <div>
          <h2 className="font-semibold text-[#f5f5f5] text-xl">Detalles</h2>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-4">
          {itemsData.map((item, index) => {
            return (
              <div
                key={index}
                className="shadow-sm rounded-lg p-4"
                style={{ backgroundColor: item.color }}
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium text-xs text-[#f5f5f5]">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3 text-white"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    >
                      <path d="M5 15l7-7 7 7" />
                    </svg>
                    <p className="font-medium text-xs text-[#f5f5f5]">
                      {item.percentage}
                    </p>
                  </div>
                </div>
                <p className="mt-1 font-semibold text-2xl text-[#f5f5f5]">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Metrics;
