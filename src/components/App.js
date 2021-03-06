import React from 'react';
import { Route, Switch } from 'react-router-dom'
import AboutPage from './about/AboutPage';
import Homepage from './home/HomePage';
import Header from './common/Header'
import PageNotFound from './PageNotFound';
import CoursesPage from '../courses/CoursesPage';

const App = () => (
    <div className='container-fluid'>
        <Header />
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/courses' component={CoursesPage}/>
            <Route component={PageNotFound}/>
        </Switch>
        
    </div>

);

export default App;
