import { createContext, useContext, type ReactNode } from 'react';

type OrderModalContextValue = {
  openOrderModal: () => void;
  closeOrderModal: () => void;
};

const OrderModalContext = createContext<OrderModalContextValue | null>(null);

export function OrderModalProvider({
  value,
  children,
}: {
  value: OrderModalContextValue;
  children: ReactNode;
}) {
  return <OrderModalContext.Provider value={value}>{children}</OrderModalContext.Provider>;
}

export function useOrderModal() {
  const ctx = useContext(OrderModalContext);
  if (!ctx) throw new Error('useOrderModal must be used within OrderModalProvider');
  return ctx;
}
