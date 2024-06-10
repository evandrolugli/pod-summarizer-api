import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.prompt.deleteMany()

  await prisma.prompt.create({
    data: {
      title: 'Summary',
      template: `Your task: Write a clear and engaging summary in 50 words or fewer!

Transcription:
'''
{transcription}
'''`.trim()
    }
  })

  await prisma.prompt.create({
    data: {
      title: 'Thoughts',
      template: `Your task: Capture the funniest bits or curious facts in a short, punchy summary!

Transcription:
'''
{transcription}
'''`.trim()
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })