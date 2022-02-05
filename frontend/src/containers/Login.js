import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import LoaderButton from "../components/LoaderButton";
import { useAppContext } from "../lib/contextLib";
import { useFormFields } from "../lib/hooksLib";
import { onError } from "../lib/errorLib";
import "./Login.css";
export default function Login() {
  const history = useHistory();
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
  });
  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }
  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      await Auth.signIn(fields.email, fields.password);
      userHasAuthenticated(true);
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <LoaderButton
          block
          size="lg"
          type="submit"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
        </LoaderButton>
      </Form>
    </div>
  );
}

// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import LoaderButton from "../components/LoaderButton";
// import "./Login.css";
// import { Auth } from "aws-amplify";
// import { useAppContext } from "../lib/contextLib";
// import { useHistory } from "react-router-dom";
// import { onError } from "../lib/errorLib";

// export default function Login() {
//   const history = useHistory();
//   const { userHasAuthenticated } = useAppContext();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }
//   async function handleSubmit(event) {
//     event.preventDefault();
//     setIsLoading(true);
//     try {
//       await Auth.signIn(email, password);
//       userHasAuthenticated(true);
//       history.push("/");
//     } catch (e) {
//       onError(e);
//       setIsLoading(false);
//     }
//   }
//   //   async function handleSubmit(event) {
//   //     event.preventDefault();
//   //     try {
//   //       await Auth.signIn(email, password);
//   //       //alert("Logged in");
//   //       userHasAuthenticated(true);
//   //       history.push("/");
//   //     } catch (e) {
//   //       alert(e.message);
//   //     }
//   //   }

//   //   function handleSubmit(event) {
//   //     event.preventDefault();
//   //   }
//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         {/* <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button> */}
//         <LoaderButton
//           block
//           size="lg"
//           type="submit"
//           isLoading={isLoading}
//           disabled={!validateForm()}
//         >
//           Login
//         </LoaderButton>
//       </Form>
//     </div>
//   );
// }
