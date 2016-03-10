import React from 'react';
import { Link } from 'react-router';

import Contacts from './contacts';


export default class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <Contacts />
            </div>
        )
    }
}
