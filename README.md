# auto-commit

此仓库出现的伴随两个功能

1. 克隆任意用户的仓库
2. 意味保持 GitHub 常绿的脚本命令

## 自动提交

自动提交前请确保本地或服务器上安装有`git`

并确保能本地执行以下脚本命令

- `git commit`
- `git push`

若未能成功执行，请在本机自行生成 `publickey` 放入 您的 `github` `ssh`内

Then

如果满足上述条件，你可以稍微更改您所有需要更改的代码，并执行一下命令开启服务

```
npm run serve

or

yarn run serve
```

> 放在服务器上更 nice 哦

## 克隆任意用户的代码仓库

### ① 修改配置文件

到`package.json`中切换需要克隆地址的用户名

```
"config": {
    "port": "1111",
    "dir": "repos",
    "user": "CHANGE YOUR GITHUB_USERNAME"
},
```

Then，使用脚本命令

```
npm run clone

// or

yarn run clone
```

### ② 使用脚本命令传参

通过命令传参的方式注入

```
npm run clone -- xxx // xxx is your github_username

or

yarn run clone -- xxx // xxx is your github_username

```


![Alt](https://repobeats.axiom.co/api/embed/58caf6203631bcdb9bbe22f0728a0af1683dc0bb.svg 'Repobeats analytics image')
