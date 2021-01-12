import React, {Component} from 'react';
import Cell from './Cell'
import HeadCell from './HeadCell'
import PropTypes from 'prop-types';

class Tuple extends Component{
    constructor(props) {
        super(props)
        this.state = {
            actual: this.props.actual,
        
        }
    }

    render() {
        if (this.state.actual === 0){
            this.props.actual = this.props.actual+1 
            return ("<tr>")

        }
        else if (this.state.actual === this.props.cells){
            this.setState.actual = 0 
            return "</tr>"
        }
        if (this.props.head === false){
            this.props.actual = this.props.actual++ 
            return (
                    <Cell data={this.props.data}></Cell>                
            )
        }
        else if(this.props.head === true){
            this.props.actual = this.props.actual++ 
            return (
                    <HeadCell data={this.props.data}></HeadCell>
            )
        }
    }
}

Tuple.propTypes = {
    head: PropTypes.bool,
    data: PropTypes.string,
    actual: PropTypes.number,
    cells: PropTypes.number
}

export default Tuple