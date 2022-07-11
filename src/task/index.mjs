import { ToadScheduler } from 'toad-scheduler'
import { job as commitJob } from './commit.mjs'

const jobs = [commitJob]

export const scheduler = new ToadScheduler()

jobs.forEach((job) => {
  scheduler.addSimpleIntervalJob(job)
})

export function stopAll() {
  scheduler.stop()
}
