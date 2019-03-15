import React from 'react';
import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';
import axios from 'axios';

class Index extends React.Component {

    static async getInitialProps() {
        let userData = {};

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            userData = response.data;
        } catch(err) {
            console.error(err);
        }
        
        return {initialData: [1,2,3,4]};
    }


    constructor(props) {
        super(props);

        this.state = {
            title: "i am index page"
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
    }
    
    componentWillMount() {
        console.log('componentWillMount');

    }

    componentWillUnmount() {
        console.log('componentWillUnmount');

    }

    componentDidUpdate() {
        console.log('componentDidUpdate');

    }


    updateTitle() {
        this.setState({title: "i am updated indewx page"});
    }

    render() {
        console.log('render');
        const { title } = this.state;

        return (
            <BaseLayout>
                <h1 className="fromPage"> i am test element</h1>
                <h2> {this.state.title} </h2>
                <button onClick={this.updateTitle}> Change title </button>
            </BaseLayout>
        )
    }
}

export default Index;