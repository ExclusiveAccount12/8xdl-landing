import { AlertCircle, Database, FileText, Globe, Lock, Mail, Shield } from 'lucide-react'
import './LegalPage.css'
import './Privacy.css'
import PolicyHeroPanel from '../components/PolicyHeroPanel'
import { siteConfig } from '../content/site'

const summaryItems = [
  'No first-party account system, signup flow, or checkout form on this website',
  'Support forms process only the contact and device details that you decide to submit',
  'Core downloads, library indexes, watch history, and vault state are positioned as device-resident data',
  'Network, browser, archive, and permission-heavy features still involve the destination service or Android OS layer you use',
]

const complianceItems = [
  {
    title: 'Website and app have different boundaries',
    description:
      '8xdl.in is a public information and support site. Android permission prompts, local files, and module workflows happen inside the installed app, not on the website.',
  },
  {
    title: 'Broad storage access needs a narrow explanation',
    description:
      'If FileX, DownloadX, or library modules request shared-folder access, the reason should be the folder or feature involved, such as public Downloads, Movies, Music, SD card paths, or archive extraction targets.',
  },
  {
    title: 'Third-party services still receive traffic',
    description:
      'Torrent peers, websites, feeds, Telegram delivery, speech recognition providers, and media hosts may receive the request data needed to perform the task you started.',
  },
  {
    title: 'Future features require policy updates',
    description:
      'If the suite adds analytics, ads, cloud backup, accounts, or payment processing, privacy text and store disclosures should be revised before the release is promoted.',
  },
]

