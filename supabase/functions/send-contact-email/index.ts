import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend'

interface ContactPayload {
  name?: string
  email?: string
  subject?: string
  message?: string
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY')
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

    if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'Email service is not configured.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      )
    }

    const body = (await req.json()) as ContactPayload
    const name = (body.name ?? '').trim()
    const email = (body.email ?? '').trim()
    const subject = (body.subject ?? '').trim()
    const message = (body.message ?? '').trim()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!name || name.length > 200) {
      return new Response(JSON.stringify({ error: 'A valid name is required.' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    if (!email || !emailRegex.test(email) || email.length > 320) {
      return new Response(JSON.stringify({ error: 'A valid email is required.' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    if (!message || message.length > 5000) {
      return new Response(JSON.stringify({ error: 'A valid message is required.' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const safeSubject = subject || 'Portfolio Contact'
    const escapeHtml = (s: string) =>
      s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6d28d9;">New Portfolio Message</h2>
        <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
        <p><strong>Subject:</strong> ${escapeHtml(safeSubject)}</p>
        <hr style="border:none;border-top:1px solid #eee;" />
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `

    const response = await fetch(`${GATEWAY_URL}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['maishb800@gmail.com'],
        reply_to: email,
        subject: `New message from ${name} - ${safeSubject}`,
        html,
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      console.error('Resend gateway error:', response.status, JSON.stringify(result))
      return new Response(
        JSON.stringify({ error: 'Failed to send email.', details: result }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      )
    }

    return new Response(JSON.stringify({ success: true, id: result.id }), {
      status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('send-contact-email error:', err)
    return new Response(JSON.stringify({ error: 'Unexpected error.' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
