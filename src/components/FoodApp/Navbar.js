import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{display:'flex',justifyContent:'center',padding:'20px'}}>
            <ul>
                <li style={{margin:'0 15px'}}><Link to="/">Home</Link></li>
                <li style={{margin:'0 15px'}}><Link to="/about">About</Link></li>
                <li style={{margin:'0 15px'}}><Link to="/food-list">Food List</Link></li>
                <li style={{margin:'0 15px'}}><Link to='/animation'>Animation-Square</Link></li>
           <li style={{margin:'0 15px'}}><Link to="/animated-table">Animated Table</Link></li>
            
            <li style={{margin: '0 15px'}}><Link to="/animated-btn">AnimatedBtn</Link></li></ul>
       <li style={{margin:'0 15px'}}><Link to = "/modal-btn">ModalButton</Link></li>
        </nav>
    );
};

export default Navbar;
