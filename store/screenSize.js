export const state = () => ({
  width: 0,
  height: 0
})

export const mutations = {
  setScreenSize(state, screenSize) {
    state.width = screenSize.width
    state.height = screenSize.height
  }
}
