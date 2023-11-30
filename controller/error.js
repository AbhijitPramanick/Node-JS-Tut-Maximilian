exports.get404 = (req, res, next) => {
    console.log(`Middleware handling status 404 page`);
    res.status(404).render("page404", { pageTitle: "Page not found" ,path:"/404"});
  }