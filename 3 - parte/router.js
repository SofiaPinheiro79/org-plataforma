export default class Router {
    constructor(routes) {
      this.routes = routes;
      window.addEventListener('hashchange', () => this.handle());
      window.addEventListener('load', () => this.handle());
    }
  
    handle() {
      const path = location.hash.slice(1) || '/';
      const route = this.routes[path] || this.routes['/404'];
      route();
    }
  }
