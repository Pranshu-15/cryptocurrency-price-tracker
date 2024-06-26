import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from "@mui/material";
import './style.css'
import Button from "../Button";
const  MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link"/>
      </IconButton>
      <Drawer 
      anchor={"right"} 
       open={open} 
       onClose={() => setOpen(false)}>
        <div className="drawer-div">
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/compare">
          <p className="link">Compare</p>
        </a>
        <a href="/watchlist">
          <p className="link">Watchlist</p>
        </a>
        <a href="/dashboard">
          <Button text={"dashboard"} />
        </a>
        </div>
      </Drawer>
    </div>
  );
}
export default MobileNav;