import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { LocationPicker } from "@/components/LocationPicker";
import * as api from "@/api/locations";

vi.mock("@/api/locations");

test("fetches matching locations and calls onWeatherLoad when one is selected", async () => {
    const mockOnWeatherLoad = vi.fn();

    const vilnius = {
        id: "1",
        cityName: "Vilnius",
        region: "Lithuania",
        latitude: 54.6872,
        longitude: 25.2797,
    };

    vi.mocked(api.fetchLocations).mockImplementation(async (query: string) => {
        if (query === "Vil") return [vilnius];
        return [];
    });

    render(
        <LocationPicker
            onWeatherLoad={mockOnWeatherLoad}
            setHistory={() => { }}
            isOpen={true}
            setIsOpen={() => { }}
        />
    );

    const input = screen.getByPlaceholderText("Search city...");

    fireEvent.change(input, { target: { value: "Vil" } });

    await waitFor(() => {
        expect(api.fetchLocations).toHaveBeenCalledWith("Vil");
    });

    await waitFor(() => {
        expect(screen.getByText("Vilnius")).toBeTruthy();
    });

    fireEvent.click(screen.getByText("Vilnius"));

    expect(mockOnWeatherLoad).toHaveBeenCalledWith(vilnius);
});