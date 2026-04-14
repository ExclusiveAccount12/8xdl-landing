import {
  AlarmClock,
  Archive,
  Bell,
  Camera,
  Fingerprint,
  HardDrive,
  Mic,
  Power,
  Settings2,
  Shield,
  Wifi,
  Zap,
} from 'lucide-react'
import './LegalPage.css'
import './Permissions.css'
import PolicyHeroPanel from '../components/PolicyHeroPanel'
import { siteConfig } from '../content/site'

const permissionSummary = [
  {
    title: 'No website prompt',
    value: '8xdl.in itself does not request Android device permissions.',
  },
  {
    title: 'Ask on demand',
    value: 'Prompts should appear only after a user action inside the app.',
  },
  {
    title: 'Archive rule',
    value: 'Zip access depends on the chosen folder, not the zip format alone.',
  },
  {
    title: 'Fallback',
    value: 'App-private storage and limited document-tree access should still work.',
  },
]

const permissionCards = [
  {
    icon: HardDrive,
    title: 'Storage and media library',
    tag: 'Core',
    description:
      'Used when you open shared device folders, save to public storage, or browse media libraries through FileX, DownloadX, VideoX, and MusicX.',
    points: [
      'Android access: READ_MEDIA_VIDEO, READ_MEDIA_AUDIO, READ_EXTERNAL_STORAGE, WRITE_EXTERNAL_STORAGE',
      'Broad file access is for public-folder management, not for normal app startup or app-private storage',
      'Downloads, Movies, Music, and SD card paths are the main triggers for these prompts',
    ],
  },
  {
    icon: Archive,
    title: 'Zip, rar, and archive workflows',
    tag: 'Why it appears',
    description:
      'Archive open, extract, and compress actions follow the same folder-access rule as any other file operation.',
    points: [
      'Opening a zip inside Downloads or SD card may require shared-folder access because the archive itself lives there',
      'Extracting into Movies, Downloads, or external storage asks for access to that destination, not to “zip files” as a special category',
      'Archives in app-private storage or a SAF-approved folder should stay limited to that granted scope instead of asking for everything',
    ],
  },
  {
    icon: Wifi,
    title: 'Network access',
    tag: 'Required',
    description:
      'Needed for downloads, torrent sessions, browser requests, update links, feed refreshes, and other network-driven features.',
    points: [
      'Android access: INTERNET, ACCESS_NETWORK_STATE, ACCESS_WIFI_STATE',
      'Connects only to websites, peers, feeds, and URLs you choose to use',
      'Support pages, release links, and remote content all rely on the same network layer',
    ],
  },
  {
    icon: Bell,
    title: 'Notifications and foreground work',
    tag: 'Operational',
    description:
      'Keeps active transfers, extraction tasks, and playback visible while work continues in the background.',
    points: [
      'Android access: POST_NOTIFICATIONS, FOREGROUND_SERVICE, FOREGROUND_SERVICE_DATA_SYNC, FOREGROUND_SERVICE_MEDIA_PLAYBACK',
      'Shows active progress, completion alerts, and long-running background activity',
      'These are operational permissions, not content or personal-data access',
    ],
  },
  {
    icon: Mic,
    title: 'Browser media permissions',
    tag: 'Feature-based',
    description:
      'Microphone, camera, and location should appear only when BrowserX or a web page asks for them during a feature you started.',
    points: [
      'Android access: RECORD_AUDIO, MODIFY_AUDIO_SETTINGS, CAMERA, ACCESS_FINE_LOCATION',
      'Core downloads, zip extraction, and local playback do not need these prompts',
      'The correct pattern is Android approval plus a page-level approval, not silent background access',
    ],
  },
  {
    icon: Fingerprint,
    title: 'Optional secure and scheduled features',
    tag: 'Optional',
    description:
      'Biometric unlock, reminder alarms, ringtone actions, and wake behaviors support optional module flows, not the main download path.',
    points: [
      'Android access: USE_BIOMETRIC, SCHEDULE_EXACT_ALARM, USE_EXACT_ALARM, WRITE_SETTINGS, WAKE_LOCK, RECEIVE_BOOT_COMPLETED',
      'VaultX biometric unlock should stay isolated to secure content only',
      'Reminder and settings-related access should exist only if the release still exposes those features',
    ],
  },
]

const archiveScenarios = [
  {
    state: 'No prompt',
    title: 'Open or extract a zip inside app storage',
    description:
      'If the archive and destination live inside app-private storage, FileX should not need broad shared-folder access.',
  },
  {
    state: 'Prompt likely',
    title: 'Open a zip from Downloads',
    description:
      'The archive is already in a public folder, so Android may require media or storage permission before FileX can read it directly.',
  },
  {
    state: 'Prompt likely',
    title: 'Extract an archive to Movies or SD card',
    description:
      'The permission is about writing to the chosen destination folder. The zip format itself is not the permission reason.',
  },
  {
    state: 'Limited access',
    title: 'Use a document-tree picker instead of full access',
    description:
      'If you grant a specific SAF tree, archive actions should remain limited to that approved folder scope rather than broad file access.',
  },
]

