import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
    render() {
        return (
            <div className="app">
                <nav>
                    <Link to="/users">Users</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/">Home</Link>
                </nav>
                <main>
                    <h1>Home</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque cupiditate enim consequatur dolorum aliquam temporibus, sit numquam harum qui aut obcaecati ut dolores perferendis eos repellendus repudiandae atque beatae autem accusantium quam voluptates modi maxime amet? Odit, quia, est. Cum, voluptas, consequuntur! Odit commodi vitae, temporibus natus at quod, fuga vel totam nihil explicabo obcaecati tempora, atque. Pariatur fuga dolorum similique officia aperiam iusto tenetur. This motherf....
                    </p>
                </main>
            </div>
        )
    }
}
