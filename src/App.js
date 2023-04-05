import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";

function App() {
  return (
    //Using Jsx to create a fragment. A fragment can be made by <> </> symbol
    <>
    {/* when you are writing Navbar it means that you are importing Navbar */}
     <Navbar title = "TextUtils" about = "About TextUtils"/>
     <div className="container my-6">
     <Textform heading="Enter the heading to analyze "/>
     </div>
    
    </>
    //textform must be inside div 
  );
}

export default App;
