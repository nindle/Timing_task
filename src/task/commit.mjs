#!/usr/bin/env zx

import { SimpleIntervalJob, AsyncTask } from 'toad-scheduler'
import fs from 'fs'
import path from 'path'

let count = 1 // 记录提交了多少次
const config = {
  taskName: 'commit_task',
  schedule: { hours: 2, runImmediately: true } // Submit every hour
}
const task = new AsyncTask(config.taskName, work)
export const job = new SimpleIntervalJob(config.schedule, task)

async function work() {
  if (Math.random() > 0.2) {
    
    await read2write()
    await handleGit()
  }
}

export function stop() {
  job.stop()
}

/**
 * 文件读写 I/O
 */
async function read2write() {
  let data = await fs.readFileSync(path.resolve(__dirname, '../test.txt'), {
    encoding: 'utf-8'
  })
  data += `this is my ${count++} commit --->  ${new Date()} \r\n`
  await fs.writeFileSync(path.resolve(__dirname, '../test.txt'), data)
}

/**
 * 处理git commit push
 */
async function handleGit() {
  await $`git add .`
  await $`git commit -m 'This is a meaningless submission at ${count}'`
  await $`git pull`
  await $`git push`
  console.log('done')
}
