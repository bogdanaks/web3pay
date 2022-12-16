import { Test, TestingModule } from "@nestjs/testing"
import { UserService } from "./user.service"

describe("UserService", () => {
  let service: UserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService]
    }).compile()

    service = module.get<UserService>(UserService)
  })

  describe("createUser", () => {
    it("byEmail", async () => {
      const result = {
        id: 1,
        is_active: true,
        email: "test@email.com",
        password: "anyPassword",
        address: "anyPassword",
        is_email_active: true,
        activated_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      }

      const res = await service.createUserByEmail({
        email: "test@email.com",
        password: "anyPassword"
      })
      console.log("res", res)

      // jest.spyOn(service, "createUserByEmail").mockImplementation(() => result)

      // expect(await catsController.findAll()).toBe(result)
    })
  })
})
