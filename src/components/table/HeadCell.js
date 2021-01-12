import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HeadCell extends Component{

    render() {
        return (
            <th>{this.props.data}</th>
        )
    }
}

HeadCell.propTypes = {
    data: PropTypes.string,
}

export default HeadCell