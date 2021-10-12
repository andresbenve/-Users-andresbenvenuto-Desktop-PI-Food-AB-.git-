import './App.css';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Detail from './components/Detail';
import SearchBar from './components/SearchBar';
import Form from './components/Form';
import Paginado from './components/Paginado';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path='/'
      component={LandingPage}
      />
      <Route exact path='/recipe'
      component={SearchBar}
      />
      <Route exact path='/recipe'
      component={Home}
      />
      <Route  path='/recipe/:id'
      render={({match}) => (<Detail ruta={match.params.id}/>)}
      />
      <Route exact path='/addRecipe'
      component={Form}
      />
      <Route exact path='/recipe'
      component={Paginado}
      />

    </div>
  );
}

export default App;
