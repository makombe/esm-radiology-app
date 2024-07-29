import { useMemo } from "react";
import { GroupedOrders } from "../radiology-tabs/common/radiologyProps.resource";

export function useSearchGroupedResults(
  data: Array<GroupedOrders>,
  searchString: string
) {
  const searchResults = useMemo(() => {
    if (searchString && searchString.trim() !== "") {
      const search = searchString.toLowerCase();

      // Normalize the search string to lowercase
      const lowerSearchString = searchString.toLowerCase();
      return data.filter((orderGroup) =>
        orderGroup.orders.some(
          (order) =>
            order.orderNumber.toLowerCase().includes(lowerSearchString) ||
            order.patient.display.toLowerCase().includes(lowerSearchString)
        )
      );
    }

    return data;
  }, [searchString, data]);

  return searchResults;
}
