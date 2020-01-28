module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/styles/_variables.scss"; @import "@/styles/_global.scss"; @import "@/styles/_animate.scss";`
        }
      }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/local-page/'
    : '',
    productionSourceMap: false,
  };