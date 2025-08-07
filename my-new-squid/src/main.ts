import { TypeormDatabase } from '@subsquid/typeorm-store'
import { Gravatar } from './model'
import { processor } from './processor'
import { events } from './abi/Gravity';
import { Log } from '@subsquid/evm-processor';
processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
	const gravatars: Map<string, Gravatar> = new Map();
	for (let block of ctx.blocks) {
		for (let log of block.logs) {
			const { id, owner, displayName, imageUrl } = extractData(log)
      let idString = '0x' + id;
      gravatars.set(idString, new Gravatar({
        id: idString,
        owner,
        displayName,
        imageUrl
      }))
		}
	}
	// apply vectorized transformations and aggregations

	// upsert batches of entities with batch-optimized ctx.store.save
	await ctx.store.upsert([...gravatars.values()])
});

/**
 * extract data from log
 * @param log 
 * @returns 
 */

function extractData(log: Log): { id: string, owner: string, displayName: string, imageUrl: string } {
	let result = {} as { id: string, owner: string, displayName: string, imageUrl: string };
	if (log.topics[0] === events.NewGravatar.topic) {
		const { id, owner, displayName, imageUrl } = events.NewGravatar.decode(log);
		const idString = id.toString(16);
		result = {
			id: idString,
			owner,
			displayName,
			imageUrl
		}
	} else if (log.topics[0] === events.UpdatedGravatar.topic) {
		const { id, owner, displayName, imageUrl } = events.UpdatedGravatar.decode(log);
		const idString = id.toString(16);
		result = {
			id: idString,
			owner,
			displayName,
			imageUrl
		}
	}
	return result;
}