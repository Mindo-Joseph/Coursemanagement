import React from 'react';
import { render } from 'react-dom';

function Hey() {
    return (
        <div>Hello</div>
    )
}
render(<Hey/>, document.getElementById('app'))