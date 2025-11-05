import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Read file content
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Get file metadata
    const fileData = {
      name: file.name,
      type: file.type,
      size: file.size,
      content: buffer.toString('base64'),
      lastModified: file.lastModified
    };

    return NextResponse.json({
      success: true,
      file: {
        name: fileData.name,
        type: fileData.type,
        size: fileData.size,
        id: `file_${Date.now()}`
      }
    });
  } catch (error) {
    console.error('File upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}
