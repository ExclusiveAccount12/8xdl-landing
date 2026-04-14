import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Archive,
  Download,
  Globe2,
  HardDriveDownload,
  Play,
  Shield,
  Sparkles,
} from 'lucide-react'
import { siteConfig } from '../content/site'
import './Home.css'

const {
  brandName,
  appDisplayName,
  currentVersion,
  compatibility,
  telegramChannel,
  moduleCount,
  modules,
  websiteUrl,
} = siteConfig

// SEO-optimized page title
if (typeof document !== 'undefined') {
  document.title = '8xdl Download Manager - Advanced Download Manager for Android | Free APK Download'
}

const heroStats = [
  {
    icon: Sparkles,
    label: 'Website',
    value: websiteUrl.replace('https://', ''),
  },
  {
    icon: HardDriveDownload,
    label: 'Modules',
    value: `${moduleCount} live tools`,
  },
  {
    icon: Shield,
    label: 'Privacy',
    value: 'Local-first defaults',
  },
  {
    icon: Play,
    label: 'Build',
    value: `v${currentVersion}`,
  },
]

const moduleGroups = [
  {
    label: 'Capture',
    summary: 'DownloadX, TorrentX, M3u8X',
    note: 'Bring direct files, torrents, and HLS links into one intake lane.',
  },
  {
    label: 'Play',
    summary: 'VideoX, MusicX',
    note: 'Jump from transfer to playback without losing queue or progress context.',
  },
  {
    label: 'Control',
    summary: 'FileX, BrowserX, FeedX, VaultX',
    note: 'Manage files, browse pages, protect media, and track follow-up content.',
  },
]

const overviewCards = [
  {
    title: 'Download Anything, Anywhere',
    description:
      'Support for direct downloads, torrents with DHT, magnet links, M3U8/HLS live streams, and VOD content. Multi-threaded engine with pause/resume and smart retry logic.',
  },
  {
    title: 'Built-in Browser & Media Detection',
    description:
      'Integrated web browser with automatic media detection, ad-blocking, and one-tap download. Browse and download without switching apps.',
  },
  {
    title: 'Complete Media Suite',
    description:
      'Play videos with subtitle support, enjoy music with equalizer, manage files with built-in file manager, and secure private files in encrypted vault.',
  },
]

const archiveCases = [
  {
    state: 'No prompt',
    title: 'App-private files and internal downloads',
    description:
      'If the archive lives inside app storage, FileX should open, compress, or extract it without broad shared-folder access.',
  },
  {
    state: 'Ask on demand',
    title: 'Zip or rar inside Downloads, Movies, or Music',
    description:
      'Android may need media or shared-folder access because the archive itself lives in a public device library you selected.',
  },
  {
    state: 'Explain why',
    title: 'Extract to SD card or other shared destination',
    description:
      'The request is about the output folder, not the zip format itself. The app needs permission to write into that shared location.',
  },
  {
    state: 'Fallback stays',
    title: 'Document picker or limited tree access',
    description:
      'If you approve a SAF tree instead of full-file access, archive actions should stay limited to that chosen folder scope.',
  },
]

const permissionBullets = [
  'Broad storage access is for public folders and archive destinations you explicitly choose, not for ordinary app launch.',
  'Zip, rar, and 7z handling follows the same rule as any other file: prompt only when the source or destination is outside app storage.',
  'The website itself never requests Android permissions. Prompts happen only inside the app when a feature path actually needs them.',
]

const releaseStats = [
  {
    label: 'Build',
    value: `${appDisplayName} ${currentVersion}`,
  },
  {
    label: 'Support',
    value: compatibility,
  },
  {
    label: 'Route',
    value: websiteUrl.replace('https://', ''),
  },
]

