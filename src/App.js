// src/App.js





/*import RecipeList from './components/RecipeList';
import OrderSummary from './components/OrderSummary';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes, Route } from  "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs' ;
import SignUp from './pages/SignUp';
import Contact from './pages/contact';


const App = () => {
  const [order, setOrder] = useState([]);

  const recipes = [
    { id: 1, name: 'Pizza', description: 'Cheesy and delicious', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qOqux4p9Uq6pYKxT9bOYDYsOfRY6kgNxdg&s'},
    { id: 2, name: 'Burger', description: 'Juicy and satisfying', image: 'https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=' },
    { id: 3, name: 'Pasta', description: 'Rich and creamy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQ9IjUOFn8JxtVzjj2KKdg9pcgi0fh7NBrQ&s' },
    { id: 1, name: 'Pizza', description: 'Cheesy and delicious', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qOqux4p9Uq6pYKxT9bOYDYsOfRY6kgNxdg&s'},
    { id: 2, name: 'Burger', description: 'Juicy and satisfying', image: 'https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=' },
    { id: 3, name: 'Pasta', description: 'Rich and creamy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQ9IjUOFn8JxtVzjj2KKdg9pcgi0fh7NBrQ&s' },
    { id: 1, name: 'Pizza', description: 'Cheesy and delicious', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qOqux4p9Uq6pYKxT9bOYDYsOfRY6kgNxdg&s'},
    { id: 2, name: 'Burger', description: 'Juicy and satisfying', image: 'https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=' },
    { id: 3, name: 'Pasta', description: 'Rich and creamy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQ9IjUOFn8JxtVzjj2KKdg9pcgi0fh7NBrQ&s' },
    { id: 1, name: 'Pizza', description: 'Cheesy and delicious', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qOqux4p9Uq6pYKxT9bOYDYsOfRY6kgNxdg&s'},
    { id: 2, name: 'Burger', description: 'Juicy and satisfying', image: 'https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=' },
    { id: 3, name: 'Pasta', description: 'Rich and creamy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQ9IjUOFn8JxtVzjj2KKdg9pcgi0fh7NBrQ&s' },
  ];

  const addToOrder = (recipe) => {
    setOrder([...order, recipe]);
  };

  return (
  
    <div className="app">
      <h1>Food Recipe App</h1>
      <div className="content">
        <RecipeList recipes={recipes} addToOrder={addToOrder} />
        <OrderSummary order={order} />
      </div>
    </div>
<Router>
<Navbar/>
<Routes>
<Route exact path='/' element={<Home />} />
<Route path ='/about' element ={<About/>} />
<Route path='/contact' element={<Contact />} />
<Route path= '/blogs' element={<Blogs/>} />
<Route path='/sign-up' element={<SignUp/>} />
</Routes>
</Router>
  );
};

export default App;*/



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/FoodApp/Navbar';
import Footer from './components/FoodApp/Footer';
import About from './pages/Home';
import FoodList from './pages/FoodList';
import Home from  './pages/Home';
import './App.css'
import Animation from './components/Animation';
import AnimatedTable from './components/AnimatedTable/AnimatedTable';
import AnimatedBtn from './components/AnimatedButton/AnimatedBtn';
import ModalButton from './components/ModalButton/ModalButton';

const App = () => {
    return (
        <Router>
            <div>
            
                <Navbar />
                <Routes>
                <Route path='/animation' element={<Animation/>}/>
                <Route path ='/animated-table' element={<AnimatedTable/>} />
                  <Route path='/animated-btn' element={<AnimatedBtn/>} />
                  <Route path='/modal-btn' element={<ModalButton/>}/>
                  
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/food-list" element={<FoodList />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
