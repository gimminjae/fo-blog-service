const commonUtil = {
  makeSearchParam(param) {
    let searchParams = []

    console.log(param)
    if (!(param === null || param === undefined)) {
      for (let key in param) {
        searchParams.push(`${key}=${param[key]}`)
      }
    }
    console.log(searchParams)
    return searchParams.join(',')
  }
}

export default commonUtil
