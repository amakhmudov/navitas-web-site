import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { dbFixture } from "./db-fixture.js";

/** MSW node server — intercepts fetch("/data/db.json") in all tests. */
export const server = setupServer(http.get("/data/db.json", () => HttpResponse.json(dbFixture)));
