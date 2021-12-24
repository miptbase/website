export const avatarPlaceholder = () => `
<svg width="100%" height="100%" viewBox="0 0 96 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<rect width="96" height="98" fill="#F7F7F7"/>
<circle cx="49" cy="35" r="23" fill="white"/>
<circle cx="49.5001" cy="118.5" r="53.7189" fill="white"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="96" height="98" fill="white"/>
</clipPath>
</defs>
</svg>`
export const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)