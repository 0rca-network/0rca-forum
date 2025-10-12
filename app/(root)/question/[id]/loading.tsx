import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section>
      <div className="flex-start w-full flex-col">
        <div className="flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
          <div className="flex items-center justify-start gap-1">
            <Skeleton className="size-5 rounded-full" />
            <Skeleton className="h-5 w-24" />
          </div>
          <div className="flex justify-end">
            <Skeleton className="h-8 w-16" />
          </div>
        </div>
        <Skeleton className="mt-3.5 h-8 w-full" />
      </div>

      <div className="mb-8 mt-5 flex flex-wrap gap-4">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-6 w-24" />
      </div>

      <Skeleton className="h-48 w-full" />

      <div className="mt-8 flex flex-row items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-6 w-12" />
          ))}
        </div>
        <Skeleton className="h-8 w-16" />
      </div>

      <div className="mt-10">
        <Skeleton className="mb-4 h-8 w-48" />
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="mb-4 h-24 w-full" />
        ))}
      </div>

      <div className="mt-10">
        <Skeleton className="mb-4 h-8 w-full" />
        <Skeleton className="h-[350px] w-full" />
      </div>
    </section>
  );
};

export default Loading;
