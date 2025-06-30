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
    <section className="bg-gray-100 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center flex flex-col items-center">
            <img src={service.icon} alt={`${service.title} icon`} className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
