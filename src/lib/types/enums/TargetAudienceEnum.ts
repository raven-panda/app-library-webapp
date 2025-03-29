export type TargetAudienceType =
  | 'ACADEMIC'
  | 'ENTERTAINMENT'
  | 'PERSONAL_DEVELOPMENT'
  | 'COMMITTED_AND_SOCIAL'
  | 'FOREIGN_CULTURE'
  | 'VISUALLY_IMPAIRED'
  | 'PEOPLE_WITH_READING_DIFFICULTIES'
  | 'OTHER';

export const TargetAudienceLabel: Record<TargetAudienceType, string> = {
  ACADEMIC: 'bookTargetAudience.academic',
  ENTERTAINMENT: 'bookTargetAudience.entertainment',
  PERSONAL_DEVELOPMENT: 'bookTargetAudience.personalDevelopment',
  COMMITTED_AND_SOCIAL: 'bookTargetAudience.committedAndSocial',
  FOREIGN_CULTURE: 'bookTargetAudience.foreignCulture',
  VISUALLY_IMPAIRED: 'bookTargetAudience.visuallyImpaired',
  PEOPLE_WITH_READING_DIFFICULTIES:
    'bookTargetAudience.peopleWithReadingDifficulties',
  OTHER: 'bookTargetAudience.other',
};
