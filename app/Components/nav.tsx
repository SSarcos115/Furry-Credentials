import React from "react";

function NavBar() {
  return (
    <>
      <nav className="bg-white text-black flex justify-between p-6">
        <div className="max-w-max">
          <img
            src="{require(Images\furry-credentials-low-resolution-logo-color-on-transparent-background.png)}"
            alt="Furry Credentials logo"
            className="w-full"
          />
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <a href="#" className="hover:text-red-500">
                My profile
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Documents
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                My Pets
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
