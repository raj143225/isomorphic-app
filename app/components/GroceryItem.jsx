import React from 'react';

class GroceryItemList extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.delete = this.delete.bind(this);
        this.togglePurchased = this.togglePurchased.bind(this);
    }

    delete(event) {
        event.preventDefault();
    }

    togglePurchased(event) {
        event.preventDefault();

        if  (this.props.item.purchased) {
            console.log('call unbuy action');
        }   else {
            console.log('call buy action');
        }
    }
    render() {
        return (
            <div>
                <div>
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