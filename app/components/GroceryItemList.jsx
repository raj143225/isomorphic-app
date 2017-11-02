import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import GroceryItem from './GroceryItem.jsx';
import GroceryListAddItem from './GroceryListAddItem.jsx';
import * as groceryItemsActions from '../actions/groceryItemsActions.jsx';


class GroceryItemList extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            groceryItem: {name: '', purchased: false}
        };

        this.handleInputValue = this.handleInputValue.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleInputValue(event) {
        let groceryItem = Object.assign({}, this.state.groceryItem);
        groceryItem['name'] = event.target.value;
        this.setState({groceryItem: groceryItem});
    }

    addItem(event) {
        event.preventDefault();
        this.props.actions.addItem(this.state.groceryItem);
        this.setState({groceryItem: {name: '', purchased: false}});
    }

    render() {
        return (
            <div>
                <h1>Grocyry Listify</h1>
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
}

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

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItemList);