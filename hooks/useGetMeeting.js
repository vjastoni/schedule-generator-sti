import useSWR from "swr";
import { fetcher } from "../prisma/fetcher";

/**
 *
 * @param {string} meetingId
 * @returns {{data: import("@prisma/client").Schedule, error: any, isLoading: boolean, isValidating: boolean, mutate: any}}
 */
export const useGetMeeting = (meetingId) => {
	const { data, error, isLoading, isValidating, mutate } = useSWR(
		`/api/schedule/${meetingId}`,
		fetcher
	);

	return { data, error, isLoading, isValidating, mutate };
};
