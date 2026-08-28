import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/scroll-to-top'
import { ThemeProvider } from './components/theme-provider'
import { Layout } from './components/layout/layout'
import { AboutPage } from './pages/about'
import { CertificationsPage } from './pages/certifications'
import { ContactPage } from './pages/contact'
import { EquipmentCataloguePage } from './pages/equipment-catalogue'
import { NotFoundPage } from './pages/not-found'
import { ProductDetailPage } from './pages/product-detail'
import { HomePage } from './pages/home'
import { HseQualityPage } from './pages/hse-quality'
import { IndustriesClientsPage } from './pages/industries-clients'
import { ServicesPage } from './pages/services'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="equipment" element={<EquipmentCataloguePage />} />
            <Route path="equipment/:productId" element={<ProductDetailPage />} />
            <Route path="hse-quality" element={<HseQualityPage />} />
            <Route path="certifications" element={<CertificationsPage />} />
            <Route path="clients" element={<IndustriesClientsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
