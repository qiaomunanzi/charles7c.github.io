# 本仓库由克隆而来，详情请关注以下页面↓↓↓
📝 **查尔斯的个人技术知识库，记录 & 分享个人碎片化、结构化、体系化的技术知识内容。** 
🐢 [GitHub Pages（完整体验）](https://blog.charles7c.top) | 🐇 [Gitee Pages（无法评论）](https://charles7c.gitee.io)

[English](./README.en.md) | 中文

# 查尔斯的知识库

<a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">
    <img src="https://img.shields.io/badge/文章%20License-CC%204.0%20BY--SA-blue.svg">
</a>
<a href="https://github.com/Charles7c/charles7c.github.io/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/源码%20License-MIT-blue.svg">
</a>
<a href="https://github.com/Charles7c/charles7c.github.io/actions/workflows/deploy-pages.yml" target="_blank">
    <img src="https://github.com/Charles7c/charles7c.github.io/actions/workflows/deploy-pages.yml/badge.svg">
</a>

## 开始

```bash
# 1.克隆本仓库
git clone https://github.com/Charles7c/charles7c.github.io.git
# 2.安装 PNPM
npm install pnpm -g
# 3.设置淘宝镜像源
pnpm config set registry https://registry.npmmirror.com/
# 4.安装依赖
pnpm install
# 5.dev 运行，访问：http://localhost:5173
pnpm dev
# 6.打包，文件存放位置：docs/.vitepress/dist
# 如果是部署到 GitHub Pages，可以利用 GitHub Actions，在 push 到 GitHub 后自动部署打包
# 详情见：.github/workflows/deploy-pages.yml，根据个人需要删减工作流配置
pnpm build
# 7.部署
# 7.1 push 到 GitHub 仓库，部署到 GitHub Pages：需要在仓库设置中启用 GitHub Pages（本仓库采用此种部署方式）
# 7.2 在其他平台部署, 例如：Gitee Pages、Vercel、Netlify、个人虚拟主机、个人服务器等
```

## License

- 文章遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和声明
- 源码遵循 [MIT](https://github.com/Charles7c/charles7c.github.io/blob/main/LICENSE) 许可协议
- Copyright © 2019-2022 Charles7c