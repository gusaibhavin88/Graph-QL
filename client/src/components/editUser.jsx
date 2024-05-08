import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Box, TextField, InputAdornment, Button, Stack } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { GET_USER } from "../Graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_USER } from "../Graphql/mutations";

function EditUser() {
  const { register, handleSubmit, setValue, reset } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: id },
  });
  console.log(error);
  const [updateUser] = useMutation(UPDATE_USER);

  useEffect(() => {
    if (data) {
      Object.keys(data?.getUser[0]).forEach((key) => {
        setValue(key.toString(), data?.getUser[0][key]);
      });
    }
  }, [data]);

  const updateUserSubmit = async (data) => {
    const response = await updateUser({
      variables: {
        ...data,
        id: data._id,
        age: parseInt(data.age),
        mobile: parseInt(data.mobile),
      },
    });
    if (response) {
      reset();
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit(updateUserSubmit)}>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <TextField
          name="name"
          inputProps={register("name")}
          id="input-with-icon-textfield"
          label="Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Box>

      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <TextField
          name="email"
          inputProps={register("email")}
          id="input-with-icon-textfield"
          label="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Box>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <TextField
          name="mobile"
          inputProps={register("mobile")}
          id="input-with-icon-textfield"
          label="Mobile"
          type="number" // Specify input type as "number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Box>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <TextField
          name="age"
          inputProps={register("age")}
          id="input-with-icon-textfield"
          label="Age"
          type="number" // Specify input type as "number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Box>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <TextField
          name="work"
          inputProps={register("work")}
          id="input-with-icon-textfield"
          label="Work"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Box>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <TextField
          name="add"
          inputProps={register("add")}
          id="input-with-icon-textfield"
          label="Address"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Box>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <TextField
          name="desc"
          inputProps={register("desc")}
          id="input-with-icon-textfield"
          label="Description"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Box>
      <Stack spacing={2} direction="row">
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
export default EditUser;
