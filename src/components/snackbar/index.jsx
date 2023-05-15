import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import Button2 from "../Button2";
// import Button from "@mui/material/Button";

function TransitionLeft(props) {
  return <Slide {...props} direction="up" />;
}
export default function MySnackBar(props) {
  const { mainUrl } = props;
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = React.useState(undefined);

  useEffect(() => {
    const isSnackbarAccepted = localStorage.getItem("snackbarAccepted");
    if (!isSnackbarAccepted) {
      setTransition(() => TransitionLeft);
      setOpen(true);
    }
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    localStorage.setItem("snackbarAccepted", true);
    setTransition(() => TransitionLeft);
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <div
        className={`sbsanstext-regular-normal-shark-16px`}
        style={{ margin: "auto" }}
      >
        Мы используем cookies для улучшения работы сайта и повышения удобства
        его использования. Условия использования описаны
        <a
          href={`/legal/privacy_policy.pdf`}
          // href={`${mainUrl}/legal/privacy_policy.pdf`}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#2ea440" }}
        >
          {" "}
          в Политике конфиденциальности.
        </a>
      </div>
      <div style={{ paddingLeft: "30px", paddingRight: "15px" }}>
        <Button2
          text="Принять"
          color="primary"
          size="small"
          onclick={async () => await handleClose()}
        />
      </div>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={600000}
        onClose={handleClose}
        ContentProps={{
          sx: {
            padding: "10px",
            flexWrap: "inherit",
            margin: "auto",
            justifyContent: "center",
            alignContent: "center",
            background: "#f2f5f7",
            borderRadius: "16px",
          },
        }}
        TransitionComponent={transition}
        action={action}
      />
    </div>
  );
}
