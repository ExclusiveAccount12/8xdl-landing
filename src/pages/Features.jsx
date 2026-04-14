import { 
  Download, 
  Globe, 
  Lock, 
  Shield,
  Music,
  Video,
  FolderOpen,
  Rss,
  Radio,
  Share2,
  ExternalLink
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../content/site'
import './LegalPage.css'
import './Features.css'

const moduleFeatures = [
  {
    icon: Share2,
    name: 'TorrentX',
    label: 'BitTorrent Client',
    description: 'Full-featured torrent client with magnet link support, DHT, peer exchange, and advanced download management. Handle multiple torrents simultaneously with pause, resume, and priority controls.',
    features: ['Magnet links', 'DHT & PEX', 'Sequential download', 'Bandwidth control']
  },
  {
    icon: Video,
    name: 'VideoX',
    label: 'Video Player',
    description: 'Advanced video player with hardware acceleration, subtitle support, and gesture controls. Supports all major formats including MP4, MKV, AVI, and streaming protocols.',
    features: ['Hardware decode', 'Subtitle support', 'Gesture controls', 'Turbo mode']
  },
  {
    icon: Music,
    name: 'MusicX',
    label: 'Audio Player',
    description: 'Beautiful music player with equalizer, playlist management, and background playback. Supports all audio formats with gapless playback and sleep timer.',
    features: ['Equalizer', 'Playlists', 'Background play', 'Sleep timer']
  },
  {
    icon: FolderOpen,
    name: 'FileX',
    label: 'File Manager',
    description: 'Powerful file manager with search, sorting, and batch operations. Browse, copy, move, rename, and delete files with ease. Supports archives and cloud storage.',
    features: ['Universal search', 'Batch operations', 'Archive support', 'Cloud integration']
  },
  {
    icon: Download,
    name: 'DownloadX',
    label: 'Download Manager',
    description: 'IDM-style download manager with multi-threaded downloads, resume support, and queue management. Download files up to 10x faster with intelligent segmentation.',
    features: ['Multi-threaded', 'Resume support', 'Queue management', '10x speed boost']
  },
  {
    icon: Radio,
    name: 'M3u8X',
    label: 'HLS Streamer',
    description: 'Specialized HLS/M3U8 downloader and streamer. Download live streams, VOD content, and convert to MP4. Supports encryption and multi-quality streams.',
    features: ['Live recording', 'VOD download', 'Auto-convert', 'Quality selection']
  },
  {
    icon: Rss,
    name: 'FeedX',
    label: 'RSS & Feed Reader',
    description: 'Modern feed reader with bookmarks, reminders, and quick links. Stay updated with your favorite content sources and organize your reading list.',
    features: ['RSS feeds', 'Bookmarks', 'Reminders', 'Quick links hub']
  },
  {
    icon: Lock,
    name: 'VaultX',
    label: 'Secure Vault',
    description: 'Military-grade encrypted vault for sensitive files. Protect your private photos, videos, and documents with PIN, pattern, or biometric authentication.',
    features: ['AES-256 encryption', 'Biometric lock', 'Hidden vault', 'Recovery phrase']
  },
  {
    icon: Globe,
    name: 'BrowserX',
    label: 'Web Browser',
    description: 'Privacy-focused browser with ad-blocking, media detection, and download integration. Browse safely with built-in tracker blocking and popup prevention.',
    features: ['Ad blocker', 'Media sniffer', 'Privacy mode', 'Download integration']
  },
]

const additionalFeatures = [
  {
    icon: Shield,
    title: 'Stable Release Focus',
    description: 'The public site tracks the actual Android build version and compatibility settings from the TorrentX project.',
  },
  {
    icon: Lock,
    title: 'Privacy-First Posture',
    description: '8XDL works client-side and does not collect personal data, browsing history, or telemetry.',
  },
]

export default function Features() {
  const { brandName, appDisplayName, currentVersion, compatibility, moduleCount, playStoreUrl } = siteConfig

  return (
    <div className="legal-page features-page">
      <div className="container">
        <div className="legal-hero features-hero">
          <span className="legal-kicker">Product</span>
          <h1 className="features-title">Feature Overview</h1>
          <p className="subtitle">
            A focused view of what the current {brandName} release is trying to do well, based on the actual Android app
            modules inside the TorrentX project.
          </p>
          <div className="legal-meta">
            <span>Version {currentVersion}</span>
            <span>{compatibility}</span>
            <span>{moduleCount} live modules</span>
          </div>
          
          <a 
            href={playStoreUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="play-store-button"
          >
            <svg viewBox="0 0 24 24" className="play-store-icon">
              <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <div className="play-store-text">
              <span className="play-store-label">GET IT ON</span>
              <span className="play-store-name">Google Play</span>
            </div>
            <ExternalLink size={18} className="play-store-external" />
          </a>
        </div>

        <div className="modules-showcase">
          <h2 className="section-title">All 9 Modules</h2>
          <p className="section-subtitle">
            Each module is a complete, standalone tool designed to work seamlessly together
          </p>
          
          <div className="modules-grid">
            {moduleFeatures.map(({ icon: Icon, name, label, description, features }) => (
              <article key={name} className="module-card">
                <div className="module-header">
                  <div className="module-icon">
                    <Icon size={24} />
                  </div>
                  <div className="module-title-group">
                    <h3>{name}</h3>
                    <span className="module-label">{label}</span>
                  </div>
                </div>
                <p className="module-description">{description}</p>
                <ul className="module-features">
                  {features.map((feature) => (
                    <li key={feature}>
                      <span className="feature-bullet">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="additional-features">
          <h2 className="section-title">Additional Highlights</h2>
          <div className="feature-grid-page">
            {additionalFeatures.map(({ icon: Icon, title, description }) => (
              <article key={title} className="feature-tile">
                <div className="feature-tile-icon">
                  <Icon size={20} />
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="feature-cta">
          <p>
            Want to suggest a change to the {appDisplayName} roadmap or detail a missing workflow?
          </p>
          <Link to="/suggest-feature" className="btn btn-primary">
            Suggest a Feature
          </Link>
        </div>
      </div>
    </div>
  )
}
