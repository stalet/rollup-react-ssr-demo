
export default function template(content) {
    return `
    <html>
        <head>
            <title>Rollup test</title>
            <link href="/assets/script.js" crossorigin as="script" rel="preload">
            <link href="/assets/output.css" media="all" type="text/css" rel="stylesheet">
        </head>        
        <body class="leading-normal tracking-normal text-gray-900" style="font-family: 'Source Sans Pro', sans-serif;">
            <div class="h-screen md:pt-14 pb-14 bg-right bg-cover" style="background-image:url('/assets/bg.svg');">
                ${content}
            </div>
        </body>
        <script src="/assets/script.js" type="module" crossorigin defer></script>
    </html>        
 `;
}
