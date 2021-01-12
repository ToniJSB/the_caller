import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Cell extends Component{
    render () {
        return (
            <td>{this.props.data} </td>
        )
    }
}

Cell.propTypes = {
    data: PropTypes.string
}

export default Cell