# Docker 简介

## Docker 是什么

Docker 是一个开放平台，能够用于开发、交付、运行应用。Docker 能够将**应用**与**基础设施**（比如应用的运行环境、开发环境、环境配置等）解耦。

通过 Docker 能够管理基础设施跟管理应用一样方便，无论是在开发、测试还是生产环境快速、一致地部署应用，减少从软件开发到交付的时间。

Docker 能将应用打包、运行在一个**独立**的环境，这个环境称为容器（container）。得益于**独立**的这一特性，能够同时运行多个容器在一个主机上。
容器轻量且包含了运行应用所需要的所有依赖，所以通过 Docker 运行应用，当前主机无需关心是否需要提前安装任何运行环境依赖，因为应用及其运行环境都可打包在容器之中。
所以通过共享容器，能确保在任何环境都有一致的运行效果。

## Docker 系统架构

Docker 使用 **client-server** 的架构，Docker 客户端与 Docker 后台程序（服务端）进行通讯，Docker 后台程序负责构建、运行以及分配 Docker 容器。
Docker 客户端以及 Docker 后台程序可以运行在同一系统中，Docker 客户端也可以连接远程的 Docker 后台程序，二者通过 REST API 通讯。

Docker 是使用 Go 语言来编写，利用 linux 内核的一些特性来完成其功能。Docker 使用 linux 的 namespaces 来为容器提供独立的工作环境，当运行容器的时候，Docker 为容器创建了对应的 namespaces 集合。

namespaces 是 linux 内核用来实现资源隔离的方式，不同的 namespaces 进程拥有独立、互不干扰的系统资源。

![docker-architecture](https://docs.docker.com/engine/images/architecture.svg)

## Docker 基本概念

### Docker daemon（后台程序）

Docker daemon (dockerd)监听着 Docker API 请求，以及管理 Docker 相关组件比如 images（镜像）、containers（容器）、networks（网络）、volumes（卷）等等。一个后台程序还能与其他后台程序通讯，来管理 Docker 服务。

### Docker client（客户端）

Docker client (docker) 是用户与 Docker 进行交互的主要方式。当你执行命令，比如`docker run`的时候，客户端将命令发送给的 daemon（后台程序），然后由后台程序执行。执行的命名其实就是调用 Docker API，所以一个 Docker 客户端能够与多个后台程序通讯。

### Image（镜像）

镜像是一个只读模板，用于说明该如何创建一个 Docker 容器。通常一个镜像会基于另一个镜像，以及一些额外的定制化。比如，我们需要一个能够构建、运行前端应用的容器，那么就需要一个基础镜像，该镜像基于 nodejs 镜像，以及需要安装了诸如 nginx 的 web server，还有一些基础配置，确保我们能在该镜像所创建的容器中构建、运行我们的应用。

你可以使用自定义镜像，也可以使用别人已经创建、发布在公共镜像仓库的镜像。你可以通过 Dockerfile 文件来创建一个镜像，Dockerfile 通过简单的语法说明、定义了创建、运行一个镜像所需步骤。Dockerfile 中的每个说明都在 image 上创建一个 layer，当修改 Dockerfile 以及重新构建 image 的时候，只有修改了的 layer 才需要重新构建。这也是为什么 Docker 比起传统虚拟技术要更加轻量、快速。

### Container（容器）

容器是一个可运行的镜像实例，你能够通过 Docker API 或命令行来对容器进行创建、启动、停止、删除等操作。一个容器能够连接多个 networks，关联存储，甚至可以根据当前容器的状态创建一个新的镜像。

容器默认与其他容器，以及宿主机器是相对隔离的。当然这个“隔离”的程度也是可控、可自定义的。

容器由镜像以及当我们启动、创建容器的参数来定义。当一个容器被删除时，默认在运行期间的状态改变以及产生的持久存储都会被清除、重置。

### Docker registries（镜像仓库）

Docker registries 用于存储 Docker 镜像，[Docker Hub](https://hub.docker.com/)就是官方的一个公共镜像仓库，registry 是可配置的，我们可以配置为国内仓库，甚至私有的仓库。

当我们执行 `docker pull`或`docker run`，如本地不存在所需镜像，Docker 会去配置中的 registry 拉取目标镜像。当执行`docker push`的时候会将镜像发布至配置好的 registry 中。

## Docker 可以用来做什么？

### 1. 快速、一致的交付应用

Docker 能够让整个软件开发生命周期如流水线般更高效地进行，让开发者始终在一个标准、一致的环境中进行工作。容器非常适用持续集成、持续交付的工作流。

考虑如下应用场景：

- 在开发初期，本地环境写代码，让应用运行在本地的 Docker，与同事之间的工作共享也是通过 Docker 容器。
- 本地开发完成之后，通过 Docker 将应用推送、部署在测试环境，供相关人员进行验收测试。
- 当发现 bug 的时候，开发人员在本地修复 bug 之后，将改动再次推送、部署到测试环境供相关人员进行 bug 修复验证。
- 当测试验收通过之后，只需要将整个流程中更新后的镜像推送、部署至生产环境即可。

因为整个流程中应用的运行环境都是一致的，所以再也不会出现“我本地是没问题的啊”这类的问题了，而且也免去了在各个环境中安装应用运行环境（比如 nodejs）这一重复工作，提高了软件的交付效率。

### 2. 快速、弹性部署

Docker 的“容器”这一特性，让其十分便携。容器能够运行在任何环境，比如个人电脑、物理或虚拟主机。Docker 的便携、轻量，快捷迁移，让动态扩容、缩容变得更加简单。

### 3. 在同一硬件资源中进行更多的工作，更高效的利用硬件资源

因为 Docker 的独立是通过 linux 内核的 namespaces 来实现的，所以容器的应用进程其实还是运行在宿主内核中，容器中只包含了必要的运行依赖，而不是像传统虚拟机一样需要先模拟一套完整的操作系统。
所以 Docker 能够同时保证容器独立、以及启动运行效率，一个主机上可以稳定运行多个容器，从而更高效地利用硬件资源。

## 参考

1. [https://docs.docker.com/](https://docs.docker.com/)
2. [https://docs.docker.com/get-started/overview/](https://docs.docker.com/get-started/overview/)
3. [Docker — 从入门到实践](https://vuepress.mirror.docker-practice.com/)
4. [Docker 入门教程](http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)
