import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, HandHeart, ExternalLink } from 'lucide-react';

const RELEASE_BASE_URL = 'https://github.com/Alansherhan/RelieFlow/releases/latest/download';
const PUBLIC_APK_URL = `${RELEASE_BASE_URL}/public-app-release.apk`;
const VOLUNTEER_APK_URL = `${RELEASE_BASE_URL}/volunteer-app-release.apk`;

export function AppDownload() {
    return (
        <section id="volunteer-app" className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
            <div className="container max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Public App */}
                    <div className="bg-card rounded-3xl p-8 border">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center">
                                <MapPin className="h-6 w-6 text-coral" />
                            </div>
                            <div>
                                <h3 className="font-semibold">RelieFlow Public</h3>
                                <p className="text-sm text-muted-foreground">For those in need</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            Request aid during emergencies, find relief centers near you, and track your assistance deliveries in real-time.
                        </p>
                        <Button className="rounded-full w-full" variant="outline" asChild>
                            <Link href={PUBLIC_APK_URL} className="gap-2" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                                Download Public APK
                            </Link>
                        </Button>
                    </div>

                    {/* Volunteer App */}
                    <div className="bg-card rounded-3xl p-8 border">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-mint/20 flex items-center justify-center">
                                <HandHeart className="h-6 w-6 text-mint" />
                            </div>
                            <div>
                                <h3 className="font-semibold">RelieFlow Volunteer</h3>
                                <p className="text-sm text-muted-foreground">For helpers & heroes</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            Join our volunteer network, accept delivery tasks, help distribute relief supplies, and make a real difference.
                        </p>
                        <Button className="rounded-full w-full" variant="outline" asChild>
                            <Link href={VOLUNTEER_APK_URL} className="gap-2" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                                Download Volunteer APK
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
