import "./App.css";
import AddContactForm from "./components/AddContactForm/AddContactForm";

function App() {
  // array --> change --> map
  //array ---> remove --> filter
  // 0 --> false
  //1,2,3 ---> true
  //"" --> false , !""--->true
  //"fdalkf" ---> true, !"asdgsdg" --> false
  // if (val === 5) {
  //   console.log("Hello");
  // } else console.log("Bye");

  // val === 5 ? console.log("Hello") : console.log("Bye");
  return (
    <>
      <AddContactForm />
    </>
  );
}

export default App;
