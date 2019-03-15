import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

import {Link} from '../routes';
import axios from 'axios';



class Portfolios extends React.Component {

    static async getInitialProps() {
        let posts = [];

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = response.data;
        } catch(err) {
            console.error(err);
        }
        
        return {posts: posts.splice(0, 10)};
    }

    renderPosts(posts) {

        return posts.map((post) => {
            return (
                <li key={index}>
                <Link route={`/portfolio?id=${post.id}`}>
                    <a style={{'fontSize': '20px'}}>{post.title}</a>
                </Link>
                </li>

            )
        })
    
    }

// cliunmdky
    render() {
        const { posts } = this.props;

        return (
         <BaseLayout>
             <h1>I am Portfolio page </h1>
             <ul>
                 { this.renderPosts(posts) }
             </ul>
         </BaseLayout>
        )
    }
}
export default Portfolios;