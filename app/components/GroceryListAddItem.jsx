import React from 'react';

class GroceryListAddItem extends React.Component {

    render() {
        return (
            <div className="grocery-addItem">
                <form onSubmit={this.props.addItem}>
                    <input value={this.props.input.name} onChange={this.props.onChange} />
                    <button> Add Item </button>
                </form>
            </div>
        );
    }
}


export default GroceryListAddItem;