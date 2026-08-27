import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

export function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-24">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <div className="mx-auto max-w-lg">
          <div className="text-8xl font-black text-brand/20">404</div>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-foreground">
            Page Not Found
          </h1>
          <p className="mt-4 text-muted-foreground">
            The page you are looking for does not exist or has been moved. Please check the
            URL or return to the homepage.
          </p>
          <Button
            asChild
            className="mt-8 bg-brand text-brand-foreground hover:bg-brand/90"
          >
            <Link to="/">
              <Home className="mr-2 size-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
