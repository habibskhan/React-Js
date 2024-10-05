import React, { useState } from "react";
import "./form.scss";
import { Button, Input } from "@mui/material";
import { styled } from "@mui/joy/styles";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
import SendIcon from "@mui/icons-material/Send";

const Form = () => {
  // const [name, setName] = useState("");
  // const [lName, setLName] = useState("");
  // const [fullName, setFullName] = useState();
  // const [middleName, setMiddleName] = useState();
  const [cForm, setCform] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

  const StyledInput = styled("input")({
    border: "none", // remove the native input border
    minWidth: 0, // remove the native input width
    outline: 0, // remove the native input outline
    padding: 0, // remove the native input padding
    paddingTop: "1em",
    flex: 1,
    color: "inherit",
    backgroundColor: "transparent",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontStyle: "inherit",
    fontWeight: "inherit",
    lineHeight: "inherit",
    textOverflow: "ellipsis",
    "&::placeholder": {
      opacity: 0,
      transition: "0.1s ease-out",
    },
    "&:focus::placeholder": {
      opacity: 1,
    },
    "&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label":
      {
        top: "0.5rem",
        fontSize: "0.75rem",
      },
    "&:focus ~ label": {
      color: "var(--Input-focusedHighlight)",
    },
    "&:-webkit-autofill": {
      alignSelf: "stretch", // to fill the height of the root slot
    },
    "&:-webkit-autofill:not(* + &)": {
      marginInlineStart: "calc(-1 * var(--Input-paddingInline))",
      paddingInlineStart: "var(--Input-paddingInline)",
      borderTopLeftRadius:
        "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
      borderBottomLeftRadius:
        "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
    },
  });

  const StyledLabel = styled("label")(({ theme }) => ({
    position: "absolute",
    lineHeight: 1,
    top: "calc((var(--Input-minHeight) - 1em) / 2)",
    color: theme.vars.palette.text.tertiary,
    fontWeight: theme.vars.fontWeight.md,
    transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  }));

  const InnerInput = React.forwardRef(function InnerInput(props, ref) {
    const id = React.useId();
    return (
      <React.Fragment>
        <StyledInput {...props} ref={ref} id={id} />
        <StyledLabel htmlFor={id}>Enter Your Name</StyledLabel>
      </React.Fragment>
    );
  });

  // single input

  //   const inputEvent = (event) => {
  //     console.log(event.target.value);
  //     setName(event.target.value);
  //   };

  //   const inputEvent2 = (event) => {
  //     setLName(event.target.value);
  //   };

  const inputEvent3 = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const { name, value } = event.target;

    // dynamic multiple input
    setCform((preValue) => {
      console.log(preValue);

      return {
        ...preValue,
        [name]: value,
      };
    });

    // multiple input

    // const name = event.target.name;
    // const value = event.target.value;

    // setCform((preValue) => {
    //   // console.log(preValue);
    //   if (name === "fName") {
    //     return {
    //       fName: value,
    //       lName: preValue.lName,
    //       email: preValue.email,
    //     };
    //   } else if (name === "lName") {
    //     return {
    //       fName: preValue.fName,
    //       lName: value,
    //       email: preValue.email,
    //     };
    //   } else if (name === "email") {
    //     return {
    //       fName: preValue.fName,
    //       lName: preValue.lName,
    //       email: value,
    //     };
    //   }
    // });
  };

  //   const onSubmit = (event) => {
  //     event.preventDefault() ; // to prevent form refresh on submit
  //     setFullName(name);
  //     setMiddleName(lName);
  //   };

  const onSubmit = (event) => {
    event.preventDefault(); // to prevent form refresh on submit
    setCform(cForm);
  };

  return (
    <>
      <section className="form_sec1">
        <div className="my-container">
          <form className="form_container" onSubmit={onSubmit}>
            <div>
              <h2 className="heading">
                {/* Welcome {fullName} {middleName} */}
                Welcome {cForm.fName} {cForm.lName}
              </h2>
              <p className="subheading">{cForm.email}</p>
              <p className="desc">{cForm.phone}</p>
              {/* <input
                type="text"
                value={name}
                onChange={inputEvent}
                className="input_field"
              />
              <input
                type="text"
                value={lName}
                onChange={inputEvent2}
                className="input_field"
              /> */}
              <input
                type="text"
                value={cForm.fName}
                name="fName"
                onChange={inputEvent3}
                className="input_field"
              />
              <input
                type="text"
                value={cForm.lName}
                name="lName"
                onChange={inputEvent3}
                className="input_field"
              />
              <input
                type="email"
                value={cForm.email}
                name="email"
                onChange={inputEvent3}
                className="input_field"
              />
              <input
                type="number"
                value={cForm.phone}
                name="phone"
                onChange={inputEvent3}
                className="input_field"
              />
              <Button
                type="Submit"
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  margin: "2em auto 2em",
                  width: "100%",
                  "max-width": "50%",
                  display: "flex",
                }}
              >
                Submit
              </Button>
            </div>
            {/* <Input
              value={name}
              onChange={inputEvent}
              endDecorator={<CheckCircleOutlined />}
              slots={{ input: InnerInput }}
              slotProps={{
                input: { placeholder: "Enter Your Name", type: "text" },
              }}
              sx={{
                "--Input-minHeight": "56px",
                "--Input-radius": "6px",
                width: "100%",
                "max-width": "100%",
                border: "1px solid black",
                // "border-radius": "50px",
                "font-size": "1.5em",
                padding: "0 1em",
                ".MuiInputBase-root-MuiInput-root:after": {
                  border: "2px solid 1976d2",
                },
              }}
              className="input_field_1"
            />
            <Button
              type="Submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                margin: "2em auto 2em",
                width: "100%",
                "max-width": "50%",
                display: "flex",
              }}
            >
              Submit
            </Button> */}
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
