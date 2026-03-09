"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Register() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error ?? "Failed to register");
                return;
            }
            router.push("/login");
        } catch {
            setError("Failed to register");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-linear-to-b from-slate-50 to-slate-100 px-4 py-10">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Create your account</CardTitle>
                    <CardDescription>
                        Enter your email and password.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <p className="text-sm text-red-600">{error}</p>
                        )}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="********"
                                autoComplete="new-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" disabled={loading}>
                            {loading ? "Creating..." : "Create account"}
                        </Button>
                    </form>

                    <p className="mt-4 text-center text-sm text-slate-600">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-medium text-emerald-700 hover:text-emerald-600"
                        >
                            Login
                        </Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
