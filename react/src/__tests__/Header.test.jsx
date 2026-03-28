import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { http, HttpResponse } from "msw";
import Header from "@/Header.jsx";
import { Wrapper } from "@/test/test-utils.jsx";
import { server } from "@/test/server.js";
import { dbFixture } from "@/test/db-fixture.js";

// IntersectionObserver stub (not used by Header, but avoids errors if
// any child component imports something that references it)
beforeEach(() => {
  vi.stubGlobal(
    "IntersectionObserver",
    vi.fn(() => ({ observe: vi.fn(), disconnect: vi.fn() })),
  );
});
afterEach(() => vi.restoreAllMocks());

describe("Header", () => {
  it("renders the page title for screen readers", () => {
    render(<Header />, { wrapper: ({ children }) => <Wrapper>{children}</Wrapper> });
    expect(screen.getByText("Naiton Business Suite")).toBeInTheDocument();
  });

  it("renders all navigation links from db.json", async () => {
    render(<Header />, { wrapper: ({ children }) => <Wrapper>{children}</Wrapper> });

    for (const item of dbFixture.menuItems) {
      await waitFor(() => expect(screen.getByText(item.label)).toBeInTheDocument());
    }
  });

  it("renders the correct phone href from db.json", async () => {
    render(<Header />, { wrapper: ({ children }) => <Wrapper>{children}</Wrapper> });

    const link = await screen.findByRole("link", { name: /020/i });
    expect(link).toHaveAttribute("href", `tel:${dbFixture.contact.phone}`);
  });

  it("renders the formatted phone display text", async () => {
    render(<Header />, { wrapper: ({ children }) => <Wrapper>{children}</Wrapper> });

    // Use regex — non-breaking spaces (\u00a0) in the display string can cause
    // exact-text matchers to fail after Testing Library normalizes whitespace
    await screen.findByText(/020.?893.?2732/);
  });

  it("falls back to hardcoded phone if contact is missing from db.json", async () => {
    // Override the default MSW handler with one that omits the contact field
    server.use(http.get("/data/db.json", () => HttpResponse.json({ ...dbFixture, contact: undefined })));

    render(<Header />, { wrapper: ({ children }) => <Wrapper>{children}</Wrapper> });

    const link = await screen.findByRole("link", { name: /020/i });
    // Should fall back to the hardcoded default rather than rendering a broken href
    expect(link.getAttribute("href")).toMatch(/tel:\+/);
  });

  it("marks the current route link as active", async () => {
    render(<Header />, {
      wrapper: ({ children }) => <Wrapper initialPath="/solutions/">{children}</Wrapper>,
    });

    const solutionsLink = await screen.findByRole("link", { name: "Solutions" });
    expect(solutionsLink).toHaveClass("active");
  });
});
