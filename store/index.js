
export const state = () => ({
    isLoggedIn: false
});

export const getters = {

}

export const mutations = {
    persistUserLogin: state => {
        state.isLoggedIn = true;
    }
}

export const actions = {

}

