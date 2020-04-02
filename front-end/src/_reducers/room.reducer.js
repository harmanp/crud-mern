const initialState = { 
    anchor: 'left',
    room: [],
    open: false,
    id: '',
    name: '',
    // mobile: '',
    // phone_number: '',
    // address: ''
};
export function room(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_ROOM':
            return {
                ...state,
                room: action.room
            };
        case 'ROOM_DETAIL':
            return {
                ...state,
                id: action.id,
                name: action.room_name,
                status: action.status
                // mobile: action.mobile,
                // phone_number: action.phone_number,
                // address: action.address
            };
        case "USER_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };
        default:
            return state
        }
}