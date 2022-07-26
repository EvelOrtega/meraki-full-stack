import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import Logo from "../../images/icon-meraki.png";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export default function DrawerMenu(props) {
  return (
    <Drawer
      anchor="left"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <List sx={{ p: 4 }} className="background sideborder">
        <img src={Logo} alt="" className="logo-meraki" />
        <ListItem>
          <Link className="textbar" to="/dashboard">
            <DashboardIcon />
            &nbsp; Dashboard
          </Link>
        </ListItem>
        <br></br>
        <ListItem>
          <Link className="textbar" to="/aula">
            <SchoolIcon /> &nbsp;Meus Cursos
          </Link>
        </ListItem>
        <br></br>
        <ListItem>
          <Link className="textbar" to="/dashboard">
            <GroupsIcon /> &nbsp; Comunidade
          </Link>
        </ListItem>
        <br></br>
        <ListItem>
          <Link className="textbar" to="/aula">
            <SupportAgentIcon /> &nbsp; Suporte
          </Link>
        </ListItem>
        <br></br>
        <ListItem>
          <Link className="textbar sair" to="/">
            <LogoutIcon /> &nbsp; Sair 
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}