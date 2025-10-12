import Pagination from "@/components/shared/Pagination";
import { getUserQuestions } from "@/lib/actions/user.action";
import type { SearchParamsProps } from "@/types";
import { UserId } from "@/types/shared";
import Question from "../cards/Question";

interface Props extends SearchParamsProps, UserId {
  clerkId?: string | null;
}

const QuestionsTab = async ({ searchParams, userId, clerkId }: Props) => {
  const result = await getUserQuestions({
    userId,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <>
      {result.questions.map((question) => (
        <Question
          key={question._id}
          _id={question._id}
          clerkId={clerkId}
          title={question.title}
          tags={question.tags}
          author={question.author}
          upvotes={question.upvotes}
          views={question.views}
          answers={question.answers}
          createdAt={question.createdAt}
        />
      ))}

      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        />
      </div>
    </>
  );
};

export default QuestionsTab;
