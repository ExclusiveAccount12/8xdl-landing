export default function Logo8XDL({ size = 36, className = '' }) {
  return (
    <img
      src="/logo8xdl.png"
      alt="8XDL Logo"
      width={size}
      height={size}
      className={`logo-8xdl ${className}`}
      style={{
        objectFit: 'contain',
        filter: 'drop-shadow(0 2px 8px rgba(249, 115, 58, 0.3))'
      }}
    />
  )
}
