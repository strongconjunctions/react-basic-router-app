import React from 'react';
import { Link } from 'react-router';

export default class Posts extends React.Component {
    render() {
        return (
            <div className="app">
                <nav>
                    <Link to="/users">Users</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/">Home</Link>
                </nav>
                <main>
                    <h1>Posts</h1>
                    <article>
                        <cite><b>03/02/16</b></cite>
                        <p>This is a totally other text from the one you were thinking. Try a bit more to the left,- that would satisfy your thirst for knowledge.</p>
                    </article>
                    <article>
                        <cite><b>11/03/16</b></cite>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident in rerum ratione veniam? Necessitatibus impedit, voluptatibus reiciendis non sit tenetur nihil harum nemo ratione asperiores.</p>
                    </article>
                    <article>
                        <cite><b>15/03/16</b></cite>
                        <p>Truest words have never been spoken.</p>
                    </article>
                </main>
            </div>
        )
    }
}
