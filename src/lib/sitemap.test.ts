import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { createMemoryHistory, createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { sitemapStaticPaths, sitemapXML } from "./sitemap";

describe("public sitemap", () => {
  test("includes the public homepage but excludes the sitemap endpoint", () => {
    const root = createRootRoute({ staticData: { sitemap: false } });
    const home = createRoute({ getParentRoute: () => root, path: "/", staticData: { sitemap: true } });
    const endpoint = createRoute({ getParentRoute: () => root, path: "/sitemap.xml", staticData: { sitemap: false } });
    const router = createRouter({ routeTree: root.addChildren([home, endpoint]), history: createMemoryHistory({ initialEntries: ["/"] }) });
    assert.deepEqual(sitemapStaticPaths(router), ["/"]);
  });

  test("uses the published domain and does not invent a lastmod date", () => {
    const xml = sitemapXML("https://goneighbors.lovable.app", [{ path: "/" }]);
    assert.ok(xml.includes("<loc>https://goneighbors.lovable.app/</loc>"));
    assert.ok(!xml.includes("<lastmod>"));
  });
});