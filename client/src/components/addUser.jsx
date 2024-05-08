import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../Graphql/mutations";

function AddUser() {
  const { register, handleSubmit, reset } = useForm();
  const [createUser, { error }] = useMutation(CREATE_USER);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      age: parseInt(data.age),
      mobile: parseInt(data.mobile),
    };
    const response = await createUser({
      variables: newData,
    });
    reset();
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <span
          style={{ fontWeight: "bold", alignSelf: "center", fontSize: "20px" }}
        >
          Add User
        </span>
        <br />
        <br />
        <TextField
          label="Name"
          color="secondary"
          focused
          name="name"
          inputProps={register("name")}
        />
        <br />
        <TextField
          label="Email"
          color="secondary"
          focused
          name="email"
          inputProps={register("email")}
        />
        <br />
        <TextField
          label="Mobile"
          color="secondary"
          focused
          name="mobile"
          type="number" // Use "tel" input type for mobile numbers
          inputProps={{
            ...register("mobile"),
            pattern: "[0-9]*", // Use a pattern to enforce only numeric input
          }}
        />

        {/* Age Field */}
        <br />
        <TextField
          label="Age"
          color="secondary"
          focused
          name="age"
          type="number" // Specify input type as "number"
          inputProps={{
            ...register("age"),
            min: 0, // Optional: Specify a minimum value
          }}
        />
        <br />
        <TextField
          label="Work"
          color="secondary"
          focused
          name="work"
          inputProps={register("work")}
        />
        <br />
        <TextField
          label="Address"
          color="secondary"
          focused
          name="add"
          inputProps={register("add")}
        />
        <br />
        <TextField
          focused
          color="secondary"
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          name="desc"
          inputProps={register("desc")}
        />
        <Stack spacing={2} direction="row">
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default AddUser;
