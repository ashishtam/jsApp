const axios = {
  get: () => new Promise(res => res({
    data: [{userId: 1, id: 1, title: 'Mock with Jest', body: 'Unit Testing'},
      {userId: 1, id: 2, title: 'Mock with Jest 2', body: 'Unit Testing'}]
  }))
}

export default axios
