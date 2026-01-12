import { Page } from "@playwright/test";
import { PageObjectManager } from "../pages/PageObjectManager";

export const pageFixture = {
    // @ts-ignore
    page: undefined as Page,
    // @ts-ignore
    pageManager: undefined as PageObjectManager
}