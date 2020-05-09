import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core"
import { Button } from "@material-ui/core"
import InputField from "./components/InputField"
import { sendEmailRequest } from "../../actions"
import { useDispatch } from "react-redux"

const isEmail = (email) => {
  let regExp = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regExp.test(String(email).toLocaleLowerCase())
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#BDBDBD",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gridcontainer: {
    padding: "30px",
    backgroundColor: "#D3D3D3",
    borderRadius: "8px",
    width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  sendButton: {
    width: "300px",
    marginTop: "20px",
    color: "#FFF",
    fontWeight: "bold",
    backgroundColor: "#2F2F30",
    "&:hover": {
      backgroundColor: "#303030",
    },
    [theme.breakpoints.down("md")]: {},
  },
}))

const Contact = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [formData, setFormData] = useState({
    name: undefined,
    lastName: undefined,
    mail: undefined,
    subject: undefined,
    message: undefined,
  })

  const [nameError, setNameError] = useState({
    error: false,
    label: "",
  })
  const [lastNameError, setLastNameError] = useState({
    error: false,
    label: "",
  })
  const [emailError, setEmailError] = useState({
    error: false,
    label: "",
  })
  const [subjectError, setSubjectError] = useState({
    error: false,
    label: "",
  })
  const [messageError, setMessageError] = useState({
    error: false,
    label: "",
  })

  const checkField = (field, setField) => {
    if (field !== undefined) {
      if (field.length === 0)
        setField({ error: true, label: "Campo requerido*" })
      else setField({ error: false, label: "" })
    }
  }

  const checkEmail = (field, setField) => {
    if (field !== undefined) {
      if (field.length === 0)
        setField({ error: true, label: "Campo requerido*" })
      else {
        setField({ error: false, label: "" })
        if (isEmail(field)) {
          setField({ error: false, label: "" })
        } else setField({ error: true, label: "Email no válido*" })
      }
    }
  }

  const checkMessage = (field, setField) => {
    if (field !== undefined) {
      if (field.length === 0)
        setField({ error: true, label: "Campo requerido*" })
      else {
        setField({ error: false, label: "" })
        if (field.length > 50) {
          setField({ error: false, label: "" })
        } else
          setField({
            error: true,
            label: "El mensaje debe tener al menos 50 carácteres*",
          })
      }
    }
  }

  useEffect(() => {
    checkField(formData.name, setNameError)
    checkField(formData.lastName, setLastNameError)
    checkEmail(formData.mail, setEmailError)
    checkField(formData.subject, setSubjectError)
    checkMessage(formData.message, setMessageError)
  }, [
    formData.name,
    formData.lastName,
    formData.mail,
    formData.subject,
    formData.message,
  ])

  return (
    <div className={classes.wrapper}>
      <div className={classes.gridcontainer}>
        <form
          style={{ overflow: "hidden", textAlign: "center" }}
          autoComplete='off'
        >
          <InputField
            error={nameError.error}
            errorMessage={nameError.label}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            label='Nombres'
            id='name'
          />
          <InputField
            error={lastNameError.error}
            errorMessage={lastNameError.label}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            label='Apellidos'
            id='lastName'
          />
          <InputField
            type='email'
            error={emailError.error}
            errorMessage={emailError.label}
            onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
            label='Email'
            id='email'
          />
          <InputField
            error={subjectError.error}
            errorMessage={subjectError.label}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            label='Asunto'
            id='subject'
          />
          <InputField
            error={messageError.error}
            errorMessage={messageError.label}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            label='Déjanos tu mensaje :D'
            id='message'
            multiline
            rows={5}
          />
          <Button
            onClick={() => {
              if (
                !nameError.error &&
                !lastNameError.error &&
                !emailError.error &&
                !subjectError.error &&
                !messageError.error &&
                formData.name !== undefined &&
                formData.lastName !== undefined &&
                formData.mail !== undefined &&
                formData.subject !== undefined &&
                formData.message !== undefined
              ) {
                dispatch(sendEmailRequest(formData))
                setFormData({
                  name: undefined,
                  lastName: undefined,
                  mail: undefined,
                  subject: undefined,
                  message: undefined,
                })
              } else alert("Llene correctamente los campos")
            }}
            className={classes.sendButton}
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Contact
