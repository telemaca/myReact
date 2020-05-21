import React from "react";
import Menu, { MenuItem, Submenu } from "Clase 72/components/Menu";
import { DiReact } from "react-icons/di";

function App() {
  return (
    <div className="App">
      <Menu>
        <Menu.Submenu icon={<DiReact />} text="Editor" isShown>
          <MenuItem
            icon={<DiReact />}
            text="Design"
            rightComponent="  sarasa"
          />
          <MenuItem icon={<DiReact />} text="Colors" />
          <MenuItem icon={<DiReact />} text="Features" />
          <MenuItem icon={<DiReact />} text="Applications" />
        </Menu.Submenu>
        <MenuItem icon={<DiReact />} text="Users" />
        <MenuItem icon={<DiReact />} text="Promote" />
        <MenuItem icon={<DiReact />} text="Analytics" />
        <MenuItem icon={<DiReact />} text="Settings" />
        <MenuItem icon={<DiReact />} text="Module" />
      </Menu>
    </div>
  );
}

export default App;