export default function Privacy() {
  const {
    brandName,
    currentVersion,
    compatibility,
    supportEmail,
    websiteUrl,
    playStoreUrl,
    telegramSupport,
    telegramChannel,
    telegramGroup,
    legal,
  } = siteConfig

  return (
    <div className="privacy-page legal-page">
      <div className="container">
        <PolicyHeroPanel
          kicker="Privacy"
          title="Local-first privacy, explained clearly"
          subtitle={`This policy covers the ${brandName} website, public support forms, and the current product posture described on this site. It is written to match the public support and disclosure flow, not to overstate collection.`}
          meta={[`Version ${currentVersion}`, compatibility, `Effective ${legal.effectiveDate}`]}
          summaryTitle="Current privacy posture"
          summaryItems={summaryItems}
        />

        <div className="legal-note">
          <p>
            <strong>Scope note:</strong> this page is written to match the current website and support flow. If a future
            Android release adds telemetry, accounts, cloud sync, or payment processing, this policy should be updated at
            the same time as the feature launch.
          </p>
        </div>

        <div className="compliance-grid">
          {complianceItems.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="privacy-content">
          <section className="privacy-section">
            <div className="privacy-section-head">
              <Database size={24} />
              <h2>What Information We Receive</h2>
            </div>
            <p>
              This website does not require sign-in, subscriptions, or payment details. We only receive personal data
              when you choose to send it through support channels or direct contact links.
            </p>
            <ul>
              <li>Name and email address submitted through bug report or feature request forms</li>
              <li>Device model, Android version, app version, and issue details included in bug reports</li>
              <li>Any additional text you include in support messages or direct emails</li>
            </ul>
          </section>

          <section className="privacy-section">
            <div className="privacy-section-head">
              <Lock size={24} />
              <h2>First-party collection boundary</h2>
            </div>
            <p>
              The current Android build is positioned as local-first. Based on the code currently linked from this site,
              we did not identify first-party analytics SDKs, ads SDKs, account systems, or cloud-sync services operated
              by the project owners.
            </p>
            <ul>
              <li>Website accounts or persistent user profiles</li>
              <li>Payment card data</li>
              <li>The actual files you download through the Android app</li>
              <li>Support data you did not choose to provide yourself</li>
              <li>Ongoing telemetry about every page you visit or file you open inside the suite</li>
            </ul>
          </section>

          <section className="privacy-section">
            <div className="privacy-section-head">
              <Globe size={24} />
              <h2>When Third Parties May Still Receive Data</h2>
            </div>
            <p>
              Privacy-first does not mean zero networking. When you intentionally use a network or system feature, data
              can still be processed by the destination service or the OS component that performs the task.
            </p>
            <ul>
              <li>Downloads, streams, and torrent sessions connect directly to the URLs, peers, and hosts you choose</li>
              <li>BrowserX pages may receive your IP address, cookies, headers, and normal browser request metadata</li>
              <li>Voice search may rely on Android speech-recognition services provided by your device or OS stack</li>
              <li>BrowserX websites can request camera, microphone, or geolocation only after OS and in-page approval</li>
              <li>Support forms use Telegram Bot delivery and may fall back to your email client</li>
            </ul>
            <p>
              If you submit a form or contact support directly, the content you send may be processed by Telegram, your
              email provider, or other messaging infrastructure involved in delivery.
            </p>
          </section>

          <section className="privacy-section">
            <div className="privacy-section-head">
              <FileText size={24} />
              <h2>Local Device and App Data</h2>
            </div>
            <p>
              The public positioning of {brandName} is privacy-first and local-first by default. The current build stores
              its operational data on your device rather than in a first-party cloud account.
            </p>
            <ul>
              <li>Downloaded files and library indexes are intended to remain in local storage</li>
              <li>Playback history, app settings, reminders, and vault preferences are device-resident app data</li>
              <li>Biometric unlock, when enabled, is used locally to unlock VaultX on your device</li>
              <li>The website itself does not manage a user cloud account for you</li>
            </ul>
          </section>

          <section className="privacy-section">
            <div className="privacy-section-head">
              <Shield size={24} />
              <h2>Sensitive permissions and data access</h2>
            </div>
            <p>
              Android permission prompts happen inside the app, not on this website. The current app manifest includes
              storage/media, network, notification, microphone, camera, location, alarm, biometric, battery, and device
              settings related access. Those permissions should stay tied to the feature that triggered them.
            </p>
            <ul>
              <li>Storage and media access for downloads, file browsing, and user-selected media libraries</li>
              <li>Microphone for voice search and microphone-enabled web pages in BrowserX</li>
              <li>Camera for camera-enabled web pages and QR-based device-share flows</li>
              <li>Location for websites opened in BrowserX that request geolocation and only after you allow it</li>
              <li>Exact alarms for FeedX reminders, biometrics for VaultX, and write-settings access for ringtone actions</li>
            </ul>
            <p>
              Broad shared-folder access, when present, should be explained as a file-management or public-folder need.
              Zip and archive prompts are usually caused by the source or destination folder, not by a special “zip
              permission” category.
            </p>
          </section>

          <section className="privacy-section">
            <div className="privacy-section-head">
              <AlertCircle size={24} />
              <h2>Retention and requests</h2>
            </div>
            <p>
              Support submissions may be kept only as long as needed to review issues, answer your request, or maintain a
              record of abuse or security problems. If you want a support email or form submission deleted, contact us.
            </p>
            <p>
              We will review requests for access, correction, or deletion based on the information available in the
              message you sent.
            </p>
          </section>

          <section className="privacy-section">
            <div className="privacy-section-head">
              <Globe size={24} />
              <h2>External Services and Links</h2>
            </div>
            <p>
              This site links to Telegram channels, support chats, and email. Those services have their own privacy
              policies and security controls. Review them separately before using those platforms.
            </p>
          </section>

          <section className="privacy-section">
            <div className="privacy-section-head">
              <FileText size={24} />
              <h2>Compliance and disclosure alignment</h2>
            </div>
            <p>
              Public pages, in-app disclosures, and Google Play Data safety declarations should describe the same real
              behavior. If a future build adds telemetry, accounts, remote sync, payment processing, or new sensitive
              permissions, this page and the related app disclosures should be updated before release.
            </p>
          </section>

          <section className="privacy-section">
            <div className="privacy-section-head">
              <Mail size={24} />
              <h2>Contact</h2>
            </div>
            <div className="privacy-contact">
              <p><strong>Brand:</strong> {brandName}</p>
              <p><strong>Website:</strong> <a href={websiteUrl} target="_blank" rel="noopener noreferrer">{websiteUrl}</a></p>
              <p><strong>Play Store:</strong> <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">com.codex.torrentx</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${supportEmail}`}>{supportEmail}</a></p>
              <p><strong>Telegram Support:</strong> <a href={telegramSupport} target="_blank" rel="noopener noreferrer">{telegramSupport.replace('https://', '')}</a></p>
              <p><strong>Telegram Channel:</strong> <a href={telegramChannel} target="_blank" rel="noopener noreferrer">{telegramChannel.replace('https://', '')}</a></p>
              <p><strong>Telegram Group:</strong> <a href={telegramGroup} target="_blank" rel="noopener noreferrer">{telegramGroup.replace('https://', '')}</a></p>
              <p><strong>Last Updated:</strong> {legal.lastUpdated}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
