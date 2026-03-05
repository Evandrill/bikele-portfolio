import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the notifyOwner function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

type TrpcContextType = Omit<TrpcContext, "req" | "res"> & {
  req: Partial<TrpcContext["req"]>;
  res: Partial<TrpcContext["res"]>;
};

function createContactContext(): { ctx: TrpcContextType } {
  const ctx: TrpcContextType = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    },
    res: {},
  };

  return { ctx };
}

describe("contact.send", () => {
  it("sends a contact form message successfully", async () => {
    const { ctx } = createContactContext();
    const caller = appRouter.createCaller(ctx as TrpcContext);

    const result = await caller.contact.send({
      name: "John Doe",
      email: "john@example.com",
      subject: "Test Subject",
      message: "This is a test message",
    });

    expect(result).toEqual({
      success: true,
      message: "Message sent successfully",
    });
  });

  it("validates required fields", async () => {
    const { ctx } = createContactContext();
    const caller = appRouter.createCaller(ctx as TrpcContext);

    // Test missing name
    await expect(
      caller.contact.send({
        name: "",
        email: "john@example.com",
        subject: "Test",
        message: "Test",
      })
    ).rejects.toThrow();

    // Test invalid email
    await expect(
      caller.contact.send({
        name: "John",
        email: "invalid-email",
        subject: "Test",
        message: "Test",
      })
    ).rejects.toThrow();

    // Test missing subject
    await expect(
      caller.contact.send({
        name: "John",
        email: "john@example.com",
        subject: "",
        message: "Test",
      })
    ).rejects.toThrow();

    // Test missing message
    await expect(
      caller.contact.send({
        name: "John",
        email: "john@example.com",
        subject: "Test",
        message: "",
      })
    ).rejects.toThrow();
  });
});
