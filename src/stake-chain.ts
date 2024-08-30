import {
  BetEventCreated as BetEventCreatedEvent,
  BetPlaced as BetPlacedEvent,
  BetSettled as BetSettledEvent,
  SCHAINDistributed as SCHAINDistributedEvent,
  ShareClaimed as ShareClaimedEvent
} from "../generated/StakeChain/StakeChain"
import {
  BetEventCreated,
  BetPlaced,
  BetSettled,
  SCHAINDistributed,
  ShareClaimed
} from "../generated/schema"

export function handleBetEventCreated(event: BetEventCreatedEvent): void {
  let entity = new BetEventCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.betEventId = event.params.betEventId
  entity.title = event.params.title
  entity.description = event.params.description
  entity.options = event.params.options

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBetPlaced(event: BetPlacedEvent): void {
  let entity = new BetPlaced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.betEventId = event.params.betEventId
  entity.player = event.params.player
  entity.amount = event.params.amount
  entity.outcome = event.params.outcome

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBetSettled(event: BetSettledEvent): void {
  let entity = new BetSettled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.betEventId = event.params.betEventId
  entity.outcome = event.params.outcome

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSCHAINDistributed(event: SCHAINDistributedEvent): void {
  let entity = new SCHAINDistributed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.player = event.params.player
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleShareClaimed(event: ShareClaimedEvent): void {
  let entity = new ShareClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.betEventId = event.params.betEventId
  entity.player = event.params.player
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
