import { Link } from 'react-router-dom'
import { Mail, Download, Send, Users, Radio } from 'lucide-react'
import { siteConfig } from '../content/site'
import './Footer.css'

export default function Footer() {
  const { brandName, shortName, supportEmail, telegramSupport, telegramChannel, telegramGroup, websiteUrl, playStoreUrl, urls } = siteConfig

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Download size={32} />
              <div>
                <span>{brandName}</span>
                <small>Launchpad system</small>
              </div>
            </div>
            <p>
              {websiteUrl.replace('https://', '')} is the public home for the {shortName} Android suite, with module
              routing, archive-access explanations, and privacy-first defaults that match the app.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/#overview">Overview</a></li>
              <li><a href="/#download">Current Release</a></li>
              <li><Link to={urls.features}>Features</Link></li>
              <li><a href={playStoreUrl} target="_blank" rel="noopener noreferrer">Play Store</a></li>
              <li><Link to={urls.disclaimer}>Disclaimer</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><Link to={urls.privacy}>Privacy Policy</Link></li>
              <li><Link to={urls.terms}>Terms & Conditions</Link></li>
              <li><Link to={urls.permissions}>App Permissions</Link></li>
              <li><Link to={urls.bugReport}>Report a Bug</Link></li>
              <li><Link to={urls.suggestFeature}>Suggest Feature</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-links">
              <a href={telegramSupport} target="_blank" rel="noopener noreferrer" title="Admin Support">
                <Send size={24} />
              </a>
              <a href={telegramChannel} target="_blank" rel="noopener noreferrer" title="Official Channel">
                <Radio size={24} />
              </a>
              <a href={telegramGroup} target="_blank" rel="noopener noreferrer" title="Community Group">
                <Users size={24} />
              </a>
              <a href={`mailto:${supportEmail}`} title="Email Support">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {brandName}. All rights reserved. • {websiteUrl.replace('https://', '')} • Zero data collection policy</p>
        </div>
      </div>
    </footer>
  )
}
