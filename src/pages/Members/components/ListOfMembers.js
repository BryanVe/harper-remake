import React from "react"
import MemberCard from "./MemberCard"
import { useSelector } from "react-redux"
import {
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import Loader from "../../../components/Loader"

const sliceArr = (members, numberOfItemsPerRow) => {
  let newArr = []
  let regularMembers = members.filter(
    ({ status }) => status !== "Junta Directiva"
  )
  for (let i = 0; i < regularMembers.length; i += numberOfItemsPerRow) {
    if (i + numberOfItemsPerRow - 1 < regularMembers.length)
      newArr.push(regularMembers.slice(i, i + numberOfItemsPerRow))
    else newArr.push(regularMembers.slice(i, regularMembers.length))
  }
  return newArr
}

const useStyles = makeStyles((theme) => ({
  marginWrapper: {
    padding: "30px 0",
  },
  wrapper: {
    position: "relative",
    left: "50%",
    transform: "translate(-50%)",
    width: ({ wrapperWidth }) => wrapperWidth,
    transition: "1s",
    [theme.breakpoints.down("sm")]: {
      width: "600px !important",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      width: "360px !important",
    },
  },
  title: {
    width: "100%",
    fontSize: "45px",
    fontWeight: "bold",
    color: "#D3D3D3",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "5vw !important",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "8vw !important",
    },
  },
  divider: {
    width: "100%",
    height: "5px",
    margin: "24px 0 40px 0",
    backgroundColor: "#D3D3D3",
  },
  gridContainer: {
    [theme.breakpoints.down("sm")]: {
      width: "500px !important",
    },
    [theme.breakpoints.down("xs")]: {
      width: "360px !important",
    },
  },
}))

const ListOfMembers = () => {
  const {
    members: { loading, data: members },
  } = useSelector((state) => state)
  const theme = useTheme()
  const lessThan1300px = useMediaQuery("(min-width:1300px)")
  const sm = useMediaQuery(theme.breakpoints.down("sm"))

  let numberOfItemsPerRow
  let wrapperWidth

  if (!lessThan1300px) {
    numberOfItemsPerRow = 2
    wrapperWidth = 800
  } else {
    numberOfItemsPerRow = 3
    wrapperWidth = 1200
  }

  const classes = useStyles({ numberOfItemsPerRow, wrapperWidth })

  return loading ? (
    <Loader />
  ) : (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          height: "64px",
        }}
      />
      <div className={classes.marginWrapper}>
        <div className={classes.wrapper}>
          <Typography variant='h2' className={classes.title}>
            Nuestra Junta Directiva
          </Typography>
          <Grid container justify='center' className={classes.gridContainer}>
            {sm
              ? members.map(({ name, photo, git, status }) =>
                  status === "Junta Directiva" ? (
                    <Grid key={name} item xs={12} style={{ width: "400px" }}>
                      <MemberCard name={name} photo={photo} git={git} />
                    </Grid>
                  ) : null
                )
              : members.map(({ name, photo, git, status }) =>
                  status === "Junta Directiva" ? (
                    <Grid key={name} item xs={12 / numberOfItemsPerRow}>
                      <MemberCard name={name} photo={photo} git={git} />
                    </Grid>
                  ) : null
                )}

            <div className={classes.divider} />
            <Typography variant='h2' className={classes.title}>
              Nuestros Miembros
            </Typography>
            {sm
              ? members.map(({ name, photo, git, status }) =>
                  status !== "Junta Directiva" ? (
                    <Grid key={name} item xs={12}>
                      <MemberCard name={name} photo={photo} git={git} />
                    </Grid>
                  ) : null
                )
              : sliceArr(members, numberOfItemsPerRow).map((subArr, index) => (
                  <Grid
                    key={index}
                    style={{ width: `${400 * subArr.length}px` }}
                    item
                    container
                  >
                    {subArr.map(({ name, photo, git }) => (
                      <Grid key={name} item xs={12 / subArr.length}>
                        <MemberCard name={name} photo={photo} git={git} />
                      </Grid>
                    ))}
                  </Grid>
                ))}
          </Grid>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ListOfMembers
