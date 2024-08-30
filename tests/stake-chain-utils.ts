import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BetEventCreated,
  BetPlaced,
  BetSettled,
  SCHAINDistributed,
  ShareClaimed
} from "../generated/StakeChain/StakeChain"

export function createBetEventCreatedEvent(
  betEventId: BigInt,
  title: string,
  description: string,
  options: Array<string>
): BetEventCreated {
  let betEventCreatedEvent = changetype<BetEventCreated>(newMockEvent())

  betEventCreatedEvent.parameters = new Array()

  betEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "betEventId",
      ethereum.Value.fromUnsignedBigInt(betEventId)
    )
  )
  betEventCreatedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  betEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  betEventCreatedEvent.parameters.push(
    new ethereum.EventParam("options", ethereum.Value.fromStringArray(options))
  )

  return betEventCreatedEvent
}

export function createBetPlacedEvent(
  betEventId: BigInt,
  player: Address,
  amount: BigInt,
  outcome: BigInt
): BetPlaced {
  let betPlacedEvent = changetype<BetPlaced>(newMockEvent())

  betPlacedEvent.parameters = new Array()

  betPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "betEventId",
      ethereum.Value.fromUnsignedBigInt(betEventId)
    )
  )
  betPlacedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  betPlacedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  betPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "outcome",
      ethereum.Value.fromUnsignedBigInt(outcome)
    )
  )

  return betPlacedEvent
}

export function createBetSettledEvent(
  betEventId: BigInt,
  outcome: BigInt
): BetSettled {
  let betSettledEvent = changetype<BetSettled>(newMockEvent())

  betSettledEvent.parameters = new Array()

  betSettledEvent.parameters.push(
    new ethereum.EventParam(
      "betEventId",
      ethereum.Value.fromUnsignedBigInt(betEventId)
    )
  )
  betSettledEvent.parameters.push(
    new ethereum.EventParam(
      "outcome",
      ethereum.Value.fromUnsignedBigInt(outcome)
    )
  )

  return betSettledEvent
}

export function createSCHAINDistributedEvent(
  player: Address,
  amount: BigInt
): SCHAINDistributed {
  let schainDistributedEvent = changetype<SCHAINDistributed>(newMockEvent())

  schainDistributedEvent.parameters = new Array()

  schainDistributedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  schainDistributedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return schainDistributedEvent
}

export function createShareClaimedEvent(
  betEventId: BigInt,
  player: Address,
  amount: BigInt
): ShareClaimed {
  let shareClaimedEvent = changetype<ShareClaimed>(newMockEvent())

  shareClaimedEvent.parameters = new Array()

  shareClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "betEventId",
      ethereum.Value.fromUnsignedBigInt(betEventId)
    )
  )
  shareClaimedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  shareClaimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return shareClaimedEvent
}
