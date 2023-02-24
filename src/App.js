import './App.css';
import Forms from './components/formikForm/Forms';
import SimpleForm from './components/formikForm/SimpleForm';
import ReuseableForm from './components/reuseableFormikComponent/ReuseableForm';
function App() {
  return (
    <div>
      {/* <SimpleForm />
      <Forms /> */}
      <ReuseableForm />
    </div>
  );
}

export default App;
