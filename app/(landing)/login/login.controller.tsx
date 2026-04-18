"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth";
import { Eye, EyeOff, LogIn, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginController() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!email || !password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    const success = await login(email, password);
    if (success) {
      router.push("/");
    } else {
      setError("Invalid email or password");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Login to HU777
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Access your account and continue your gaming journey with
              exclusive rewards.
            </p>
          </div>
        </section>

        {/* Login Form */}
        <section className="mb-16">
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <LogIn className="h-6 w-6" />
                Welcome Back
              </CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                {error && (
                  <div className="text-red-600 text-sm text-center">
                    {error}
                  </div>
                )}
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </form>
              <div className="text-center text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="text-blue-600 hover:underline"
                >
                  Register here
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Security Features */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Secure Login</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your account is protected with advanced security measures
                  including SSL encryption and two-factor authentication.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <LogIn className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Easy Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Quick and secure login process. Access your account from any
                  device, anywhere, anytime.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Internal Links */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-8">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Button variant="outline" asChild>
              <Link href="/register">Create Account</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/download">Download App</Link>
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
