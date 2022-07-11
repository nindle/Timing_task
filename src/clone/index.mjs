#!/usr/bin/env zx

let [, , , user] = process.argv
user = user || process.env.npm_package_config_user // 克隆用户名
const dir = process.env.npm_package_config_dir // 克隆目录存放的文件夹

// 获取仓库列表
const data = await fetch(`https://api.github.com/users/${user}/repos`)
const urls = await data.json()
const repos = urls.filter((info) => !info.fork).map((info) => info.git_url)

// 创建文件夹
await $`rm -rf ${dir}`
await $`mkdir ${dir}`
cd(`./${dir}`)
// 克隆拉取
Promise.all(repos.map((url) => $`git clone ${url}`))
