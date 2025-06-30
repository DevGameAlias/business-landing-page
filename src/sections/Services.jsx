import React from "react";
import ElectricIcon from "../assets/icons/electric-icon.svg";
import PaintIcon from "../assets/icons/paint-spray-icon.svg";
import SawIcon from "../assets/icons/saw-icon.svg";
import TapIcon from "../assets/icons/tap-wash-basin-icon.svg";
import ToolboxIcon from "../assets/icons/toolbox-repairing-icon.svg";
import WindowIcon from "../assets/icons/window-open-icon.svg";

const services = [
  {
    title: "Electrical",
    desc: "Wiring, outlets, lighting, and safety checks.",
    icon: ElectricIcon,
  },
  {
    title: "Painting",
    desc: "Indoor/outdoor painting, refinishing, and touch-ups.",
    icon: PaintIcon,
  },
  {
    title: "Carpentry",
    desc: "Custom shelving, repairs, framing, and woodwork.",
    icon: SawIcon,
  },
  {
    title: "Plumbing",
    desc: "Leaks, faucet installs, minor pipe work.",
    icon: TapIcon,
  },
  {
    title: "Tool Assistance",
    desc: "Bring your own tools? We assist and advise on builds.",
    icon: ToolboxIcon,
  },
  {
    title: "Windows/Doors",
    desc: "Fixing drafty windows or squeaky doors.",
    icon: WindowIcon,
  },
];

export default function Services() {
  return (
    <section className="bg-orange-50 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-yellow-600 mb-10 tracking-wide">More Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white p-6 rounded-xl border border-transparent hover:border-yellow-400 hover:shadow-xl hover:scale-[1.02] transform transition duration-300 ease-in-out text-center"
          >
            <img src={service.icon} alt={`${service.title} icon`} className="w-12 h-12 mx-auto mb-4 transition duration-300 group-hover:scale-110 group-hover:brightness-110" />
            <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
