import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class ViewTable extends Component {
    render() {
        return (
            <div class="container">
                <div id="search" class="d-flex">
                    <a class="btn btn-primary" data-toggle="collapse" href="#filters" role="button" aria-expanded="false" aria-controls="filters">
                        search
                    </a>
                    
                    <div class="container d-flex flex-row">
                        
                        <p class=""> quieres borrar?</p> <a href="#"><button>Delete</button></a>
                    </div>
                    
                </div>
                <div id="filters">
                    <div class="card card-body">
                        <div id="filter_form" method="POST">
                            <div class="btn-group">
                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                    Añade un filtro
                                    <span class="caret"></span>
                                </button>
                                <ul class="dropdown-menu" id="toFilter">
    
                                </ul>
                            </div>
                            <table class="table table-responsive d-flex  filtros">
    
                            </table>
                            <button type="submit" id="filtra" class="btn btn-sm btn-primary">buscar
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="d-flex bg-light">
                    <table class="table" id="tabla">
    
                    </table>
                </div>
            </div>
        );

    }
}

export default ViewTable;
