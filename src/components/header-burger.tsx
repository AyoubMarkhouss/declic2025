import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useRef, useState, } from "react";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const transitions = [
    { delay: 0, duration: 0.1 },
    { delay: 0.1, duration: 0.2 },
    { delay: 0.2, duration: 0.3 },
    { delay: 0.3, duration: 0.4 },
    { delay: 0.4, duration: 0.5 },
  ];

  return (
    <div className="absolute w-full ">
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.7 }}
          className="absolute z-50 w-full h-screen flex items-center justify-center"
        >
          <SlideTabs />
        </motion.div>
      )}
      <div className="flex absolute  top-0 left-0 w-full justify-between">
        <p></p>
        <div className="z-50">
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-2 z-50 bg-transparent group w-72 items-end pr-6 pt-6"
          >
            <span className="w-12 h-1 bg-redeclic rounded-full" />
            <span className="w-7 h-1 bg-redeclic rounded-full transition-all duration-300 group-hover:w-12" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5">
        <AnimatePresence mode="sync">
          {open &&
            transitions.map((transition, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: "100vh" }}
                exit={{ height: 0 }}
                transition={{ ...transition, ease: "linear" }}
                className="bg-black top-0 w-full h-7"
                style={{ zIndex: transitions.length - index }} // Ensure proper stacking order
              />
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;

const SlideTabs: React.FC = () => {
  const [position, setPosition] = useState<{
    top: number;
    width: number;
    opacity: number;
  }>({
    top: 0,
    width: 0,
    opacity: 0,
  });
  const [activeTab, setActiveTab] = useState<number | null>(null); // No active tab initially
  const pages = [
    { name: "Home", href: "/" },
    { name: "Compagnes", href: "/portfolio?section=work" },
    { name: "About us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }));
      }}
      className="fontmed relative mx-auto flex flex-col w-full text-center gap-5 p-1"
    >
      {pages.map((page, index) => (
        <Tab
          key={index}
          setPosition={setPosition}
          isActive={activeTab === index}
          onClick={() => setActiveTab(index)}
        >
          <Link href={page.href}>{page.name}</Link>
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab: React.FC<{
  children: ReactNode;
  setPosition: (position: {
    top: number;
    width: number;
    opacity: number;
  }) => void;
  isActive: boolean;
  onClick: () => void;
}> = ({ children, setPosition, isActive, onClick }) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          top: ref.current.offsetTop,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick}
      className={`relative group z-10 flex justify-center items-center cursor-pointer uppercase w-full text-7xl ${
        isActive ? "bg-red-500 text-white" : "text-white"
      }`}
    >
      {children}
    </li>
  );
};

const Cursor: React.FC<{
  position: { top: number; width: number; opacity: number };
}> = ({ position }) => {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{
        ...position,
      }}
      className="absolute z-0 h-20 w-full bg-redeclic text-center"
    />
  );
};
