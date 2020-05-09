import React from "react"
import { makeStyles, Link } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { useDispatch } from "react-redux"
import GitHubIcon from "@material-ui/icons/GitHub"
import { slideMoreInfo } from "../../../actions"

const photoSize = 120
const verticalMarginCard = 20
const horizontalMarginCard = 15
const paddingCard = 16

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "transparent",
    margin: `${verticalMarginCard}px ${horizontalMarginCard}px`,
  },
  cardContent: {
    padding: `${paddingCard}px !important`,
    display: "flex",
  },
  name: {
    fontSize: "22px",
    color: "#FFF",
    fontWeight: "bold",
  },
  photo: {
    display: "block",
    borderStyle: "solid",
    borderColor: "#D3D3D3",
    borderWidth: "5px",
    margin: 0,
    padding: 0,
    width: photoSize,
    height: photoSize,
    borderRadius: "50%",
    objectFit: "cover",
    transition: ".5s",
    "&:hover": {
      borderColor: theme.customColors.bottomColor,
    },
  },
  infoContainer: {
    width: `calc(100% - ${photoSize + 20 + 10}px)`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "20px",
  },
}))

export default function MediaCard({ name, photo, git }) {
  const dispatch = useDispatch()
  const classes = useStyles({ photo, name })

  return (
    <Card elevation={0} className={classes.card}>
      <CardContent className={classes.cardContent}>
        <img
          onClick={() => dispatch(slideMoreInfo())}
          alt={name}
          src={photo}
          className={classes.photo}
        />
        <div className={classes.infoContainer}>
          <Typography variant='h2' className={classes.name}>
            {name}
          </Typography>
          {git !== "" && (
            <Link href={git} target='_blank' style={{ marginTop: "10px" }}>
              <GitHubIcon style={{ color: "#FFF" }} />
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
