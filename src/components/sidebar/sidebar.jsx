import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { MdEngineering } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";

const Sidebar = () => {
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
      <Link to='/' className={styles.link}><h1>Liz Motors</h1></Link>
      {phasesData.map((item) => (
        <Link className={styles.link} to={item.route}>
          <div className={styles.sidebar_item} key={item.id}>
            {item.icon}
            <span>{item.name}</span>
          </div>
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
