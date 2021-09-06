import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {
    Home,
    AboutUs,
    ContactUs,
    SearchImages
} from './ComponentMixing';

class SwitchRouting extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/aboutus" component={AboutUs} />
                <Route exact path="/searchimages" component={SearchImages} />
                <Route exact path="/contactus" component={ContactUs} />
            </Switch>
        )
    }
}
export default SwitchRouting;