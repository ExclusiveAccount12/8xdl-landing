import { useState } from 'react'
import { Bug, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { sendBugReport } from '../utils/telegramBot'
import { siteConfig } from '../content/site'
import './FormPage.css'

export default function BugReport() {
  const { brandName, currentVersion, supportEmail } = siteConfig
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    device: '',
    androidVersion: '',
    appVersion: '',
    bugType: 'crash',
    description: '',
    steps: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Send to Telegram with email fallback
      const result = await sendBugReport(formData)
      
      if (result.success) {
        setSubmitStatus(result.method === 'telegram' ? 'success' : 'email')
        
        // Reset form only if sent via Telegram
        if (result.method === 'telegram') {
          setFormData({
            name: '',
            email: '',
            device: '',
            androidVersion: '',
            appVersion: '',
            bugType: 'crash',
            description: '',
            steps: ''
          })
        }
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting bug report:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="form-page">
      <div className="container">
        <div className="form-header">
          <span className="form-kicker">Support</span>
          <Bug size={48} />
          <h1>Report a Bug</h1>
          <p>Report issues in {brandName} {currentVersion} with enough detail for reproduction and device review.</p>
        </div>

        <form className="report-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="device">Device Model</label>
              <input
                type="text"
                id="device"
                name="device"
                placeholder="e.g., Samsung Galaxy S21"
                value={formData.device}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="androidVersion">Android Version</label>
              <input
                type="text"
                id="androidVersion"
                name="androidVersion"
                placeholder="e.g., Android 12"
                value={formData.androidVersion}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="appVersion">App Version</label>
              <input
                type="text"
                id="appVersion"
                name="appVersion"
                placeholder={`e.g., ${currentVersion}`}
                value={formData.appVersion}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="bugType">Bug Type</label>
              <select
                id="bugType"
                name="bugType"
                value={formData.bugType}
                onChange={handleChange}
                required
              >
                <option value="crash">App Crash</option>
                <option value="torrent">Torrent Issue</option>
                <option value="player">Video Player Issue</option>
                <option value="download">Download Issue</option>
                <option value="browser">Browser Issue</option>
                <option value="ui">UI/Display Problem</option>
                <option value="performance">Performance Issue</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Bug Description</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Describe the bug in detail..."
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="steps">Steps to Reproduce</label>
            <textarea
              id="steps"
              name="steps"
              rows="4"
              placeholder="1. Open the app&#10;2. Navigate to...&#10;3. Click on...&#10;4. Bug occurs"
              value={formData.steps}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <div className="spinner"></div>
                Sending...
              </>
            ) : (
              <>
                <Send size={20} />
                Submit Bug Report
              </>
            )}
          </button>
          
          {submitStatus === 'success' && (
            <div className="alert alert-success">
              <CheckCircle size={20} />
              <p>Bug report submitted through Telegram. We&apos;ll review the report and follow up through the details you included.</p>
            </div>
          )}
          
          {submitStatus === 'email' && (
            <div className="alert alert-success">
              <CheckCircle size={20} />
              <p>Your email client was opened with the bug report. Send the draft to complete submission to {supportEmail}.</p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="alert alert-error">
              <AlertCircle size={20} />
              <p>Bug report delivery failed. Email the issue directly to {supportEmail}.</p>
            </div>
          )}
        </form>

        <div className="form-info">
          <h3>Tips for Better Bug Reports</h3>
          <ul>
            <li>Be as specific as possible about the issue</li>
            <li>Include screenshots if available and send them to {supportEmail}</li>
            <li>Describe what you expected to happen vs. what actually happened</li>
            <li>Mention if the bug is reproducible or happens randomly</li>
            <li>Include any error messages you see</li>
            <li>Specify which feature (Downloader, Player, Torrent, Browser)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
