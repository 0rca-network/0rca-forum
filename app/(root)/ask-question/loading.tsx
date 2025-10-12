import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section>
      <div className="flex w-full flex-col gap-10">
        <div className="flex w-full flex-col">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="mt-3.5 h-12 w-full" />
          <Skeleton className="mt-2.5 h-4 w-64" />
        </div>

        <div className="flex w-full flex-col gap-3">
          <Skeleton className="h-6 w-64" />
          <Skeleton className="mt-3.5 h-[350px] w-full" />
          <Skeleton className="mt-2.5 h-4 w-64" />
        </div>

        <div className="flex w-full flex-col">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="mt-3.5 h-12 w-full" />
          <Skeleton className="mt-2.5 h-4 w-64" />

          <div className="flex-start mt-2.5 gap-2.5">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-20 rounded-md" />
            ))}
          </div>
        </div>

        <Skeleton className="primary-gradient h-10 w-40" />
      </div>
    </section>
  );
};

export default Loading;
