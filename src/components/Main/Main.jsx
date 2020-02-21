import React from "react";
import './Main.css';
import UserCards from "../UserCards/UserCards";
import UserAlbums from "../UserAlbums/UserAlbums";
import UserPhotos from "../UserPhotos/UserPhotos";
import {Route, Switch} from "react-router-dom";

const Main = () => {
  return(
    <section className='main-container'>
        <Switch>
            <Route path="/users" component={UserCards}/>
            <Route path="/albums" component={UserAlbums}/>
            <Route path="/photos" component={UserPhotos}/>
        </Switch>
    </section>
  );
};

export default Main;