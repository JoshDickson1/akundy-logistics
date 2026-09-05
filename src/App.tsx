import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/scroll-to-top'
import { ThemeProvider } from './components/theme-provider'
import { Layout } from './components/layout/layout'
import { AboutPage } from './pages/about'
import { CertificationsPage } from './pages/certifications'
import { ContactPage } from './pages/contact'
import { EquipmentCataloguePage } from './pages/equipment-catalogue'
import { HeroPreviewPage } from './pages/hero-preview'
import { HomePage } from './pages/home'
import { HseQualityPage } from './pages/hse-quality'
import { IndustriesClientsPage } from './pages/industries-clients'
import { NotFoundPage } from './pages/not-found'
import { PrivacyPage } from './pages/privacy'
import { ProductDetailPage } from './pages/product-detail'
import { ServicesPage } from './pages/services'
import { TermsPage } from './pages/terms'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="hero-preview" element={<HeroPreviewPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="equipment" element={<EquipmentCataloguePage />} />
            <Route path="equipment/:productId" element={<ProductDetailPage />} />
            <Route path="hse-quality" element={<HseQualityPage />} />
            <Route path="certifications" element={<CertificationsPage />} />
            <Route path="clients" element={<IndustriesClientsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
