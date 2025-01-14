import { POST_QUERYResult } from '@/sanity/types'
import dayjs from 'dayjs'

type PublishedAtProps = {
  publishedAt: NonNullable<POST_QUERYResult>['publishedAt']
}

export function PublishedAt({ publishedAt }: PublishedAtProps) {
  return publishedAt ? (
    <div className="mb-2 text-xs text-muted-foreground">
      {dayjs(publishedAt).format('D MMM YYYY')}
    </div>
  ) : null
}