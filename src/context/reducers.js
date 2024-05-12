export default (state, action) => {

    switch (action.type) {

        case 'ADD_NAME':

            const { name } = action.payload;
            const newList = [...state.nameList, name]

            return {
                ...state,
                nameList: newList
            }

        break;

        case 'CLEAN_LIST': 
            return {
                ...state, 
                nameList: []
            }
        break;

        case 'CLEAN_USERNAME': 
            return {
                ...state, 
                username: ""
            }
        break;

        case 'SET_USERNAME': 
            return {
                ...state, 
                username: action.payload.username
            };
        break;


        default:
            return {
                ...state
            };
        break;

    }

}