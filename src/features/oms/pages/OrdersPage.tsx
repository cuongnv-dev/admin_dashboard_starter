import React from "react";
import { Route, useHistory } from "react-router-dom";
import { OmsUIEvent, OmsUIProvider } from "../_hook/omsUIContext";
import { OrdersCard } from "./order-card/OrdersCard";

export function OrdersPage() {
  const history = useHistory();
  const omsUIEvents: OmsUIEvent = {
    newOrderButtonClick: () => {
      history.push("/oms/new");
    },
    openEditOrderPage: (id: string) => {
      history.push(`/oms/${id}/edit`);
    },
    openDeleteOrderDialog: (id: string) => {
      history.push(`/oms/${id}/delete`);
    },
  };

  return (
    <OmsUIProvider omsUIEvents={omsUIEvents}>
      {/* <Route path="/users/:id/delete">
        {({ history, match }) => (
          <UserDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/users");
            }}
          />
        )}
      </Route> */}

      <OrdersCard />
    </OmsUIProvider>
  );
}
