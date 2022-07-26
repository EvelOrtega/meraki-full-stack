import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";

import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const styles = (theme) => ({
  card: {
    display: "flex",
    width: "80vw",
    maxWidth: '1100px',
    height: "77vh",
    marginLeft: "50%",
    transform: "translateX(-50%)",
  },
  details: {
    width: "80vw",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    width: "80vw",
    height: "70vh",
  },
  cover: {
    width: 151,
  },
  controls: {
    marginLeft: "54%",
    transform: "translateX(-50%)",
  },
  controlsContainer: {
    width: "100%",
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  video: {
    width: "70vw",
    height: "60vh",
  },
});

function MusicCard(props) {
  const { classes, theme } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.data.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.data.subTitle}
          </Typography>
          <div className={classes.video}>
            <iframe
              width="80%"
              height="100%"
              title="video"
              id="video"
              src={"https://www.youtube.com/embed/" + props.data.videoId}
              frameBorder="0"
              allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </CardContent>
        <div className={classes.controlsContainer}>
          <div className={classes.controls}>
            <IconButton aria-label="Previous" onClick={() => props.prev()}>
              {theme.direction === "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            <IconButton aria-label="Play/pause">
              <PlayArrowIcon
                className={classes.playIcon}
                onClick={() => props.play()}
              />
            </IconButton>
            <IconButton aria-label="next" onClick={() => props.next()}>
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </div>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>
  );
}

MusicCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MusicCard);