export default function Home() {
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

  return (
    <div className="home home-modern">
      <section className="hero">
        <div className="hero-bleed">
          <div className="hero-grid modern-hero-grid">
            <div className="hero-copy" data-reveal style={{ '--delay': '0ms' }}>
              <span className="hero-mark">{websiteUrl.replace('https://', '')}</span>
              <h1>
                {appDisplayName} Download Manager
                <span>All-in-One Download Solution for Android</span>
              </h1>
              <p className="hero-slogan">
                Advanced download manager with torrent support, M3U8/HLS downloader, multi-threaded downloads, 
                built-in browser, and powerful media playback - all in one free Android app.
              </p>
              <p className="hero-description">
                {brandName} combines 9 powerful modules into a single app: download files, torrents, and live streams 
                with pause/resume support, manage your files, play videos and music, browse the web with ad-blocking, 
                and secure your private files - all with a privacy-first approach.
              </p>

              <div className="hero-actions">
                <a href="#download" className="btn btn-primary">
                  <Download size={20} />
                  Get Current Build
                </a>
                <Link to="/permissions" className="btn btn-secondary">
                  <Shield size={20} />
                  See Permissions
                </Link>
              </div>

              <div className="hero-stats">
                {heroStats.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="hero-stat">
                    <Icon size={16} />
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="system-stage" data-reveal style={{ '--delay': '140ms' }} aria-label="8xdl system preview">
              <div className="system-orb" />
              <div className="system-panel">
                <div className="system-panel-head">
                  <div>
                    <span className="micro-label">8XDL control deck</span>
                    <strong>{appDisplayName}</strong>
                  </div>
                  <span className="system-version">{compatibility}</span>
                </div>

                <div className="system-panel-body">
                  <div className="system-groups">
                    {moduleGroups.map((group) => (
                      <article key={group.label} className="system-group">
                        <small>{group.label}</small>
                        <h2>{group.summary}</h2>
                        <p>{group.note}</p>
                      </article>
                    ))}
                  </div>

                  <div className="system-sidebar">
                    <div className="system-sidebar-head">
                      <span className="micro-label">Permission logic</span>
                      <h2>Public folders ask on demand.</h2>
                    </div>

                    <div className="signal-list">
                      {permissionBullets.map((item) => (
                        <article key={item} className="signal-row">
                          <Archive size={18} />
                          <p>{item}</p>
                        </article>
                      ))}
                    </div>

                    <a href={websiteUrl} className="inline-link" target="_blank" rel="noopener noreferrer">
                      Open {websiteUrl.replace('https://', '')}
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>

                <div className="module-tape" aria-label="Current modules">
                  {modules.map((module) => (
                    <span key={module.name}>{module.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="section overview-section">
        <div className="container">
          <div className="section-intro" data-reveal>
            <span className="section-kicker">Why Choose 8xdl</span>
            <h2>The most powerful download manager for Android with everything you need.</h2>
            <p>
              8xdl Download Manager is designed for users who need a reliable, feature-rich download solution. 
              From torrents to live streams, from file management to media playback - everything works seamlessly together.
            </p>
          </div>

          <div className="overview-grid">
            {overviewCards.map((card, index) => (
              <article
                key={card.title}
                className="overview-card"
                data-reveal
                style={{ '--delay': `${index * 70}ms` }}
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section permission-story-section">
        <div className="container">
          <div className="section-intro" data-reveal>
            <span className="section-kicker">Archive and storage access</span>
            <h2>Show exactly why zip and archive actions may trigger shared-folder access.</h2>
            <p>
              Users do not need a vague “storage” explanation. They need to know when FileX can work without a prompt,
              when Android will ask, and why zip extraction into a public folder is different from app-private storage.
            </p>
          </div>

          <div className="permission-story-grid">
            <div className="permission-story-copy" data-reveal style={{ '--delay': '40ms' }}>
              <div className="permission-sheet-card">
                <span className="sheet-tag">What the page should say</span>
                <h3>Zip files do not need a special Android permission by themselves.</h3>
                <p>
                  The permission depends on where the archive lives and where the extracted files will go. Public
                  folders like Downloads, Movies, Music, and SD card paths are the real reason an access prompt may
                  appear.
                </p>
                <ul className="detail-list permission-points">
                  {permissionBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="archive-board" data-reveal style={{ '--delay': '140ms' }}>
              {archiveCases.map((item) => (
                <article key={item.title} className="archive-case">
                  <span>{item.state}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="section release-section">
        <div className="container">
          <div className="release-shell" data-reveal>
            <div className="release-copy">
              <span className="section-kicker">Latest Release</span>
              <h2>Download 8xdl v{currentVersion} - Free APK for Android</h2>
              <p>
                Get the latest version of 8xdl Download Manager with improved download engine, enhanced M3U8 support, 
                better media detection, and performance optimizations. Available as free APK download for Android 8.0 and above.
              </p>
            </div>

            <div className="release-stats" aria-label="Release details">
              {releaseStats.map((item) => (
                <div key={item.label} className="release-stat">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="release-actions">
              <a href={telegramChannel} className="btn btn-primary btn-large" target="_blank" rel="noopener noreferrer">
                <Download size={22} />
                Get Current Release
              </a>
              <Link to="/permissions" className="btn btn-secondary btn-large">
                <Globe2 size={20} />
                Review Permissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
