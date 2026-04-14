import './LegalPage.css'
import PolicyHeroPanel from '../components/PolicyHeroPanel'
import { siteConfig } from '../content/site'

const termsSummary = [
  'The app is licensed for lawful personal use, not for infringement or abusive automation.',
  'Users remain responsible for the legality of the sources, files, trackers, and websites they choose to access.',
  'Permissions should be granted only for the feature you intend to use, and optional prompts can be denied.',
  'Public legal pages, in-app notices, and store disclosures should stay aligned with the shipped release.',
]

const complianceItems = [
  {
    title: 'Lawful use only',
    description:
      'Using download, browser, archive, torrent, or playback tools does not transfer ownership or usage rights over the third-party material you access.',
  },
  {
    title: 'Module permissions are contextual',
    description:
      'Camera, microphone, geolocation, notifications, biometric unlock, and broad storage access must remain tied to the user action that requires them.',
  },
  {
    title: 'External services keep their own rules',
    description:
      'Torrent peers, host sites, streaming URLs, feed providers, and Telegram or email support channels remain subject to their own terms and policies.',
  },
  {
    title: 'Public representations matter',
    description:
      'If the app materially changes its data handling, monetization, or device access, the website and store text should be updated so users are not given stale disclosures.',
  },
]

export default function Terms() {
  const { brandName, currentVersion, compatibility, supportEmail, websiteUrl, playStoreUrl, legal } = siteConfig

  return (
    <div className="legal-page">
      <div className="container">
        <PolicyHeroPanel
          kicker="Terms"
          title="Use the suite responsibly"
          subtitle={`These terms govern use of the ${brandName} website, support channels, and the Android build presented on this site. They are written to reflect a multi-module Android utility suite, not a single-purpose player or downloader.`}
          meta={[`Version ${currentVersion}`, compatibility, `Effective ${legal.effectiveDate}`]}
          summaryTitle="Core usage rules"
          summaryItems={termsSummary}
        />

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
            <h2>Acceptance</h2>
            <p>
              By downloading, installing, or using {brandName}, you agree to these terms. If you do not accept them, do
              not use the site or application.
            </p>
          </section>

          <section>
            <h2>License</h2>
            <p>
              We grant you a limited, revocable, non-exclusive, non-transferable right to use the current release for
              personal and lawful purposes.
            </p>
          </section>

          <section>
            <h2>Acceptable Use</h2>
            <p>You must use {brandName} in a lawful and responsible way.</p>
            <ul>
              <li>Do not download or distribute content without permission.</li>
              <li>Do not use the app or site to spread malware, abuse services, scrape protected services unlawfully, or bypass laws.</li>
              <li>Do not misrepresent the software as your own or interfere with service availability.</li>
            </ul>
          </section>

          <section>
            <h2>User Responsibilities</h2>
            <ul>
              <li>Maintain the security of your device and local storage.</li>
              <li>Review the legality of the files, streams, or sources you access.</li>
              <li>Keep the app version and compatibility requirements in mind before installing updates.</li>
              <li>Review permission prompts carefully and grant only the access you intend to use.</li>
            </ul>
          </section>

          <section>
            <h2>Permissions and Device Features</h2>
            <p>
              Some modules of {brandName} depend on Android permissions or special system access. Storage, network,
              notifications, camera, microphone, location, alarms, biometrics, battery behavior, and system-settings
              access should only be used for the feature that triggered them.
            </p>
            <p>
              Denying an optional permission may disable only the related function, such as voice search, geolocation in
              BrowserX, exact reminders, or biometric vault unlock.
            </p>
            <ul>
              <li>Shared-folder prompts are expected only for public storage, SD card work, or archive actions involving those locations.</li>
              <li>Camera, microphone, and location access should remain browser or page specific rather than global background use.</li>
              <li>Notification and foreground-service behavior exist to show progress and active work, not to grant content rights.</li>
            </ul>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              The website layout, branding, and first-party content for {brandName} remain the property of the project
              owners unless otherwise stated. Third-party marks belong to their respective owners.
            </p>
          </section>

          <section>
            <h2>Third-Party Sources and Websites</h2>
            <p>
              The suite may open external websites, connect to user-provided hosts, or interact with torrent peers and
              media sources that are not controlled by the project owners. Those services remain subject to their own
              terms, policies, and legal restrictions.
            </p>
          </section>

          <section>
            <h2>Availability and Updates</h2>
            <p>
              We may modify, pause, or remove features, download links, or support channels without notice. Compatibility
              may change as Android platform requirements evolve.
            </p>
          </section>

          <section>
            <h2>Disclaimer and Liability</h2>
            <p>
              {brandName} is provided without warranty. To the extent permitted by law, we are not liable for data loss,
              device issues, interrupted access, or damages resulting from misuse.
            </p>
          </section>

          <section>
            <h2>Termination</h2>
            <p>
              Access to the site or support channels may be limited or terminated if these terms are violated or if a
              security or abuse issue requires it.
            </p>
          </section>

          <section>
            <h2>Store and Policy Disclosures</h2>
            <p>
              Public pages, in-app disclosures, and any app-store privacy or data-safety declarations should be treated
              as part of the product representation. If the feature set changes, those disclosures must be updated with
              the release.
            </p>
          </section>

          <section>
            <h2>Changes to Terms</h2>
            <p>
              These terms may change. Continued use after an update means you accept the revised version published here.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
            </p>
            <div className="privacy-contact" style={{ marginTop: '1.5rem' }}>
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
