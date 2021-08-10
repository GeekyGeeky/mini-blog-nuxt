export default function ({ store, redirect }) {
    console.log('authenticate');
    if (!store.getters.isLoggedIn) {
        redirect('/login')
    }
}