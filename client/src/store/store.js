import data from './data'

class store {
  constructor(props) {
    this.props = props
    this.data = data.map((item, index) => ({
      ...item,
      id: index,
    }))
  }

  get = props => {
    if (typeof props === "undefined")
      return this.data
      
    if (props.id) {
      // const res = this.data.filter(item => item.id === props.id)
      // console.log(props.id)
      // if (res.length > 0)
      //   return res[0]
      // return {}
      return this.data[props.id]
    }

    return this.data
  }

  search = props => {
    if (props.name)
      return this.data.filter(item => item.name.toLowerCase().includes(props.name.toLowerCase()))
    return []
  }
}

export default store