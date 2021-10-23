import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./ContentModal.css";
import { Button } from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "70%",
    height: "70%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function TransitionsModal({ children, id, poster, title }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        height="200"
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="ContentModal">
              <img
                src={poster}
                alt={title}
                className="ContentModal__portrait"
              />
              <div className="ContentModal__about">
                <span className="ContentModal__title">{title}</span>
                <i className="tagline">Ação</i>

                <span className="ContentModal__description">
                  Sinopse....E un fapt bine stabilit că cititorul va fi sustras
                  de conţinutul citibil al unei pagini atunci când se uită la
                  aşezarea în pagină. Scopul utilizării a Lorem Ipsum, este
                  acela că are o distribuţie a literelor mai mult sau mai puţin
                  normale, faţă de utilizarea a ceva de genul "Conţinut aici,
                  conţinut acolo", făcându-l să arate ca o engleză citibilă.
                  Multe pachete de publicare pentru calculator şi editoare de
                  pagini web folosesc acum Lorem Ipsum ca model standard de
                  text, iar o cautare de "lorem ipsum" va rezulta în o mulţime
                  de site-uri web în dezvoltare. Pe parcursul anilor, diferite
                  versiuni au evoluat, uneori din intâmplare, uneori intenţionat
                  (infiltrându-se elemente de umor sau altceva de acest gen).
                </span>
                <Button
                  variant="contained"
                  startIcon={<BookmarkIcon />}
                  color="secondary"
                  target="__blank"
                >
                  Pegar emprestado
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
