import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // const pullup = await prisma.workout.create({
  //   data: {
  //     workout_name: 'Scapullar Pull',
  //     workout_type: 'Pull Up',
  //     how_to_perform: 'Begin in a normal pull-up position with a palms-away grip and hands shoulder-width apart | From a passive hang (shrugged shoulders), draw your scapula down and together, thus pulling your shouldeers down and raising your body slightly. Try to "bend the bar" and think about doing a reverse shrug | Pause at the "top", squeeze your shoulders, hold it for 3-5s | Release into a dead hang under control',
  //     form: 'Elbows should stay straight | Focus on pinching scapulae together and notice your head shift backward and your chest raise upward | Aim to operate only in the vertical plane. Dont intentionally point your ribcage up or arch your back. Your back will naturally arch more as you get stronger | If you cant pull out of the passive hang at all, consider using bands on your feet to assist until you gain the necessary strength',
  //     example_url: 'https://youtu.be/FgYoc4O-cio',
  //   },
  // });

  const squat = await prisma.workout.create({
    data: {
      workout_name: 'Assisted Squat',
      workout_type: 'Squat',
      how_to_perform: 'Stand up straight with legs shoulder widht apart | Grab something in front of you and use your hands to assist in the squat. Reduce assistance over time | Initiate the movement by sendint the hips back as if youre sitting back into an invisible chair | Go as low as you can while maintaining perfect form | Press through heels to stand back up to starting position',
      form: 'Stand up straight at the top | Go as low as you can, preferably until the hips are below the knees | Dig your big toe and heel into the ground | Make sure you keep your heels down and keep them planted throughout the move | Keep your knee-in-line with your toes | Dont let the knees come inward on either the descend or the ascend; think about pushing the knees out | Keep lower back neutral. Not hollow, not arched',
      example_url: 'https://youtu.be/OuR_Fp7AB0c',
    },
  });

  console.log(squat);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

export default prisma;
