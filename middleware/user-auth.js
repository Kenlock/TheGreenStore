export default function ({ store, redirect, app }) {
  if (!app.$auth.loggedIn) {
    store.commit('modals/changeLoginModal', true)
    store.commit('setAuthStatus', {
      status: true,
      message: 'Please Login first'
    })
    return redirect('/login')
  }
}
