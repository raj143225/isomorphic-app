import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import GroceryItem from './GroceryItem.jsx';
import GroceryListAddItem from './GroceryListAddItem.jsx';
import * as groceryItemsActions from '../actions/groceryItemsActions.jsx';


 const GroceryItemList = React.createClass({

    getInitialState: function() {
        return {
            groceryItem: {name: '', purchased: false}
        }
    },

    handleInputValue(event) {
        let groceryItem = Object.assign({}, this.state.groceryItem);
        groceryItem['name'] = event.target.value;
        this.setState({groceryItem: groceryItem});
    },

    addItem(event) {
        event.preventDefault();
        this.props.actions.addItem(this.state.groceryItem);
        this.setState({groceryItem: {name: '', purchased: false}});
    },

    render() {
        return (
            <div>
                <h1>Grocery Listify</h1>
                <div>
                    {this.props.items.map(item => <GroceryItem key={item.name}
                                                               item={item}
                                                               delete={this.props.actions.deleteItem}
                                                               updateItem={this.props.actions.updateItem}/>)}
                </div>
                <GroceryListAddItem onChange={this.handleInputValue}
                                    addItem={this.addItem}
                                    input={this.state.groceryItem}/>

            </div>
        );
    }
});

function mapStateToProps(state, ownProps) {
    return {
        items: state.groceryItems
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(groceryItemsActions, dispatch)
    };
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(GroceryItemList);