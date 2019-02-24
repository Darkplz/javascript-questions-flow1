   let myPromise = new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve("resolved!")
       }, 1500)
   });

   (function () {
       myPromise.then((res, err) => {
           console.log(res)
       })
   })()