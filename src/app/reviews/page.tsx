import { IconButton } from "@/components/form/buttons";
import FormContainer from "@/components/form/form-container";
import SectionTitle from "@/components/global/section-title";
import ReviewCard from "@/components/reviews/review-card";
import { deleteReviewAction, fetchProductReviewByUser } from "@/utils/actions";

export default async function ReviewsPage() {
  const reviews = await fetchProductReviewByUser();
  if (reviews.length === 0) {
    return <SectionTitle text="Você ainda não fez review de nenhum produto." />;
  }

  return (
    <>
      <SectionTitle text="Minhas Reviews" />
      <section className="grid md:grid-cols-2 gap-8 mt-4">
        {reviews.map((review) => {
          const { id, comment, rating } = review;
          const { image, name } = review.product;
          const reviewInfo = { comment, rating, name, image };

          return (
            <ReviewCard key={id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
}

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });

  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
};
