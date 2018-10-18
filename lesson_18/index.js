const checkAuth = new Promise ((resolve,reject) => {
  setTimeout(() => {
    resolve( {isAuth: true} )
  }, 2000);
})
  .then ((authInfo) => {
    if (!authInfo.isAuth) {
      return new Promise ((resolve,reject) => resolve(null))
    }
    return new Promise ((resolve,reject) => {
      setTimeout(() => {
        resolve( {name: 'Max'} )
      },2000);
    });
  })
  .then ((user) => {
    console.log(user.name);
  })
