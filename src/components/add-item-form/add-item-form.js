import React, { Component } from "react";

import './add-item-form.css';
export default class AddItemForm extends Component {

    render() {
        const { onItemAdded } = this.props;

        return (
            <div className="add-item-form" >
                <button type="button"
                        className="btn btn-outline-secondary"
                        onClick={ () => onItemAdded('New Text') }>
                    Add Item
                </button>
            </div>
        );
    }
}