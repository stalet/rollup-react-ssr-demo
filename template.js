
export default function template(content) {
    return `<html>
                <head>
                    <title>Rollup test</title>
                    <link href="/assets/script.js" crossorigin as="script" rel="preload">
                </head>
                <script src="/assets/script.js" type="module" crossorigin defer></script>
                <body>
                    ${content}
                </body>
            </html>        
    `;
}
