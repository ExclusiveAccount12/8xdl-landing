import './LegalPage.css'
import PolicyHeroPanel from '../components/PolicyHeroPanel'
import { siteConfig } from '../content/site'

const disclaimerSummary = [
  '8XDL is presented as a toolbox for local media, downloads, browsing, and file workflows.',
  'The project does not represent third-party websites, streams, trackers, hosts, or public file sources.',
  'Android prompts should appear only after the user starts the related feature inside the app.',
  'Website text, in-app disclosures, and store listings should describe the same released behavior.',
]

const complianceItems = [
  {
    title: 'Tool, not content source',
    description:
      'The suite provides playback, download, browser, archive, and library features. It is not a publisher of the third-party media, files, or websites that users choose to access.',
  },
  {
    title: 'Permission prompts need a reason',
    description:
      'Sensitive Android access should be feature-triggered and explained in plain language. Public-folder management, archive extraction, media browsing, and website permissions are not the same thing.',
  },
  {
    title: 'Third-party behavior stays external',
    description:
      'Hosts, peers, streams, trackers, and websites operate under their own policies and legal terms. Their uptime, legality, and security posture remain outside first-party control.',
  },
  {
    title: 'Compliance needs alignment',
    description:
      'If the app adds telemetry, ads, cloud sync, payments, or new sensitive permissions, the website, privacy disclosures, and store declarations should be updated in the same release window.',
  },
]

export default function Disclaimer() {
  const { brandName, currentVersion, websiteUrl, supportEmail, playStoreUrl, legal } = siteConfig

  return (
    <div className="legal-page">
      <div className="container">
        <PolicyHeroPanel
          kicker="Disclaimer"
          title="Clear product boundary"
          subtitle={`This page explains what ${brandName} is responsible for, where that responsibility ends, and how permissions, external sources, and public disclosures should be interpreted.`}
          meta={[brandName, `Version ${currentVersion}`, `Updated ${legal.lastUpdated}`]}          summaryTitle="What this page clarifies"
          summaryItems={disclaimerSummary}
        />

        <div className="legal-note">
          <p>
            <strong>Short version:</strong> {brandName} is a feature suite, not a guarantee of the legality, safety, or
            availability of the third-party sources a user decides to open.
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

        <div className="legal-content">
          <section>
            <h2>What the product represents</h2>
            <p>
              {brandName} is presented as an Android suite for media playback, downloads, torrent sessions, browsing,
              feeds, archive work, and local file management. The website and policy pages exist to explain the product,
              publish support information, and describe current public disclosures.
            </p>
          </section>

          <section>
            <h2>User Responsibility</h2>
            <p>You are solely responsible for how you use the software and any content you choose to access.</p>
            <ul>
              <li>Confirm that you have the legal right to download, store, or view the content involved.</li>
              <li>Follow copyright, licensing, and platform terms that apply in your jurisdiction.</li>
              <li>Do not use the app or site for infringement, abuse, malware distribution, credential theft, or unlawful activity.</li>
            </ul>
          </section>

          <section>
            <h2>Third-Party Networks and Services</h2>
            <p>
              The suite can connect to websites, streams, torrent peers, and user-provided hosts. BrowserX can also load
              third-party pages that may request camera, microphone, or geolocation access through Android.
            </p>
            <ul>
              <li>We do not control the content, legality, or security of third-party websites or sources.</li>
              <li>You are responsible for reviewing the policies and terms of services you choose to use.</li>
              <li>Granting a permission to a third-party page is your decision and should be done cautiously.</li>
            </ul>
          </section>

          <section>
            <h2>Permissions and device access</h2>
            <p>
              Android permission prompts should appear only when the relevant module needs them. Public-folder storage,
              archive extraction, camera, microphone, location, notifications, and biometric access each serve different
              product paths and should not be interpreted as blanket collection rights.
            </p>
            <ul>
              <li>Archive or zip prompts are usually about the chosen folder location, not about the file type itself.</li>
              <li>Browser permissions for camera, microphone, or location are tied to page-level actions and OS approval.</li>
              <li>Denying an optional permission may disable only the related feature instead of the whole app.</li>
            </ul>
          </section>

          <section>
            <h2>No warranty</h2>
            <p>
              {brandName} is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do not guarantee uninterrupted service,
              compatibility with every device, or the continued availability of any external source, host, or website.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent allowed by law, the developers and operators of {brandName} are not liable for
              direct or indirect damages arising from use of the software or website.
            </p>
            <ul>
              <li>Device instability, failed downloads, or data loss</li>
              <li>Network, hosting, or third-party service interruptions</li>
              <li>Legal or financial consequences caused by misuse</li>
            </ul>
          </section>

          <section>
            <h2>Disclosure and compliance representation</h2>
            <p>
              Legal pages, in-app disclosures, and app-store declarations should describe the same actual release. This
              disclaimer does not replace a privacy policy, a permission explanation, or any required store compliance
              form, but it should remain consistent with them.
            </p>
          </section>

          <section>
            <h2>Changes</h2>
            <p>
              This disclaimer may be updated when the product, support flow, or legal requirements change. Continued use
              of the website or app after updates means you accept the revised text.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about this disclaimer can be sent to <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
            </p>
            <div className="privacy-contact" style={{ marginTop: '1.5rem' }}>
              <p><strong>Brand:</strong> {brandName}</p>
              <p><strong>Website:</strong> <a href={websiteUrl} target="_blank" rel="noopener noreferrer">{websiteUrl}</a></p>
              <p><strong>Play Store:</strong> <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">com.codex.torrentx</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${supportEmail}`}>{supportEmail}</a></p>
              <p><strong>Last Updated:</strong> {legal.lastUpdated}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
