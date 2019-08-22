export default {
    addNewTask(state, { taskContent, checked }) {
        state.list.push({
            taskContent,
            checked,
        });
    }
};