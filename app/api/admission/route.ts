import { NextResponse } from 'next/server'

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_APPS_SCRIPT_URL ||
  process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL ||
  process.env.VITE_GOOGLE_APPS_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbzP2ui24NkowHGxVVVVzmF8Tx58bBKG8J7_6UbKZIBRWMtSu1Up0z5BjmPIFF3QDCUG/exec'

const requiredFields = ['parentName', 'phone', 'childName', 'grade', 'language', 'branch'] as const

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim().slice(0, 500) : ''
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>
    const data = Object.fromEntries(
      [...requiredFields, 'message'].map((field) => [field, clean(body[field])]),
    )

    const missingField = requiredFields.find((field) => !data[field])
    if (missingField) {
      return NextResponse.json({ error: `Missing field: ${missingField}` }, { status: 400 })
    }

    const googleResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data),
      redirect: 'follow',
      cache: 'no-store',
      signal: AbortSignal.timeout(15000),
    })

    if (!googleResponse.ok) {
      return NextResponse.json({ error: 'Google Sheets request failed' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Unable to submit application' }, { status: 502 })
  }
}
