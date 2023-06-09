-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workout_Session" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "workout_session_date" TIMESTAMP(3) NOT NULL,
    "number_of_reps" TEXT[],
    "number_of_entries" TEXT[],
    "workoutId" INTEGER,

    CONSTRAINT "Workout_Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workout" (
    "id" SERIAL NOT NULL,
    "workout_name" TEXT NOT NULL,
    "workout_type" TEXT NOT NULL,
    "how_to_perform" TEXT NOT NULL,
    "form" TEXT NOT NULL,
    "example_url" TEXT NOT NULL,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Workout_Session" ADD CONSTRAINT "Workout_Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workout_Session" ADD CONSTRAINT "Workout_Session_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE SET NULL ON UPDATE CASCADE;
