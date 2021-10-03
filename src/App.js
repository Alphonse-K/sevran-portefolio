import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import components
import Navbar from './components/navbar';
import Header from './components/header';
import Particules from 'react-particles-js'

function App() {
  return (
    <>
      <Particules 
        className='tsparticles-canvas-el'
        params={{
          particules: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
