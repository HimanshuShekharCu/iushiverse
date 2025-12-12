# FormSubmit Setup Guide

This guide will help you set up FormSubmit to receive contact form submissions via email.

## What is FormSubmit?

FormSubmit is a **completely free** email service that requires **no signup** and **no API keys**. It's the simplest way to receive form submissions.

## Setup Instructions

### Option 1: Quick Setup (No Configuration Needed)

The form is already configured to use your email from `mock/mock.ts` (`iushiverse@gmail.com`).

**Just test it!** The form should work immediately.

### Option 2: Change the Email Address

If you want to use a different email:

1. Open `mock/mock.ts`
2. Update the `email` field:
   ```typescript
   email: "your-email@example.com",
   ```

That's it! The form will automatically use this email address.

## How It Works

1. User fills out the contact form
2. Form submits to FormSubmit's API
3. FormSubmit sends an email to your configured email address
4. You receive the form submission in your inbox

## Email Format

You'll receive emails with:

- **Subject:** "New Contact Form Submission from [Name]"
- **Body:** Contains all form fields (name, email, phone, message)

## Free Tier

- **Unlimited emails** - Completely free!
- **No signup required**
- **No API keys needed**
- **Spam protection included**

## Troubleshooting

- **Not receiving emails?**

  - Check your spam folder
  - Verify the email address in `mock/mock.ts` is correct
  - Check browser console for any errors

- **Form not submitting?**
  - Check browser console for errors
  - Make sure all required fields are filled

## Alternative: Customize Email Template

If you want to customize the email format, you can:

1. Visit [FormSubmit.co](https://formsubmit.co/)
2. Sign up (optional) for advanced features
3. Use their dashboard to customize email templates

But the basic setup works without any signup!
