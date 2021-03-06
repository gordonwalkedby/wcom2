---
title: 在 .NET 5.0 中已计划的 VB 支持情况概述
date: 2020-03-13 07:10:03
tags: [.NET]
---
本文是翻译，原文是[VB团队的官方博客里的文章](https://devblogs.microsoft.com/vbteam/visual-basic-support-planned-for-net-5-0/)，发布于2020年3月11日。  
.NET 的 Visual Basic 还会继续被微软支持下去，但是很可能这门语言就要停滞不前了，语言本身将保持不变，变化的只有API。

-----

我们已经收到了这类反馈，关于想要在 .NET Core 中提供对 VB 的更好的支持。早期 .NET Core 的 VB 只支持类库和控制台应用这两种类型。从 .NET 5 计划开始，VB 将会开始支持：
- 类库
- 控制台应用
- Windows 窗体应用
- WPF 应用
- Worker Service
- ASP.NET Core Web API

我们做了这些新支持是想更好地方便目前的 VB 用户迁移他们的程序到 .NET Core 。这也使 VB 用户可以体验到全新的开发平台特性，比如说并排开发、跨平台支持、更好的性能、全新加强的API等。

使用 VB 的一个主要优势是这门语言已经相当的稳定。大量的 VB 程序员已经证明了它的可靠性和十分重要的语法风格。往后看，我们并不打算把 VB 作为一门语言来发展。使 VB 在 .NET Core 和 .NET Framework 之间保持稳定性和可维护性。如果未来版本的 .NET Core 需要对语言进行修改，可能不会在 VB 上做支持。鉴于平台特性， .NET Framework 和 .NET Core 的 VB 之间还是会有一些区别。

如果你还是喜欢 .NET Framework，你可以确信的是：.NET Framework 将会继续得到支持，因为它是和 Windows 系统一起的。VB 和 C# 用户都可以继续使用 .NET Framework，只在需要以上提到的新特性的时候才需要转移到 .NET Core。如果你的程序使用了 .NET Core 不支持的技术，比如 WebForms、Workflow 或是 WCF ，你可能还是比较想继续用 .NET Framework 的，因为转移需要更复杂的操作，使用更新的其他技术。

Visual Studio 还会一如既往地提供更好更新的特性，来提升开发者的体验，包括 .NET Core 和 .NET Framework 版本的 VB。一个例子就是最近新增的 VB 的 IntelliCode 支持。

VB 是一门伟大的语言，也是一个很好的产品开发环境。未来的 VB 包括 .NET Framework 和 .NET Core 两个版本都将会继续注重稳定性，注重以上提到的程序类型还有注重 .NET Core 和 .NET Framework 之间的兼容性。
