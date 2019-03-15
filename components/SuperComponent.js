import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';


class SuperComponent extends React.Component {

    constructor(props) {
        super(props);
        //this.someVariable = 'Just some variable';
    }

    alertName(title) {
        alert(title);
    }

    render() {
        return (
            <BaseLayout>
                 <div>I am blog page </div>
            </BaseLayout>
        )
    }
}

export default SuperComponent;