import { NavLink } from "react-router";
import { navLinks } from "../data";

const Drawer = () => {
  return (
    <div className="drawer z-91 te">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content"></div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <a href="/" className="text-2xl font-bold text-color-text mb-2 pl-3.5">
            Ngoding.
          </a>

          {navLinks.map((link) => {
            return (
              <li key={link.id} className="text-center">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 text-balance font-medium rounded transition-all ${
                      isActive
                        ? "text-white bg-red-500"
                        : "text-color-text hover:text-red-500"
                    }`
                  }
                  onClick={() => {
                    const drawerCheckbox = document.getElementById(
                      "my-drawer"
                    ) as HTMLInputElement;
                    if (drawerCheckbox) {
                      drawerCheckbox.checked = false;
                    }
                  }}
                >
                  {link.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
