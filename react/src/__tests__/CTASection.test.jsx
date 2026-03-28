import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CTASection from "@/components/CTASection.jsx";
import { Wrapper } from "@/test/test-utils.jsx";
import { dbFixture } from "@/test/db-fixture.js";

describe("CTASection", () => {
  it("renders the title prop", async () => {
    render(<CTASection title="Get in touch" />, {
      wrapper: ({ children }) => <Wrapper>{children}</Wrapper>,
    });

    expect(screen.getByText("Get in touch")).toBeInTheDocument();
  });

  it("renders phone links with the correct href from db.json", async () => {
    render(<CTASection title="CTA" />, {
      wrapper: ({ children }) => <Wrapper>{children}</Wrapper>,
    });

    const links = await screen.findAllByRole("link", { name: /020|demo/i });
    for (const link of links) {
      expect(link).toHaveAttribute("href", `tel:${dbFixture.contact.phone}`);
    }
  });

  it("displays the formatted phone number in the call button", async () => {
    render(<CTASection title="CTA" />, {
      wrapper: ({ children }) => <Wrapper>{children}</Wrapper>,
    });

    await waitFor(() => expect(screen.getByText(/020/)).toBeInTheDocument());
  });
});

/**
 * db.json structural contract — these tests act as a living spec.
 * If someone renames a field in db.json the corresponding test here
 * will fail immediately, making the breakage visible before runtime.
 */
import { dbFixture as db } from "@/test/db-fixture.js";

describe("db.json contract", () => {
  it("contact object has phone and phoneDisplay fields", () => {
    expect(db.contact).toHaveProperty("phone");
    expect(db.contact).toHaveProperty("phoneDisplay");
    expect(db.contact.phone).toMatch(/^\+/); // must be in E.164 format
  });

  it("every menuItem has id, label, and href", () => {
    for (const item of db.menuItems) {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("label");
      expect(item).toHaveProperty("href");
      expect(item.href).toMatch(/^\/.*\/$/); // must start and end with /
    }
  });

  it("every project has id, title, and alt", () => {
    for (const project of db.projects) {
      expect(project).toHaveProperty("id");
      expect(project).toHaveProperty("title");
      expect(project).toHaveProperty("alt");
    }
  });

  it("every client has id, name, and link", () => {
    for (const client of db.clients) {
      expect(client).toHaveProperty("id");
      expect(client).toHaveProperty("name");
      expect(client).toHaveProperty("link");
      expect(client.link).toMatch(/^https?:\/\//); // must be absolute URLs
    }
  });
});
