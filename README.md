# 早癌筛查循证医学科普指南（2026 版）

基于循证医学（Evidence-Based Medicine）的早癌筛查科普项目，整合截至 2026 年 5 月的国际最新指南与高质量研究证据。

## 内容来源

参考 USPSTF、ACS、NCCN、ESMO、WHO、AASLD/IDSA、EASL、HRSA-WPSI 等国际权威组织的最新推荐，涵盖：

- 6 项高级别推荐筛查项目（肺癌、结直肠癌、乳腺癌、宫颈癌、前列腺癌、肝细胞癌）
- 8+ 项证据有限或不推荐普筛的项目
- 遗传性肿瘤综合征筛查路径
- 9 大一级预防措施
- 常见误区辨析

## 文件说明

| 文件 | 说明 |
|---|---|
| `早癌筛查循证医学科普指南.md` | 完整 Markdown 文档，包含所有证据引用与详细说明 |
| `index.html` | 网站页面结构（HTML） |
| `styles.css` | 自定义样式与移动端响应式优化 |
| `script.js` | 导航构建、滚动监听、移动端菜单等交互逻辑 |

## 在线预览

直接用浏览器打开 `index.html` 即可查看。网站为纯静态页面，无需服务器或构建工具。

## 技术栈

- HTML5 + CSS3 + JavaScript
- [Tailwind CSS](https://tailwindcss.com/)（CDN 方式引入，仅用于工具类）
- [Noto Sans SC](https://fonts.google.com/noto/specimen/Noto+Sans+SC) + [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) 字体

## 响应式设计

- **桌面端**（≥768px）：固定侧边栏导航 + 主内容区，双栏/四栏网格布局
- **移动端**（<768px）：顶部导航栏 + 侧滑菜单，表格自动转为卡片布局，触摸友好的导航链接（最小 44px 触摸区域）
- **超小屏**（≤374px）：进一步缩减间距与字号
- **打印**：自动隐藏导航，正文全宽输出

## 免责声明

本文为基于循证医学的健康教育内容，**不能替代**专业医生的面对面诊断、治疗或个体化建议。所有筛查决策应由您与具备资质的医疗专业人员在"共同决策（Shared Decision Making, SDM）"框架下制定。
