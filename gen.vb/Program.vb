Module Program

    Sub Main(args As String())
        Console.WriteLine("welcome")
        SetConsoleEncoding()
        Console.WriteLine("程序启动，这里是戈登走過去的博客生成器")
        If args.Length < 1 Then
            Console.WriteLine("没有任何参数。
可用参数：
new name - 创建一篇新文章
g - 清除老的生成结果，生成新的到 docs 文件夹
s - 启动本地服务器
")
            Environment.Exit(0)
        End If
        FindWorkFolder()
        Dim command As String = args(0)
        Select Case command
            Case "new"
                Generator.ReadLocalFiles()
            Case "g"
                Generator.ReadLocalFiles()
                Generator.GenerateAll()
                Console.WriteLine("生成结束。")
            Case "s"
                Generator.ReadLocalFiles()
                Generator.StartTestServer()
            Case Else
                Throw New Exception("不匹配任何可用参数")
        End Select
    End Sub

    Sub FindWorkFolder()
        Dim needFolders As String() = {"source", "typescript", "html"}
        Dim dc As New DirectoryInfo(Directory.GetCurrentDirectory())
        For i As Integer = 0 To 9
            Dim topFolders = dc.GetDirectories("*", SearchOption.TopDirectoryOnly)
            Dim goods = 0
            For Each fd In topFolders
                If needFolders.Contains(fd.Name) Then
                    goods += 1
                    If goods >= needFolders.Length Then
                        Directory.SetCurrentDirectory(dc.FullName)
                        Console.WriteLine("工作文件夹定位成功：")
                        Console.WriteLine(dc.FullName)
                        Exit Sub
                    End If
                End If
            Next
            dc = dc.Parent
            If dc Is Nothing Then
                Exit For
            End If
        Next
        Throw New Exception("无法定位到合适的工作文件夹！")
    End Sub

    Function GetAllBlogPosts() As List(Of BlogPost)
        Dim postsFolder As New DirectoryInfo(Path.Combine(Directory.GetCurrentDirectory, "source", "_posts"))
        Dim mds = postsFolder.GetFiles("*.md", SearchOption.AllDirectories)
        Dim goods As Integer = 0
        Dim posts As New List(Of BlogPost)
        Dim usednames As New List(Of String)
        For Each f In mds
            Dim p As New BlogPost(f)
            If usednames.Contains(p.FileName) Then
                Throw New Exception($"这个文章的文件名已经被使用过了 ！ {f.FullName}")
            End If
            posts.Add(p)
            usednames.Add(p.FileName)
            goods += 1
        Next
        posts.Sort()
        Return posts
    End Function

End Module
