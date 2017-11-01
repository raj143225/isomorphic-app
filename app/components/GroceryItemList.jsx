import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import GroceryItem from './GroceryItem.jsx';
import GroceryListAddItem from './GroceryListAddItem.jsx';
import * as groceryItemsActions from '../actions/groceryItemsActions.jsx';


class GroceryItemList extends React.Component {
    render() {
        return (
            <div>
                <h1>Grocyry Listify</h1>
                <div>
                    {this.props.items.map(item => <GroceryItem key={item.name} item={item} />)}
                </div>
                <GroceryListAddItem />

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