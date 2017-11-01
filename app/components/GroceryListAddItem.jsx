import React from 'react';

class GroceryListAddItem extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            input: ""
        };

        this.handleInputValue = this.handleInputValue.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleInputValue(event) {
        return this.setState({input: event.target.value});
    }

    addItem(event) {
        event.preventDefault();
        console.log('HEHEHEH');
    }

    render() {
        return (
            <div className="grocery-addItem">
                <form onSubmit={this.addItem}>
                    <input value={this.state.input} onChange={this.handleInputValue}/>
                    <button> Add Item </button>
                </form>
            </div>
        );
    }
}


export default GroceryListAddItem;