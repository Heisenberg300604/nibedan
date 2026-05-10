import { NextResponse } from 'next/server';

const LEETCODE_GRAPHQL = 'https://leetcode.com/graphql';

const USER_STATS_QUERY = `
query getUserProfile($username: String!) {
  allQuestionsCount {
    difficulty
    count
  }
  matchedUser(username: $username) {
    username
    submissionCalendar
    submitStats: submitStatsGlobal {
      acSubmissionNum {
        difficulty
        count
        submissions
      }
    }
    profile {
      ranking
      reputation
    }
    activeBadge {
      id
      displayName
    }
  }
  userContestRanking(username: $username) {
    attendedContestsCount
    rating
    globalRanking
    topPercentage
  }
}
`;

export async function GET() {
  try {
    const username = 'Nibedan';

    const response = await fetch(LEETCODE_GRAPHQL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Referer: 'https://leetcode.com',
      },
      body: JSON.stringify({
        query: USER_STATS_QUERY,
        variables: { username },
      }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`LeetCode API responded with ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(data.errors[0]?.message ?? 'GraphQL error');
    }

    const matchedUser = data?.data?.matchedUser;
    const contestRanking = data?.data?.userContestRanking;
    const allQuestionsCount = data?.data?.allQuestionsCount;

    if (!matchedUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const acSubmissions = matchedUser.submitStats?.acSubmissionNum ?? [];
    const totalSolved =
      acSubmissions.find((s: { difficulty: string }) => s.difficulty === 'All')
        ?.count ?? 0;
    const easySolved =
      acSubmissions.find((s: { difficulty: string }) => s.difficulty === 'Easy')
        ?.count ?? 0;
    const mediumSolved =
      acSubmissions.find(
        (s: { difficulty: string }) => s.difficulty === 'Medium',
      )?.count ?? 0;
    const hardSolved =
      acSubmissions.find((s: { difficulty: string }) => s.difficulty === 'Hard')
        ?.count ?? 0;
    const totalEasy =
      allQuestionsCount?.find(
        (q: { difficulty: string }) => q.difficulty === 'Easy',
      )?.count ?? 0;
    const totalMedium =
      allQuestionsCount?.find(
        (q: { difficulty: string }) => q.difficulty === 'Medium',
      )?.count ?? 0;
    const totalHard =
      allQuestionsCount?.find(
        (q: { difficulty: string }) => q.difficulty === 'Hard',
      )?.count ?? 0;

    // Parse submission calendar (unix timestamp -> count map)
    let submissionCalendar: Record<string, number> = {};
    try {
      submissionCalendar = JSON.parse(matchedUser.submissionCalendar ?? '{}');
    } catch {
      submissionCalendar = {};
    }

    return NextResponse.json({
      username,
      profile: {
        ranking: matchedUser.profile?.ranking ?? null,
      },
      stats: {
        totalSolved,
        easySolved,
        mediumSolved,
        hardSolved,
        totalEasy,
        totalMedium,
        totalHard,
      },
      contest: {
        rating: Math.round(contestRanking?.rating ?? 0),
        globalRanking: contestRanking?.globalRanking ?? null,
        attendedContests: contestRanking?.attendedContestsCount ?? 0,
        topPercentage: contestRanking?.topPercentage ?? null,
      },
      submissionCalendar,
    });
  } catch (error) {
    console.error('LeetCode API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch LeetCode stats' },
      { status: 500 },
    );
  }
}
