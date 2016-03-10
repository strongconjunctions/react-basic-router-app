import React from 'react';
import { Link } from 'react-router';

export default class Contacts extends React.Component {
    render() {
        return (
            <div className="footer row">
            	<div className="col-xs-4">
	            	<div className="link-wrap"><a href="http://facebook.com" className="fa fa-facebook-official fa-2x"></a></div>
            	</div>
            	<div className="col-xs-4">
	            	<div className="link-wrap"><a href="https://github.com" className="fa fa-github fa-2x"></a></div>
            	</div>
            	<div className="col-xs-4">
	            	<div className="link-wrap"><a href="https://twitter.com" className="fa fa-twitter fa-2x"></a></div>
            	</div>
            </div>
        )
    }
}
