import Navbar from "./Navbar";
import './FormField.css'
import FormField from "./FormField";
import Message from "./massage";
function SignupForm() { 
  const button = <button
                    type="submit"
                    id="submit"
                    class='button is-primary'
                    style={{
                      margin: "8px 0 20px 0",
                      width: "40vw",
                      height: "8vh",
                      borderRadius: "12px",
                      backgroundColor: "white",
                      cursor: "pointer",
                      fontSize: "2em",
                      border: "1px solid #000"
                    }}
                  >
                    submit
                  </button>
return  (<div  className="App">
  <Navbar />
  <form> 
    <FormField  label="Name"  type="text"  placeholder="e.g Alex Smith"  />
    <FormField  label="Email"  type="email"  placeholder="e.g. alexsmith@gmail.com"  />
    <FormField  label="Password"  type="password"  placeholder="e.g. @123ame"  />
    {button}
  </form>
  <Message  isInfo  title="Hello World">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
	<strong>Pellentesque risus mi</strong>.
  </Message>
</div>
);
}

export  default SignupForm;