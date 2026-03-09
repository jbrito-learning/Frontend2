import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
    const mockUser = {
        name: "Joana Silva",
        email: "joana.silva@example.com",
        role: "Frontend Developer",
        plan: "Pro",
        joinedAt: "January 2026",
    };

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
                                Current signed-in user (mocked)
                            </p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-lg font-semibold text-emerald-700">
                            {mockUser.name
                                .split(" ")
                                .map((part) => part[0])
                                .join("")
                                .slice(0, 2)}
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-lg border border-slate-200 bg-white p-4">
                                <p className="text-xs uppercase tracking-wide text-slate-500">
                                    Name
                                </p>
                                <p className="mt-1 font-medium text-slate-900">
                                    {mockUser.name}
                                </p>
                            </div>
                            <div className="rounded-lg border border-slate-200 bg-white p-4">
                                <p className="text-xs uppercase tracking-wide text-slate-500">
                                    Email
                                </p>
                                <p className="mt-1 font-medium text-slate-900">
                                    {mockUser.email}
                                </p>
                            </div>
                            <div className="rounded-lg border border-slate-200 bg-white p-4">
                                <p className="text-xs uppercase tracking-wide text-slate-500">
                                    Role
                                </p>
                                <p className="mt-1 font-medium text-slate-900">
                                    {mockUser.role}
                                </p>
                            </div>
                            <div className="rounded-lg border border-slate-200 bg-white p-4">
                                <p className="text-xs uppercase tracking-wide text-slate-500">
                                    Plan
                                </p>
                                <p className="mt-1 font-medium text-slate-900">
                                    {mockUser.plan}
                                </p>
                            </div>
                        </div>

                        <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
                            Joined on <span className="font-medium">{mockUser.joinedAt}</span>.
                            This section can later include account settings and activity.
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button className="sm:w-auto">Edit profile</Button>
                            <Button variant="outline" className="sm:w-auto">
                                View billing
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
