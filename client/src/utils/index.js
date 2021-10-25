const isExtension = !!chrome.storage

// storage
export const storage = {

  getItem(key) {
    return new Promise(resolve => {
      let val

      isExtension && chrome.storage.sync.get([key], res => {
        val = res[key] || ''
      })

      !isExtension && (val = localStorage.getItem(key))

      resolve(val)
    })
  },

  setItem(key, value) {
    return new Promise(resolve => {

      isExtension && chrome.storage.sync.set({key, value}, () => {
        resolve()
      })

      !isExtension && localStorage.setItem(key, JSON.stringify(value))
      resolve()
    })
  }
}