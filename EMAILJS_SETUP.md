# EmailJS Setup Instructions

The contact form in this portfolio uses EmailJS to send emails. Follow these steps to set it up:

## 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

## 2. Add Email Service

1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. Copy your **Service ID**

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use these variables in your template:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - The message content
4. Copy your **Template ID**

## 4. Get Your Public Key

1. Go to "Account" > "General"
2. Copy your **Public Key**

## 5. Update the Code

Open `src/components/Contact.tsx` and replace the placeholders:

```typescript
await emailjs.send(
  "YOUR_SERVICE_ID",    // Replace with your Service ID
  "YOUR_TEMPLATE_ID",   // Replace with your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  },
  "YOUR_PUBLIC_KEY"     // Replace with your Public Key
);
```

## Example Template

Subject: New Contact from Portfolio

Body:
```
Hello,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

## Free Tier Limits

- 200 emails per month
- Perfect for portfolio websites

That's it! Your contact form will now send emails directly to your inbox.
