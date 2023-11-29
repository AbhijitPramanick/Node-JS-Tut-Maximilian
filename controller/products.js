const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render("add-products", {
      pageTitle: "Add Products",
      path: "/admin/add-products",
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
}

exports.postAddProduct = (req, res, next) => {
    console.log(`In Products middleware`);
    products.push({ title: req.body.title });
    res.redirect("/");
  }

exports.getProducts = (req, res, next) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  }