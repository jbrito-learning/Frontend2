"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Me = {
    id: number;
    email: string;
};

const Dashboard = () => {
    const router = useRouter();
    const [user, setUser] = useState<Me | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/auth/me")
            .then((res) => {
                if (!res.ok) {
                    router.push("/login");
                    return null;
                }
                return res.json();
            })
            .then((data) => {
                if (data) setUser(data);
            })
            .finally(() => setLoading(false));
    }, [router]);

    const initials = user?.email.slice(0, 2).toUpperCase() ?? "??";

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-linear-to-b from-slate-50 to-slate-100 px-4 py-10">
            <div className="mx-auto max-w-4xl space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
                </div>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between gap-4">
                        <div className="space-y-1">
                            <CardTitle>User Profile</CardTitle>
                            <p className="text-sm text-slate-600">
                                Current signed-in user
                            </p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-lg font-semibold text-emerald-700">
                            {loading ? "…" : initials}
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {loading ? (
                            <p className="text-sm text-slate-500">Loading user info…</p>
                        ) : (
                            <>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-lg border border-slate-200 bg-white p-4">
                                        <p className="text-xs uppercase tracking-wide text-slate-500">
                                            ID
                                        </p>
                                        <p className="mt-1 font-medium text-slate-900">
                                            {user?.id}
                                        </p>
                                    </div>
                                    <div className="rounded-lg border border-slate-200 bg-white p-4">
                                        <p className="text-xs uppercase tracking-wide text-slate-500">
                                            Email
                                        </p>
                                        <p className="mt-1 font-medium text-slate-900">
                                            {user?.email}
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
                                    This section can later include account settings and activity.
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <Button className="sm:w-auto">Edit profile</Button>
                                    <Button variant="outline" className="sm:w-auto">
                                        View billing
                                    </Button>
                                </div>
                            </>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
