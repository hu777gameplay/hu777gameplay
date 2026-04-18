import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Download,
  Gift,
  Globe,
  Monitor,
  Shield,
  Smartphone,
  Trophy,
  Zap,
} from "lucide-react";

export default function DownloadController() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Download HU777
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose your platform and start your gaming adventure today.
              Available on all major devices and operating systems.
            </p>
          </div>
        </section>

        {/* Download Options */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <CardTitle>Mobile App</CardTitle>
                <CardDescription>Android & iOS</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Download our mobile app for the best gaming experience on the
                  go.
                </p>
                <div className="space-y-3">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    asChild
                  >
                    <Link href="/apk">
                      <Download className="mr-2 h-4 w-4" />
                      Download APK
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full">
                    App Store (Coming Soon)
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Monitor className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <CardTitle>Desktop App</CardTitle>
                <CardDescription>Windows & Mac</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Full desktop experience with advanced features and high
                  performance.
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Download className="mr-2 h-4 w-4" />
                    Download for Windows
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download for Mac
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <CardTitle>Web Version</CardTitle>
                <CardDescription>Browser-based</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Play directly in your browser. No download required, works on
                  any device.
                </p>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  asChild
                >
                  <Link href="/hu777">Play Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* System Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            System Requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Mobile (Android)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>OS Version:</span>
                  <span>Android 8.0+</span>
                </div>
                <div className="flex justify-between">
                  <span>RAM:</span>
                  <span>2GB+</span>
                </div>
                <div className="flex justify-between">
                  <span>Storage:</span>
                  <span>500MB</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  Desktop (Windows/Mac)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>OS:</span>
                  <span>Windows 10+ / macOS 10.15+</span>
                </div>
                <div className="flex justify-between">
                  <span>RAM:</span>
                  <span>4GB+</span>
                </div>
                <div className="flex justify-between">
                  <span>Storage:</span>
                  <span>1GB</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Download HU777?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Secure</h3>
              <p className="text-sm text-gray-600">
                Bank-grade security and SSL encryption
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Fast</h3>
              <p className="text-sm text-gray-600">
                Lightning-fast loading and smooth gameplay
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Free</h3>
              <p className="text-sm text-gray-600">
                Download and play for free
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Rewards</h3>
              <p className="text-sm text-gray-600">
                Exclusive bonuses and tournaments
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-8">Ready to Start?</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Button variant="outline" asChild>
              <Link href="/register">Create Account</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">Gaming Tips</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
