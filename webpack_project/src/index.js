console.log(this === window)

if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('register success ', registration)
    }).catch(error => {
      console.error('register error ', error)
    })
  })
}