const complianceItems = [
  {
    title: 'Prompts should follow intent',
    description:
      'The correct pattern is user action first, Android prompt second. The app should not ask for camera, microphone, location, or broad file access during idle startup.',
  },
  {
    title: 'Explain the folder, not just the permission',
    description:
      'When a shared-folder request appears, users should be told which path or workflow caused it, such as Downloads, Movies, SD card extraction, or media-library indexing.',
  },
  {
    title: 'Offer scoped alternatives',
    description:
      'Where possible, document-tree selection or app-private storage should remain available so users do not need broad storage approval for every archive workflow.',
  },
  {
    title: 'Keep disclosures synchronized',
    description:
      'Website policy text, in-app rationale copy, and store disclosure forms should all describe the same current permission behavior with the same examples.',
  },
]

export default function Permissions() {
  const { brandName, currentVersion, supportEmail, websiteUrl, playStoreUrl, legal } = siteConfig

  return (
    <div className="legal-page permissions-page-modern">
      <div className="container">
        <PolicyHeroPanel
          kicker="Permissions"
          title="Why the app may ask for access"
          subtitle={`${brandName} uses feature-based Android permissions. This page explains what may be requested, which modules trigger it, and why zip or archive workflows can sometimes lead to shared-folder access prompts.`}
          meta={[`Version ${currentVersion}`, websiteUrl.replace('https://', ''), `Updated ${legal.lastUpdated}`]}
          summaryTitle="Permission principles"
          summaryItems={permissionSummary.map((item) => `${item.title}: ${item.value}`)}
        />

        <div className="permission-summary-grid">
          {permissionSummary.map((item) => (
            <article key={item.title} className="permission-summary-item">
              <h2>{item.title}</h2>
              <p>{item.value}</p>
            </article>
          ))}
        </div>

        <div className="legal-note permission-callout">
          <p>
            <strong>Important:</strong> Zip files do not require a separate Android permission category. The prompt is
            about where the archive is stored or where extracted files will be written. Public folders and SD card paths
            are the real reason Android may ask.
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
          <div className="permissions-grid permissions-grid-modern">
            {permissionCards.map(({ icon: Icon, title, tag, description, points }) => (
              <div key={title} className="permission-card permission-card-modern">
                <div className="permission-icon">
                  <Icon size={28} />
                </div>
                <div className="permission-content">
                  <span className={`permission-tag${tag === 'Optional' ? ' optional' : ''}`}>{tag}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul>
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <section className="permission-scenarios">
            <h2>Zip and archive scenarios</h2>
            <p>
              These are the common cases users ask about when a shared-folder or all-files request appears during FileX
              archive work.
            </p>
            <div className="permission-scenarios-grid">
              {archiveScenarios.map((scenario) => (
                <article key={scenario.title} className="permission-scenario-card">
                  <span>{scenario.state}</span>
                  <h3>{scenario.title}</h3>
                  <p>{scenario.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="permission-info">
            <h2>How to manage permissions</h2>
            <ol>
              <li>Open Android Settings and choose the installed {brandName} build.</li>
              <li>Open Permissions.</li>
              <li>Review storage, browser, and notification access based on the modules you actually use.</li>
              <li>For archive work, remember that the folder location is the main trigger for the request.</li>
            </ol>
          </section>

          <section className="permission-info">
            <h2>Policy notes</h2>
            <ul>
              <li>The website does not ask for Android permissions. Prompts happen in the app only.</li>
              <li>Broad file access should stay tied to FileX-style public-folder management, not routine startup.</li>
              <li>Camera, microphone, and location should appear only when BrowserX or a website requests them after you start that flow.</li>
              <li>Privacy, permissions, and store disclosures should describe the same behavior in the same language.</li>
            </ul>
          </section>

          <section className="permission-info">
            <h2>Compliance detail</h2>
            <ul>
              <li>Archive extraction should explain the source folder and destination folder when asking for access.</li>
              <li>Library scans should state whether the app is indexing user-selected folders or common media locations.</li>
              <li>Notification and foreground-service prompts should be framed as progress visibility and active-task reporting.</li>
              <li>Biometric, alarm, and settings-related access should stay isolated to the optional module that uses them.</li>
            </ul>
          </section>

          <section className="permission-info">
            <h2>Questions</h2>
            <p>
              If an archive, zip, or shared-folder permission request looks unexpected, contact{' '}
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a> with your device model, the module name, and the
              screen where the prompt appeared.
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
