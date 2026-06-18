"use client";

import type { ReactNode } from "react";
import { useContactModal } from "@/components/ContactModal";

/** Botão que abre o popup "Começar um projeto". Estilo via className do consumidor. */
export function StartProjectButton({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: ReactNode;
  /** callback extra (ex.: fechar o menu mobile) antes de abrir o popup */
  onClick?: () => void;
}) {
  const { open } = useContactModal();
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        open();
      }}
      className={className}
    >
      {children}
    </button>
  );
}
