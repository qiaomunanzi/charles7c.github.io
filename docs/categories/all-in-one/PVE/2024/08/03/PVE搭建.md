---
title: 利用PVE虚拟机搭建All-in-one
author: 乔先森
date: 2024/08/04 10:00
isTop: false
categories:
 - PVE虚拟机
tags:
 - PVE
 - 虚拟机
---

# 个人 SQL 优化技巧 <Badge text="持续更新" type="warning" />


## 查询优化

### 如果确定结果只有一条，使用 LIMIT 1 <Badge text="建议" />

我们在根据一个或多个条件查询数据时，如果确定查询结果只有一条，可以在结尾处添加 LIMIT 1 进行限制。

这样既可以让 EXPLAIN 中的 type 达到 const 类型，又可以免去担忧在程序中出现接收是单个对象却返回了一个集合对象的异常问题。