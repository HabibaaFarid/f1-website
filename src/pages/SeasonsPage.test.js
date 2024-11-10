import { render, screen } from "@testing-library/react";
import SeasonsPage from "./SeasonsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { jest } from '@jest/globals';

global.matchMedia = global.matchMedia || function () {
    return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };
};

jest.mock('../modules/seasons/hooks/useSeasons', () => ({
    __esModule: true,
    default: () => ({
        data: { SeasonTable: { Season: [] }, total: 0 },
        isLoading: false,
    }),
}));

describe('test viewing title after fetching data', () => {
    const queryClient = new QueryClient();

    test('rendered title', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <SeasonsPage />
            </QueryClientProvider>
        );

        const title = await screen.findByTestId('title');
        expect(title).toBeTruthy();
    });
});
