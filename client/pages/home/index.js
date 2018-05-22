Page({
  data: {
    list: [
      {
        id: 'view',
        name: '创建版本库',
        open: false,
        pages: ['git clone <url>', 'git init']
      }, 
      {
        id: 'content',
        name: '修改和提交',
        open: false,
        pages: ['git status', 'git diff', 'git add .', 'git add <file>', 'git mv <old> <new>', 'git add', 'git rm <file>', 'git rm --cached <file>', 'git commit -m "msg"', 'git commit --amend']
      }, 
      {
        id: 'form',
        name: '查看提交历史',
        open: false,
        pages: ['git log', 'git log -p <file>', 'git blame <file>']
      }, 
      {
        id: 'nav',
        name: '撤销',
        open: false,
        pages: ['git checkout [HEAD] <file>','git reset --hard HEAD','git revert <commit>']
      }, 
      {
        id: 'media',
        name: '分支与标签',
        open: false,
        pages: ['git branch', 'git checkout <branch/tag>', 'git branch <newBranch>', 'git branch -d <branch>','git tag','git tag <tagName>','git tag -d <tagName>']
      }, 
      {
        id: 'map',
        name: '合并和衍合',
        pages: ['git merge <branch>','git rebase <branch>']
      }, 
      {
        id: 'canvas',
        name: '远程操作',
        pages: ['git remote -v','git remote show <branch>','git remote add <remote> <url>','git fetch <remote>','git pull <remote> <branch>','git push <remote> <branch>',"git push <remote> :<branch/tagName>",'git push --tags']
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})

