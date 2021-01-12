import React, {Component} from 'react';
import Tuple from './Tuple'
import PropTypes from 'prop-types';

class Table extends Component{
    constructor(props) {
        super(props)
        this.state = {
            attr: [],
            items: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:5000/permiso/view")
            .then(resp => {
                return resp.json()
            })
            .then(dict => {
                this.setState({
                    attr: dict.attr,
                    items: dict.lista
                })
            })
    }

    render() {
        const {attr, items} = this.state;
        return (
            <table>
                <thead>
                    
                        {attr.map(atributo =>(
                            <Tuple head={true} data={atributo} actual={0} cells={atributo.lenght} />    
                        ))}
                    
                </thead>
                <tbody>
                    
                        {items.map(obj => (
                            console.log(obj)
                        ))}
                    
                </tbody>
            </table>
        )
    }
}

Table.propTypes = {
    data: PropTypes.string,
}

export default Table