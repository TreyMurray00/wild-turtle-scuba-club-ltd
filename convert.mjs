import fs from 'fs'
import path from 'path'

const srcDir = 'C:/Users/treym/Downloads/Responsive fishing diving website/src/app/pages'
const destDir = 'c:/Users/treym/OneDrive/Desktop/PROJECTS/wild-turtle-scuba-club-ltd/src/routes'

const files = ["About.tsx", "Accommodation.tsx", "Contact.tsx", "Disclaimer.tsx", "Home.tsx", "Pricing.tsx", "Privacy.tsx", "Services.tsx"]

files.forEach(file => {
  const code = fs.readFileSync(path.join(srcDir, file), 'utf8')
  // Replace react-router with @tanstack/react-router
  let newCode = code.replace(/from "react-router"/g, 'from "@tanstack/react-router"')
  newCode = newCode.replace(/from 'react-router'/g, "from '@tanstack/react-router'")
  
  // Replace asset paths if any
  
  // Wrap in Tanstack Route
  const routeName = file === "Home.tsx" ? "/" : `/${file.replace(".tsx", "").toLowerCase()}`
  const componentName = file.replace(".tsx", "")
  
  const header = `import { createFileRoute } from '@tanstack/react-router'\n\nexport const Route = createFileRoute('${routeName}')({\n  component: ${componentName},\n})\n\n`
  
  newCode = header + newCode
  
  const destPath = file === "Home.tsx" ? path.join(destDir, "index.tsx") : path.join(destDir, file.toLowerCase())
  fs.writeFileSync(destPath, newCode)
})

// Navigation
const navCode = fs.readFileSync('C:/Users/treym/Downloads/Responsive fishing diving website/src/app/components/Navigation.tsx', 'utf8')
let newNavCode = navCode
  .replace(/from "react-router"/g, 'from "@tanstack/react-router"')
  .replace(/figma:asset\//g, '../assets/')
  .replace(/\.\/ui\/button/g, './ui/button') // Since Navigation is being placed in components/
fs.writeFileSync('c:/Users/treym/OneDrive/Desktop/PROJECTS/wild-turtle-scuba-club-ltd/src/components/Navigation.tsx', newNavCode)

// ImageWithFallback
if (!fs.existsSync('c:/Users/treym/OneDrive/Desktop/PROJECTS/wild-turtle-scuba-club-ltd/src/components/figma')) {
  fs.mkdirSync('c:/Users/treym/OneDrive/Desktop/PROJECTS/wild-turtle-scuba-club-ltd/src/components/figma', { recursive: true})
}
const fallbackCode = fs.readFileSync('C:/Users/treym/Downloads/Responsive fishing diving website/src/app/components/figma/ImageWithFallback.tsx', 'utf8')
fs.writeFileSync('c:/Users/treym/OneDrive/Desktop/PROJECTS/wild-turtle-scuba-club-ltd/src/components/figma/ImageWithFallback.tsx', fallbackCode)

console.log('Conversion done.')
