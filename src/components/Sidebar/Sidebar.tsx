import { NavLink } from "react-router-dom";
import { useGetCategoriesQuery } from "../../api/api";
import styles from "./Sidebar.module.scss";
import { ROUTES } from "../../utils/routes";

function Sidebar() {
  const { data: categories } = useGetCategoriesQuery(null);

  return (
    <section className={styles.sidebar}>
      <div className={styles.col}>
        <h3 className={styles.title}>CATEGORIES</h3>

        <ul className={styles.links}>
          {categories?.map(({ name, id }) => (
            <li key={id} className={styles.link}>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={ROUTES.CATEGORIES + `/${id}`}
              >
                {name[0].toUpperCase() + name.slice(1).toLowerCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.help}>
        Help
        <span>Terms & Conditions</span>
      </div>
    </section>
  );
}

export default Sidebar;
