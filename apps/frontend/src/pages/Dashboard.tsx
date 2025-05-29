import { FC, useState } from "react";
import { BiSolidDish } from "react-icons/bi";
import { MdCategory, MdTableBar } from "react-icons/md";
import { Buttons, Tabs } from "../types.d";
import Metrics from "../components/dashboard/Metrics";
import RecentOrders from "../components/dashboard/RecentOrders";

const buttons: Buttons[] = [
  { label: "Añadir mesa", icon: <MdTableBar />, action: "table" },
  { label: "Añadir categoría", icon: <MdCategory />, action: "category" },
  { label: "Añadir plato", icon: <BiSolidDish />, action: "dishes" },
];

const Dashboard: FC = () => {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.Metrics);

  return (
    <div className="bg-[#1f1f1f] h-[calc(100vh-5rem)]">
      <div className="container mx-auto flex items-center justify-between py-14 px-6 md:px-4">
        <MdCategory />
        <div className="flex items-center gap-3">
          {buttons.map(({ label, icon, action }) => (
            <button className="bg-[#1a1a1a] hover:bg-[#262626] px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2">
              {label} {icon}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {Object.values(Tabs).map((tab) => (
            <button
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2 ${activeTab === tab ? "bg-[#262626]" : "bg-[#1a1a1a] hover:bg-[#262626]"}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {activeTab === Tabs.Metrics && <Metrics />}
      {activeTab === Tabs.Orders && <RecentOrders />}
    </div>
  );
};
export default Dashboard;
