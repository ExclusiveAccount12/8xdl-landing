import { siteConfig } from '../content/site'

// Telegram Bot Integration for 8xdl suite
// Bot Token from @BotFather

const TELEGRAM_BOT_TOKEN = '8268552967:AAE9QMtxqYd2FzzFAkMwxFJpO9Tm-GK3EPE'
const TELEGRAM_CHAT_ID = '7580529266' // Your Telegram Chat ID
const { brandName, supportEmail: FALLBACK_EMAIL } = siteConfig

/**
 * Send message to Telegram Bot with email fallback
 * @param {string} message - The message to send
 * @param {string} subject - Email subject for fallback
 * @returns {Promise<{success: boolean, method: string}>} - Result with method used
 */
export async function sendToTelegram(message, subject = `${brandName} submission`) {
  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    })

    const data = await response.json()
    
    if (data.ok) {
      return { success: true, method: 'telegram' }
    } else {
      // Telegram failed, use email fallback
      return await sendViaEmail(message, subject)
    }
  } catch (error) {
    console.error('Telegram send error:', error)
    // Telegram failed, use email fallback
    return await sendViaEmail(message, subject)
  }
}

/**
 * Fallback: Open email client with pre-filled message
 * @param {string} message - The message content
 * @param {string} subject - Email subject
 * @returns {Promise<{success: boolean, method: string}>}
 */
async function sendViaEmail(message, subject) {
  try {
    // Convert HTML tags to plain text for email
    const plainMessage = message
      .replace(/<b>/g, '')
      .replace(/<\/b>/g, '')
      .replace(/<i>/g, '')
      .replace(/<\/i>/g, '')
      .replace(/<code>/g, '')
      .replace(/<\/code>/g, '')
    
    const mailtoLink = `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(plainMessage)}`
    
    // Open email client
    window.location.href = mailtoLink
    
    return { success: true, method: 'email' }
  } catch (error) {
    console.error('Email fallback error:', error)
    return { success: false, method: 'none' }
  }
}

/**
 * Format bug report for Telegram
 * @param {Object} formData - Bug report form data
 * @returns {string} - Formatted message
 */
export function formatBugReport(formData) {
  return `
🐛 <b>NEW BUG REPORT</b>

👤 <b>Reporter:</b> ${formData.name}
📧 <b>Email:</b> ${formData.email}

📱 <b>Device Info:</b>
• Model: ${formData.device}
• Android: ${formData.androidVersion}
• App Version: ${formData.appVersion}

🔴 <b>Bug Type:</b> ${formData.bugType}

📝 <b>Description:</b>
${formData.description}

🔄 <b>Steps to Reproduce:</b>
${formData.steps}

⏰ <b>Reported:</b> ${new Date().toLocaleString()}
  `.trim()
}

/**
 * Format feature request for Telegram
 * @param {Object} formData - Feature request form data
 * @returns {string} - Formatted message
 */
export function formatFeatureRequest(formData) {
  return `
💡 <b>NEW FEATURE REQUEST</b>

👤 <b>Name:</b> ${formData.name}
📧 <b>Email:</b> ${formData.email}

🎯 <b>Feature Category:</b> ${formData.category}
⭐ <b>Priority:</b> ${formData.priority}

📝 <b>Feature Description:</b>
${formData.description}

💭 <b>Use Case:</b>
${formData.useCase}

⏰ <b>Submitted:</b> ${new Date().toLocaleString()}
  `.trim()
}

/**
 * Format contact form for Telegram
 * @param {Object} formData - Contact form data
 * @returns {string} - Formatted message
 */
export function formatContactMessage(formData) {
  return `
📬 <b>NEW CONTACT MESSAGE</b>

👤 <b>Name:</b> ${formData.name}
📧 <b>Email:</b> ${formData.email}
📱 <b>Subject:</b> ${formData.subject || 'General Inquiry'}

💬 <b>Message:</b>
${formData.message}

⏰ <b>Received:</b> ${new Date().toLocaleString()}
  `.trim()
}

/**
 * Send bug report to Telegram with email fallback
 * @param {Object} formData - Bug report data
 * @returns {Promise<{success: boolean, method: string}>} - Result with method used
 */
export async function sendBugReport(formData) {
  const message = formatBugReport(formData)
  return await sendToTelegram(message, `Bug report - ${brandName}`)
}

/**
 * Send feature request to Telegram with email fallback
 * @param {Object} formData - Feature request data
 * @returns {Promise<{success: boolean, method: string}>} - Result with method used
 */
export async function sendFeatureRequest(formData) {
  const message = formatFeatureRequest(formData)
  return await sendToTelegram(message, `Feature request - ${brandName}`)
}

/**
 * Send contact message to Telegram with email fallback
 * @param {Object} formData - Contact form data
 * @returns {Promise<{success: boolean, method: string}>} - Result with method used
 */
export async function sendContactMessage(formData) {
  const message = formatContactMessage(formData)
  return await sendToTelegram(message, `Contact message - ${brandName}`)
}

/**
 * Test Telegram bot connection
 * @returns {Promise<boolean>} - Connection status
 */
export async function testTelegramConnection() {
  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`
    const response = await fetch(url)
    const data = await response.json()
    return data.ok
  } catch (error) {
    console.error('Telegram connection test failed:', error)
    return false
  }
}
