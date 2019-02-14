// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { NewPassword, Profile, Feed } from '../pages';

// Instruments
import { book } from './book';

// WebSocket
import { socket } from '../init/socket';

export default class Private extends Component {
    componentDidMount () {
        const { listenPosts } = this.props;

        listenPosts();
    }

    componentWillUnmount () {
        socket.removeListener('create');
    }

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
