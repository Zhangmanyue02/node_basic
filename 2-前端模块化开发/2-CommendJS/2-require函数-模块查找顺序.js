/* ​
   核心模块​​（如 fs、path）→ 直接返回 Node.js 内置模块。
  文件模块​​（以 ./、../ 或 / 开头）→ 按路径加载 .js、.json 或 .node 文件。
  node_modules 目录​​ → 向上递归查找 node_modules 中的第三方模块。
  目录模块​​ → 若路径是目录，查找 package.json 的 main 字段或 index.js。
*/