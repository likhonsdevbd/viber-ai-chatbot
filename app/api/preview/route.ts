import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { code, type } = await req.json();

    if (!code) {
      return NextResponse.json(
        { error: 'No code provided' },
        { status: 400 }
      );
    }

    // Generate preview HTML based on code type
    let previewHtml = '';

    if (type === 'html' || type === 'react') {
      previewHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Preview</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { margin: 0; padding: 20px; font-family: system-ui, -apple-system, sans-serif; }
  </style>
</head>
<body>
  ${code}
</body>
</html>`;
    } else if (type === 'javascript') {
      previewHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Preview</title>
  <style>
    body { margin: 0; padding: 20px; font-family: monospace; }
    #output { background: #f5f5f5; padding: 15px; border-radius: 8px; }
  </style>
</head>
<body>
  <h2>Output:</h2>
  <div id="output"></div>
  <script>
    const output = document.getElementById('output');
    const originalLog = console.log;
    console.log = function(...args) {
      output.innerHTML += '<div>' + args.join(' ') + '</div>';
      originalLog.apply(console, args);
    };
    try {
      ${code}
    } catch (error) {
      output.innerHTML = '<div style="color: red;">Error: ' + error.message + '</div>';
    }
  </script>
</body>
</html>`;
    } else {
      previewHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code Preview</title>
  <style>
    body { margin: 0; padding: 20px; font-family: monospace; background: #f5f5f5; }
    pre { background: white; padding: 15px; border-radius: 8px; overflow-x: auto; }
  </style>
</head>
<body>
  <pre><code>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
</body>
</html>`;
    }

    return NextResponse.json({
      success: true,
      html: previewHtml
    });
  } catch (error) {
    console.error('Preview generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate preview' },
      { status: 500 }
    );
  }
}
