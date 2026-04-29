# XSS Detection Patterns and Severity Levels

| Pattern | Severity | Description |
|---------|----------|-------------|
| `<script\b(?!.*\btype\s*=\s*[\'\"]?module[\'\"]?)[^>]*>` | High | Detect script tag injection |
| `javascript:(?!base64)[^\s]*|data:text/html[^\s]*|vbscript:[^\s]*` | High | Detect JavaScript URLs |
| `(onerror|onclick|onload|onmouseover)=[\'\"]?[^\'\"]*[\'\"]?` | High | Detect onerror handler injection |
| `<svg\s+[^>]*?(onload=[\'\"]?[^\'\"]*[\'\"]?|onerror=[\'\"]?[^\'\"]*[\'\"]?|onclick=[\'\"]?[^\'\"]*[\'\"]?)` | High | Detect SVG onload injection |
| `<iframe\s+[^>]*?(src=[\'\"]?javascript:[^\'\"]*[\'\"]?|srcdoc=[\'\"]?[^\'\"]*[\'\"]?|onload=[\'\"]?[^\'\"]*[\'\"]?)` | High | Detect iframe with JavaScript injection |
| `<body\s+[^>]*?(onload=[\'\"]?[^\'\"]*[\'\"]?|onbeforeunload=[\'\"]?[^\'\"]*[\'\"]?|onclick=[\'\"]?[^\'\"]*[\'\"]?)` | High | Detect body onload injection |
| `<img\s+[^>]*?(onerror=[\'\"]?[^\'\"]*[\'\"]?|onload=[\'\"]?[^\'\"]*[\'\"]?|onclick=[\'\"]?[^\'\"]*[\'\"]?)` | High | Detect image onerror injection |
| `(%3Cscript%3E|%3Ciframe%3E|%3Csvg%3E|%3Cimg%3E|%3Cbody%3E)` | High | Detect URL encoding attacks |
| `(document\.write|innerHTML|eval)\s*\(` | High | Detect DOM-based XSS |
| `(on\w+)=['\"]?[^'\"]*['\"]?` | Medium | Detect usage of deprecated HTML attributes |
