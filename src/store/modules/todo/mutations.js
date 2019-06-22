export default {
    addItemToList(state, { itemId, itemValue }) {
        state.items.push({
            itemId,
            itemValue,
            checked: false
        });
    }
};