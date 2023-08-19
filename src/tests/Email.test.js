import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom'; // For mocking routes
import EmailDetail from './EmailDetail';

describe('EmailDetail Component', () => {
    it('renders email details', () => {
        const mockState = {
            emailDetails: {
                from_mail: 'test@example.com',
                to_mail: 'recipient@example.com',
                subject: 'Test Subject',
                // Add other email details
            },
            message: 'Email sent successfully',
        };

        render(
            <MemoryRouter initialEntries={['/email-details']} initialIndex={0}>
                <Route path="/email-details">
                    <EmailDetail />
                </Route>
            </MemoryRouter>,
            { initialEntries: ['/email-details'], initialIndex: 0 },
        );

        // Replace these expectations with your actual email details
        expect(screen.getByText(mockState.message)).toBeInTheDocument();
        expect(screen.getByText(mockState.emailDetails.from_mail)).toBeInTheDocument();
        expect(screen.getByText(mockState.emailDetails.to_mail)).toBeInTheDocument();
        expect(screen.getByText(mockState.emailDetails.subject)).toBeInTheDocument();
        // Add more expectations for other email details
    });

    it('navigates back to Home page', () => {
        const navigateMock = jest.fn();
        render(
            <EmailDetail />,
            { wrapper: MemoryRouter },
        );

        // Replace the link text with your actual "Send Another" link text
        render(
            <EmailDetail />,
            { wrapper: MemoryRouter },
        );

        fireEvent.click(screen.getByText('Send Another..'));

        expect(navigateMock).toHaveBeenCalledWith('/');
    });

    // Add more test cases as needed
});
