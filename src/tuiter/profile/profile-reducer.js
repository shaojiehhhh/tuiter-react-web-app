import profile from "./profile.json";

const profileReducer = (state = profile, action) => {
    switch (action.type) {
        case "update-profile":
            return {...state, ...action.profile};
        default:
            return state;
    }
};

export default profileReducer;

