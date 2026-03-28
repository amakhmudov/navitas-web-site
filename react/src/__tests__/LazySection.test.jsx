import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import LazySection from "@/components/LazySection.jsx";

/**
 * jsdom doesn't implement IntersectionObserver, so we provide a manual mock
 * that lets tests control exactly when the "intersecting" callback fires.
 * Must be a constructor function (class) — vi.fn() plain objects don't satisfy `new`.
 */
let observerCallback;
const mockObserver = {
  observe: vi.fn(),
  disconnect: vi.fn(),
};

beforeEach(() => {
  // Reset call history so counts don't bleed between tests
  mockObserver.observe.mockClear();
  mockObserver.disconnect.mockClear();

  // Using `function` (not arrow) so it works as a constructor with `new`
  vi.stubGlobal("IntersectionObserver", function MockIntersectionObserver(callback) {
    observerCallback = callback;
    return mockObserver;
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("LazySection", () => {
  it("renders children as invisible initially (opacity 0)", () => {
    const { container } = render(
      <LazySection>
        <p>Content</p>
      </LazySection>,
    );

    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyle({ opacity: "0" });
  });

  it("becomes visible (opacity 1) after the IntersectionObserver fires", () => {
    const { container } = render(
      <LazySection>
        <p>Content</p>
      </LazySection>,
    );

    act(() => {
      observerCallback([{ isIntersecting: true }]);
    });

    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyle({ opacity: "1" });
  });

  it("stays invisible when the observer reports not intersecting", () => {
    const { container } = render(
      <LazySection>
        <p>Content</p>
      </LazySection>,
    );

    act(() => {
      observerCallback([{ isIntersecting: false }]);
    });

    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyle({ opacity: "0" });
  });

  it("disconnects the observer after first intersection (one-shot)", () => {
    render(
      <LazySection>
        <p>Content</p>
      </LazySection>,
    );

    act(() => {
      observerCallback([{ isIntersecting: true }]);
    });

    expect(mockObserver.disconnect).toHaveBeenCalledTimes(1);
  });

  it("disconnects on unmount to prevent memory leaks", () => {
    const { unmount } = render(
      <LazySection>
        <p>Content</p>
      </LazySection>,
    );

    unmount();
    expect(mockObserver.disconnect).toHaveBeenCalled();
  });

  it("renders children content regardless of visibility", () => {
    render(
      <LazySection>
        <p>Hello world</p>
      </LazySection>,
    );

    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("applies extra className to the wrapper", () => {
    const { container } = render(
      <LazySection className="my-section">
        <p>Content</p>
      </LazySection>,
    );

    expect(container.firstChild).toHaveClass("my-section");
  });
});
