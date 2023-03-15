import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import OlineSignLogo2 from "../../assets/img/oline-sign-logo-2@2x.svg";

import { Linking } from "react-native";

export default function SwipeableTemporaryDrawer(props) {
  const { menuLinkWa, onTapTarif } = props;

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, right: open });
  };

  return (
    <div>
      <React.Fragment key={"right"}>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon
            style={{
              width: "32px",
              height: "32px",

              color: "rgba(0, 0, 0, 0.32)",
            }}
          />
        </Button>

        <SwipeableDrawer
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <img
              style={{ width: "100%", marginTop: " 30px", padding: "20px" }}
              src={OlineSignLogo2}
              alt="Oline-sign Logo"
            />
            <Divider />

            <List>
              {/* <ListItem disablePadding>
                <ListItemButton onClick={onTapTarif}>
                  <ListItemText primary={"Тарифы"} />
                </ListItemButton>
              </ListItem> */}
              <ListItem disablePadding>
                <ListItemButton
                  onClick={async () =>
                    await Linking.openURL(menuLinkWa.signatureVerification)
                  }
                >
                  <ListItemText primary={"Проверить подпись"} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={async () => await Linking.openURL(menuLinkWa.signUp)}
                >
                  <ListItemText primary={"Зарегистрироваться"} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={async () => await Linking.openURL(menuLinkWa.signIn)}
                >
                  <ListItemText primary={"Войти"} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
