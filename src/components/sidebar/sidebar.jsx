import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { MdEngineering } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState(0)
  const phasesData = [
    {
      id: 1,
      name: "Market Research",
      details: "Details about Market Research...",
      route: '/market',
      icon: <GiMagnifyingGlass size={25} />
    },
    {
      id: 2,
      name: "Planning",
      details: "Details about Planning...",
      route: '/planning',
      icon: <FaClipboardList size={25} />
    },
    {
      id: 3,
      name: "Desiging",
      details: "Details about Planning...",
      route: '/design',
      icon: <IoIosColorPalette size={25} />
    },
    {
      id: 4,
      name: "Manufacturing",
      details: "Details about Planning...",
      route: '/manufacturing',
      icon: <MdEngineering size={25}  />
    },
    {
      id: 5,
      name: "Sales/Marketing",
      details: "Details about Planning...",
      route: '/sales',
      icon: <FaSackDollar size={25} />
    },
  ];
  return (
    <aside className={styles.sidebar}>
      <Link onClick={() => setActive(0)} to='/' className={styles.link}><h1>LIZMOTORS</h1></Link>
      {phasesData.map((item) => (
        <Link key={item.id} className={styles.link} to={item.route}>
          <div onClick={() => setActive(item.id)} className={`${styles.sidebar_item} ${item.id === active ? styles.sidebar_item1 : styles.sidebar_item }`} key={item.id}>
            {item.icon}
            <span>{item.name}</span>
          </div>
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
