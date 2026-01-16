import { Page } from "@playwright/test";
import { LoginPage } from "./loginPage";
import { OffersPage } from "./offersPage";
import { FavoritesPage } from "./favoritesPage";
import { CheckoutPage } from "./checkoutPage";
import { OrdersPage } from "./ordersPage";

export class PageObjectManager {
  private page: Page;

  // Page object instances - initialized as undefined for lazy loading
  private loginPage?: LoginPage;
  private offersPage?: OffersPage;
  private favoritesPage?: FavoritesPage;
  private checkoutPage?: CheckoutPage;
  private ordersPage?: OrdersPage;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Lazy loading getter for LoginPage
   * Creates instance only on first access
   */
  getLoginPage(): LoginPage {
    return this.loginPage ??= new LoginPage(this.page);
  }

  /**
   * Lazy loading getter for OffersPage
   * Creates instance only on first access
   */
  getOffersPage(): OffersPage {
    return this.offersPage??= new OffersPage(this.page);
  }

  /**
   * Lazy loading getter for FavoritesPage
   * Creates instance only on first access
   */
  getFavoritesPage(): FavoritesPage {
    return this.favoritesPage??= new FavoritesPage(this.page);
  }

  /**
   * Lazy loading getter for CheckoutPage
   * Creates instance only on first access
   */
  getCheckoutPage(): CheckoutPage {
    return this.checkoutPage??= new CheckoutPage(this.page);
  }

  /**
   * Lazy loading getter for OrdersPage
   * Creates instance only on first access
   */
  getOrdersPage(): OrdersPage {
    return this.ordersPage??= new OrdersPage(this.page);
  }
}
