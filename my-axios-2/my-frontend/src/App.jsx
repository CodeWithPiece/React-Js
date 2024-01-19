import { useRef } from "react";
import axios from "axios";

function App() {
  const fileRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("avatar", fileRef.current.files[0]);
    formData.append("name", nameRef.current.value);
    formData.append("email", emailRef.current.value);
    axios
      .post("http://localhost:3000/post", formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        //always be executed.
      });
  };

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input ref={fileRef} type="file" name="avatar" />
        <br />
        <input ref={nameRef} type="text" name="name" placeholder="Name" />
        <br />
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <br />
        <br />
        <button>Submit Avatar</button>
      </form>
    </>
  );
}

export default App;
