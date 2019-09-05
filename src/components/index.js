
const req = require.context('./', true, /\.(vue)$/i)
const Components = []
req.keys().map(key => {
  Components.push(req(key))
})
Components.install = (Vue, options = null) => {
  console.log(Vue)
  req.keys().map(key => {
    const name = key.match(/\w+/)[0]
    Vue.component(name, req(key))
  })
}
console.log(Components)

export default Components
