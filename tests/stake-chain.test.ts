import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { BetEventCreated } from "../generated/schema"
import { BetEventCreated as BetEventCreatedEvent } from "../generated/StakeChain/StakeChain"
import { handleBetEventCreated } from "../src/stake-chain"
import { createBetEventCreatedEvent } from "./stake-chain-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let betEventId = BigInt.fromI32(234)
    let title = "Example string value"
    let description = "Example string value"
    let options = ["Example string value"]
    let newBetEventCreatedEvent = createBetEventCreatedEvent(
      betEventId,
      title,
      description,
      options
    )
    handleBetEventCreated(newBetEventCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BetEventCreated created and stored", () => {
    assert.entityCount("BetEventCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BetEventCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "betEventId",
      "234"
    )
    assert.fieldEquals(
      "BetEventCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "title",
      "Example string value"
    )
    assert.fieldEquals(
      "BetEventCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "description",
      "Example string value"
    )
    assert.fieldEquals(
      "BetEventCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "options",
      "[Example string value]"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
