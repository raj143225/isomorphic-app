import React from 'react';

class GroceryItemList extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.delete = this.delete.bind(this);
        this.togglePurchased = this.togglePurchased.bind(this);
    }

    delete(event) {
        event.preventDefault();
        this.props.delete(this.props.item.name);
    }

    togglePurchased(event) {
        event.preventDefault();
        const newItem = Object.assign({}, this.props.item);

        if (this.props.item.purchased) {
            newItem.purchased = 0;
        } else {
            newItem.purchased = 1;
        }
        this.props.updateItem(newItem);
    }
    render() {
        return (
            <div className="grocery-item row">
                <div className="six columns">
                    <h4 className={this.props.item.purchased ? "strikethrough" : ""}>
                        {this.props.item.name}
                    </h4>
                    <form className="three columns" onSubmit={this.togglePurchased}>
                        <button className={this.props.item.purchased ? "" : "button-primary"}>
                            {this.props.item.purchased ? "Unbuy" : "Buy"}
                        </button>
                    </form>
                    <form className="three columns" onSubmit={this.delete}>
                        <button>&times;</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default GroceryItemList;