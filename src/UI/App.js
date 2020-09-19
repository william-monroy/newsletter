import React from 'react';
import '../css/App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from '../js/StateProvider'
import News from './News';
import WidgetsNews from './WidgetsNews';

function App() {
    
    const [{user},dispatch]=useStateValue();

    return (
        //BEM Naming convention
        <div className = "app" >
            {!user ? 
                <Login /> 
            : (
                <>
                <Header />
                <div className="app__body">
                    <Sidebar />
                    <Feed />
                    <Widgets />
                </div>
                </>
            )}
            
            
        </div>
    );
}

export default App;