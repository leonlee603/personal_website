import { POST_QUERYResult } from '@/sanity/types'
import dayjs from 'dayjs'

type PublishedAtProps = {
  publishedAt: NonNullable<POST_QUERYResult>['publishedAt'],
  className?: string,
}

export function PublishedAt({ publishedAt, className }: PublishedAtProps) {
  return publishedAt ? (
    <div className={`text-xs text-muted-foreground ${className}`}>
      {dayjs(publishedAt).format('D MMM YYYY')}
    </div>
  ) : null
}