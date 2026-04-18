import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { navigationLinks } from "@/lib/data";
import { Download, Shield, Smartphone, Zap } from "lucide-react";
import Link from "next/link";

export default function ApkController() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Download HU777 APK
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the official HU777 APK for Android and experience seamless
              gaming on your mobile device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Download className="mr-2 h-5 w-5" />
                Download APK Now
              </Button>
              <Button size="lg" variant="outline">
                <Smartphone className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Secure Download</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Official APK from HU777 with built-in security features and
                  virus protection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Fast Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Quick and easy installation process. Start gaming in minutes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Mobile Optimized</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Fully optimized for mobile devices with smooth gameplay and
                  responsive design.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Download Instructions */}
        <section className="mb-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">How to Install</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Download APK</h3>
                  <p className="text-gray-600">
                    Click the download button above to get the APK file.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Enable Unknown Sources</h3>
                  <p className="text-gray-600">
                    Go to Settings &gt; Security &gt; Enable Unknown Sources.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Install & Play</h3>
                  <p className="text-gray-600">
                    Open the downloaded file and install. Start gaming!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Internal Links */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-8">Explore More</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {navigationLinks.slice(0, 4).map((link) => (
              <Button key={link.href} variant="outline" asChild>
                <Link href={link.href}>{link.name}</Link>
              </Button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
