"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-4">
      <ReviewLoadingCard />
      <ReviewLoadingCard />
    </div>
  );
}

const ReviewLoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-cent">
          <Skeleton className="w-12 h-12 rounded-full" />
          <div className="ml-4">
            <Skeleton className="w-[150px] h-4 mb-2" />
            <Skeleton className="w-[150px] h-4" />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
