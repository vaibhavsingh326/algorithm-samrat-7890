export default {
  protectedRoutes: [
    { route: "/users", methods: ["POST", "PUT", "DELETE", "PATCH"] },
    { route: "/orders",methods: ["POST", "PUT", "DELETE", "PATCH"] },
    { route: "/cart", methods:  ["POST", "PUT", "DELETE", "PATCH"] },
    { route: "/adminorders", methods:  ["POST", "PUT", "DELETE", "PATCH"] },
  ]
}

// Employees, departments & cats are not protected.