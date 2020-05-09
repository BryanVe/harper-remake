import React from "react"
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core"

const InputField = ({
  type = "text",
  label,
  id,
  rows = 1,
  multiline = false,
  onChange,
  error = false,
  errorMessage = "",
}) => {
  return (
    <FormControl fullWidth style={{ marginBottom: "20px" }}>
      <InputLabel
        error={error}
        style={{ overflow: "hidden" }}
        htmlFor={`component-${id}`}
      >
        {label}
      </InputLabel>
      <Input
        type={type}
        error={error}
        onChange={onChange}
        multiline={multiline}
        rows={rows}
        id={`component-${id}`}
      />
      {error ? (
        <FormHelperText error={error} id={`compoenent-${id}`}>
          {errorMessage}
        </FormHelperText>
      ) : null}
    </FormControl>
  )
}

export default InputField
