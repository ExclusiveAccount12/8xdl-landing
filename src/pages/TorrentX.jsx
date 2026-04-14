import { useEffect } from 'react'
import { Download, Shield, Smartphone, Zap, Archive, Play, Globe2 } from 'lucide-react'
import './TorrentX.css'

export default function TorrentX() {
  const appVersion = '1.1.2'
  const releaseDate = 'April 15, 2026'
  const minAndroid = 'Android 8.0+'
  
  // SEO optimization
  if (typeof document !== 'undefined') {
    document.title = 'Download 8xdl v1.1.2 APK - Free Download Manager for Android | Torrents, M3U8, Direct Downloads'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Download 8xdl v1.1.2 APK for Android. Advanced download manager with torrent support, M3U8/HLS downloader, multi-threaded downloads, built-in browser. Free download for Android 8.0+.')
    }
  }

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!nodes.length) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -48px 0px',
      }
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Download,
      title: 'Advanced Download Engine',
      description: 'Multi-threaded downloads with pause/resume support and smart retry logic'
    },
    {
      icon: Archive,
      title: 'Torrent Support',
      description: 'Built-in torrent client with magnet link support and DHT'
    },
    {
      icon: Play,
      title: 'M3U8/HLS Downloader',
      description: 'Download live streams and VOD content with automatic segment merging'
    },
    {
      icon: Globe2,
      title: 'Built-in Browser',
      description: 'Integrated browser with media detection and ad-blocking'
    },
    {
      icon: Zap,
      title: 'Fast & Lightweight',
      description: 'Optimized performance with minimal battery and data usage'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'No tracking, no analytics, all downloads stored locally'
    }
  ]

  const downloadLinks = [
    {
      label: '8xdl Full Version v1.1.2',
      filename: '8xdl-Full-v1.1.2.apk',
      size: '70 MB',
      description: 'Complete version with all features - Recommended',
      primary: true,
      downloadUrl: 'https://t.me/x8dlofficial'
    },
    {
      label: '8xdl Lite Version v1.1.2',
      filename: '8xdl-Lite-v1.1.2.apk',
      size: '63 MB',
      description: 'Optimized version for faster downloads',
      primary: false,
      downloadUrl: 'https://t.me/x8dlofficial'
    }
  ]

  return (
    <div className="torrentx-page">
      <section className="torrentx-hero">
        <div className="container">
          <div className="hero-content" data-reveal>
            <span className="hero-badge">8xdl Download Manager v{appVersion}</span>
            <h1>
              Download 8xdl APK - Advanced Download Manager for Android
              <span>Torrents, M3U8/HLS, Direct Downloads & More</span>
            </h1>
            <p className="hero-description">
              Free download manager for Android with torrent support, M3U8/HLS live stream downloader, 
              multi-threaded download engine, built-in browser with ad-blocking, and powerful media playback. 
              Download the latest APK for Android 8.0+ devices.
            </p>

            <div className="app-stats">
              <div className="stat-item">
                <Smartphone size={18} />
                <span>Version</span>
                <strong>{appVersion}</strong>
              </div>
              <div className="stat-item">
                <Download size={18} />
                <span>Size</span>
                <strong>63-70 MB</strong>
              </div>
              <div className="stat-item">
                <Shield size={18} />
                <span>Requires</span>
                <strong>{minAndroid}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="download-section">
        <div className="container">
          <div className="section-intro" data-reveal>
            <h2>Download 8xdl v{appVersion} APK for Android</h2>
            <p>
              Get the latest version of 8xdl Download Manager. Both versions are safe, tested, and free to download. 
              Choose the full version for all features or the lite version for faster installation.
            </p>
          </div>

          <div className="download-cards">
            {downloadLinks.map((link, index) => (
              <div 
                key={link.filename} 
                className={`download-card ${link.primary ? 'primary' : ''}`}
                data-reveal
                style={{ '--delay': `${index * 80}ms` }}
              >
                <div className="download-card-header">
                  <Download size={32} />
                  <h3>{link.label}</h3>
                  <p>{link.description}</p>
                </div>
                <div className="download-card-body">
                  <div className="download-info">
                    <span>Released: {releaseDate}</span>
                    <span>Size: {link.size}</span>
                  </div>
                  <a 
                    href={link.downloadUrl} 
                    className={`btn ${link.primary ? 'btn-primary' : 'btn-secondary'} btn-large`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download size={20} />
                    Download APK
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="installation-note" data-reveal>
            <Shield size={24} />
            <div>
              <h4>Installation Instructions</h4>
              <ol>
                <li>Download the APK file to your Android device</li>
                <li>Enable "Install from Unknown Sources" in your device settings</li>
                <li>Open the downloaded APK file and tap "Install"</li>
                <li>Launch 8xdl and grant necessary permissions</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-intro" data-reveal>
            <span className="section-kicker">Key Features</span>
            <h2>Powerful Download Manager with Advanced Features</h2>
            <p>
              8xdl Download Manager includes everything you need: torrent downloads, M3U8/HLS streaming, 
              multi-threaded downloads, built-in browser, media player, file manager, and more - all in one free app.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="feature-card"
                data-reveal
                style={{ '--delay': `${index * 60}ms` }}
              >
                <feature.icon size={28} />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-intro" data-reveal>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            <div className="faq-item" data-reveal>
              <h3>Is 8xdl Download Manager free?</h3>
              <p>Yes, 8xdl is completely free to download and use. No hidden charges, no subscriptions, no in-app purchases. All features are available for free.</p>
            </div>

            <div className="faq-item" data-reveal style={{ '--delay': '80ms' }}>
              <h3>Is 8xdl APK safe to install?</h3>
              <p>Yes, the APK is built from verified source code and contains no malware, spyware, or tracking software. It's safe to install on your Android device.</p>
            </div>

            <div className="faq-item" data-reveal style={{ '--delay': '160ms' }}>
              <h3>What Android version is required?</h3>
              <p>8xdl Download Manager requires Android 8.0 (Oreo) or higher. It works on most modern Android devices including phones and tablets.</p>
            </div>

            <div className="faq-item" data-reveal style={{ '--delay': '240ms' }}>
              <h3>Can I download torrents with 8xdl?</h3>
              <p>Yes, 8xdl includes a built-in torrent client with DHT support, magnet links, and pause/resume functionality. You can download torrents directly in the app.</p>
            </div>

            <div className="faq-item" data-reveal style={{ '--delay': '320ms' }}>
              <h3>Does 8xdl support M3U8/HLS downloads?</h3>
              <p>Yes, 8xdl has advanced M3U8/HLS downloader that can download live streams and VOD content with automatic segment merging and quality selection.</p>
            </div>

            <div className="faq-item" data-reveal style={{ '--delay': '400ms' }}>
              <h3>What permissions does 8xdl need?</h3>
              <p>8xdl requires storage access for saving downloads, internet access for downloading files, and optional notification access for download progress. All permissions are explained during installation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
