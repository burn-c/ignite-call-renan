import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'

import { buildNextAuthOptions } from '../auth/[...nextauth].api'

const timeIntervalsBodySchema = z.object({
  intervals: z.array(
    z.object({
      weekDay: z.number(),
      startTimeInMinutes: z.number(),
      endTimeInMinutes: z.number(),
    }),
  ),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    return res.status(401).end()
  }

  // TODO: Validate data values
  const { intervals } = timeIntervalsBodySchema.parse(req.body)

  await Promise.all(
    intervals.map((intervals) => {
      return prisma.userTimeInterval.create({
        data: {
          week_day: intervals.weekDay,
          time_start_in_minutes: intervals.startTimeInMinutes,
          time_end_in_minutes: intervals.endTimeInMinutes,
          user_id: session.user.id,
        },
      })
    }),
  )

  // Info: SQLite dont support createMany queries
  // await prisma.userTimeInterval.createMany()

  return res.status(201).end()
}
