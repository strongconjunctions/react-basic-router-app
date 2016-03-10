import React from 'react';
import { Link } from 'react-router';

export default class Users extends React.Component {
    render() {
        return (
            <div className="app">
                <nav>
                    <Link to="/users">Users</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/">Home</Link>
                </nav>
                <main>
                    <h1>Users</h1>
                    <div className="users row">
                        <div className="col-md-4">
                            <b>Leo</b>
                            <div className="user"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum beatae ex sint, doloremque numquam, at.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <b>Beth</b>
                            <div className="user"></div>
                            <p>Maiores corporis veritatis, magnam expedita quis, modi! Sit, hic, cumque? Porro repudiandae quibusdam officia omnis voluptas cum. Et ipsum dolor.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <b>Rupert</b>
                            <div className="user"></div>
                            <p>Vel tenetur ratione, nostrum laboriosam, ad rem! Qui quis ullam modi dolores, voluptatem doloremque recusandae! Ibi adipisicing elit.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
