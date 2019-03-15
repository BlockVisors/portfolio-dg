import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Link from 'next/link';
import axios from 'axios';
import { withRouter } from 'next-router';

class Portfolio extends React.Component {

    static async getInitialProps({query}) {
        const portfolioId = query.id;
        let portfolio = {};


        try {
            const response = axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`);
            portfolio = response.data;

        } catch(err) {
            console.log(err);
        }
        return {};
    }
    render() {
        const { portfolio } = this.props;
        //const portfolio = this.props.portfolio;
        return (
            <BaseLayout>
                <h2> {portfolio.title} </h2>
                <p> {portfolio.body} </p>
                <p> Id: {portfolio.id} </p>


            </BaseLayout>
        )
    }
}
export default withRouter(Portfolio);