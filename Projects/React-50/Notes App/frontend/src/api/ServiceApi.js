import axios from "axios";

const BASE_URL = "http://localhost:8080/notes-app/api/v1";

// Person Sign Up Api Call
export const doSignUp = (name, email, password, callback) => {
  axios
    .post(
      `${BASE_URL}/person`,
      {
        personName: name,
        personEmail: email,
        personPassword: password,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then(function (response) {
      callback(response.data);
    })
    .catch(function (error) {
      callback(error);
    })
    .finally(function () {
      console.log("Done with signup...!!");
    });
};
