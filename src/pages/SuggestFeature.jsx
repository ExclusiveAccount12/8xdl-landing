import { useState } from 'react'
import { Lightbulb, Send, Loader, CheckCircle, AlertCircle } from 'lucide-react'
import { sendFeatureRequest } from '../utils/telegramBot'
import { siteConfig } from '../content/site'
import './FormPage.css'

export default function SuggestFeature() {
  const { brandName, supportEmail } = siteConfig
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    priority: 'medium',
    description: '',
    useCase: ''
  })

  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const result = await sendFeatureRequest(formData)
      
      if (result.success) {
        if (result.method === 'telegram') {
          setStatus({
            type: 'success',
            message: 'Feature request submitted through Telegram. It is now in the review queue.'
          })
        } else if (result.method === 'email') {
          setStatus({
            type: 'success',
            message: `Your email client has been opened. Send the prepared draft to ${supportEmail} to finish submission.`
          })
        }
        
        // Reset form after successful submission
        if (result.method === 'telegram') {
          setFormData({
            name: '',
            email: '',
            category: '',
            priority: 'medium',
            description: '',
            useCase: ''
          })
        }
      } else {
        setStatus({
          type: 'error',
          message: `Submission failed. Please email us directly at ${supportEmail}.`
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: `An error occurred. Please email us at ${supportEmail}.`
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-page">
      <div className="container">
        <div className="form-header">
          <span className="form-kicker">Roadmap</span>
          <Lightbulb size={64} className="form-icon" />
          <h1>Suggest a Feature</h1>
          <p>Share improvements that would make {brandName} cleaner, faster, or more useful for real download flows.</p>
        </div>

        <form className="report-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">Feature Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Download Manager">Download Manager</option>
                <option value="Browser">Browser</option>
                <option value="Music Player">Music Player</option>
                <option value="Video Player">Video Player</option>
                <option value="File Manager">File Manager</option>
                <option value="UI/UX">UI/UX Improvement</option>
                <option value="Performance">Performance</option>
                <option value="Security">Security</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="priority">Priority Level</label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="low">Low - Nice to have</option>
                <option value="medium">Medium - Would be useful</option>
                <option value="high">High - Really need this</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Feature Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="5"
              placeholder={`Describe the feature you'd like to see in ${brandName}...`}
            />
          </div>

          <div className="form-group">
            <label htmlFor="useCase">Use Case / Why You Need This *</label>
            <textarea
              id="useCase"
              name="useCase"
              value={formData.useCase}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Explain how this feature would help you and other users..."
            />
          </div>

          {status.message && (
            <div className={`alert alert-${status.type}`}>
              {status.type === 'success' ? (
                <CheckCircle size={20} />
              ) : (
                <AlertCircle size={20} />
              )}
              <span>{status.message}</span>
            </div>
          )}

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? (
              <>
                <Loader size={20} className="spinner" />
                Submitting...
              </>
            ) : (
              <>
                <Send size={20} />
                Submit Feature Request
              </>
            )}
          </button>

          <div className="form-footer">
            <p>
              <strong>Note:</strong> If submission fails, your email client will open automatically.
              Alternatively, you can email us directly at <strong>{supportEmail}</strong>
            </p>
          </div>
        </form>

        <div className="form-info">
          <h3>What Helps a Feature Review</h3>
          <ul>
            <li>Describe the workflow that feels blocked today.</li>
            <li>Explain whether the request is about UI clarity, speed, stability, or compatibility.</li>
            <li>Include the Android version or device context if the idea depends on hardware behavior.</li>
            <li>Keep the request concrete enough to prototype.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
