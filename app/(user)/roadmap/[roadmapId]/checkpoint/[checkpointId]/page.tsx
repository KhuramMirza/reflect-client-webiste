import React from "react";
import { fetchCheckpointDetails } from "@/features/roadmap/api";
import TopicLearningModule from "@/features/roadmap/components/TopicLearningModule";
// 1. IMPORT THIS
import {
  fetchRecentlyTopicGeneratedQuizzes,
  getQuizAttempt,
} from "@/features/dashboard/api";

export default async function CheckpointDetailsPage({
  params,
}: Readonly<{
  params: { roadmapId: string; checkpointId: string };
}>) {
  const { roadmapId, checkpointId } = await params;
  const checkpoint = await fetchCheckpointDetails(checkpointId);

  if (!checkpoint) return <div>Checkpoint not found</div>;

  const { title, description, topics } = checkpoint;

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-20">
      {/* ... Header Code (Same as before) ... */}

      <div className="mx-auto max-w-4xl space-y-8 px-4">
        <div className="flex items-center gap-2 pl-2 text-sm font-bold tracking-wider text-gray-400 uppercase">
          Module Topics
        </div>

        {await Promise.all(
          topics.map(async (topic) => {
            let existingQuiz = null;
            let existingAttempt = null; // 2. Variable for attempt

            try {
              // A. Fetch the Quiz
              const res = await fetchRecentlyTopicGeneratedQuizzes(topic._id);

              if (
                res &&
                res.data &&
                Array.isArray(res.data) &&
                res.data.length > 0
              ) {
                const lastQuiz = res.data[res.data.length - 1];

                existingQuiz = {
                  id: lastQuiz._id,
                  quizTopic: lastQuiz.quizTopic || lastQuiz.topic,
                  difficulty: lastQuiz.difficulty,
                  questionsCount: lastQuiz.questionsCount,
                };

                // B. If quiz exists, Fetch the Attempt specifically for this quiz
                try {
                  const attemptRes = await getQuizAttempt(lastQuiz._id);
                  // Depending on your API structure, it might be attemptRes.data.attempt or just attemptRes.attempt
                  existingAttempt = attemptRes?.data?.attempt || null;
                } catch (err) {
                  console.log("No attempt found for this quiz yet");
                }
              }
            } catch (err) {
              console.error(`Failed to fetch quiz for topic ${topic._id}`, err);
            }

            return (
              <TopicLearningModule
                key={topic._id}
                topic={topic}
                initialQuiz={existingQuiz}
                initialAttempt={existingAttempt} // 3. Pass the attempt
              />
            );
          }),
        )}

        {/* ... Footer Code ... */}
      </div>
    </div>
  );
}
