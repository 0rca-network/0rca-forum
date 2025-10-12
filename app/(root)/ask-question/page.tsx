import Question from "@/components/forms/Question";
import { createUser, getUserById } from "@/lib/actions/user.action";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Ask a Question — Forum",
};

const Page = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  let mongoUser = await getUserById({ userId });

  if (!mongoUser) {
    const user = await currentUser();
    
    if (!user) redirect("/sign-in");
    
    mongoUser = await createUser({
      clerkId: user.id,
      name: `${user.firstName || ""}${user.lastName ? ` ${user.lastName}` : ""}` || "User",
      username: user.username || user.emailAddresses[0].emailAddress.split("@")[0],
      email: user.emailAddresses[0].emailAddress,
      picture: user.imageUrl,
    });
  }

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>

      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default Page;
