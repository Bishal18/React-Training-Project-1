/* Bishal */
const config = {
  debounceValue: 500,
  apiSettings: {
    baseURL: "https://reactprojectdbserver.azurewebsites.net",
    productRoute: "/products",
    categoryRoute: "/categories",
    orderRoute: "/orders",
    usersRoute: "/users"
  },
  carouselImages: [
    {
      url: "https://via.placeholder.com/2000x400.png?text=Carousel%20Image%201",
      title: "placeholder1"
    },
    {
      url: "https://via.placeholder.com/2000x400.png?text=Carousel%20Image%202",
      title: "placeholder2"
    },
    {
      url: "https://via.placeholder.com/2000x400.png?text=Carousel%20Image%203",
      title: "placeholder3"
    },
    {
      url: "https://via.placeholder.com/2000x400.png?text=Carousel%20Image%204",
      title: "placeholder4"
    },
    {
      url: "https://via.placeholder.com/2000x400.png?text=Carousel%20Image%205",
      title: "placeholder5"
    }
  ],
  navLinks: [
    {
      page: "Home",
      link: "/"
    },
    {
      page: "Categories",
      link: "/categories"
    },
    {
      page: "Products",
      link: "/products"
    },
    {
      page: "Cart",
      link: "/cart"
    },
    {
      page: "Checkout",
      link: "/checkout"
    }
  ],
  cartHeader: ["Name", "Price", "Qty", "Total", ""]
};

export default config;
