import path from 'path';
import { createBullBoard as createBullBoardBase } from '@bull-board/api';
import type { BoardOptions, IServerAdapter } from '@bull-board/api/typings/app';
import type { BaseAdapter } from '@bull-board/api/dist/queueAdapters/base';

export { ExpressAdapter } from './ExpressAdapter';
export { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
export type { BaseAdapter } from '@bull-board/api/dist/queueAdapters/base';
export * from '@bull-board/api';

export function createBullBoard({
  queues,
  serverAdapter,
  options,
}: {
  queues: ReadonlyArray<BaseAdapter>;
  serverAdapter: IServerAdapter;
  options?: BoardOptions;
}) {
  return createBullBoardBase({
    queues,
    serverAdapter,
    options: {
      ...options,
      uiBasePath: options?.uiBasePath || path.join(__dirname, 'ui'),
    },
  });
}
