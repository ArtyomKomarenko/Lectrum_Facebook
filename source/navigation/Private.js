// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { NewPassword, Profile, Feed } from '../pages';

// Instruments
import { book } from './book';

export default class Private extends Component {
    render () {
        return (
            <Switch>
                <Route component = { NewPassword } path = { book.newPassword } />
                <Route component = { Profile } path = { book.profile } />
                <Route component = { Feed } path = { book.feed } />
                <Redirect to = { book.feed } />
            </Switch>
        );
    }
}
