import React, { FC, useRef } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { IOrderData } from "../../types.d";
import useGetTableById from "../../hooks/table/useGetTableById";
import PageLoader from "../shared/PageLoader";

type InvoiceProps = {
  orderInfo: IOrderData;
  setShowInvoice: React.Dispatch<React.SetStateAction<boolean>>;
};

const Invoice: FC<InvoiceProps> = ({ orderInfo, setShowInvoice }) => {
  const { tableData, isLoading } = useGetTableById({}, orderInfo.table);

  const invoiceRef = useRef<HTMLDivElement>(null);
  const handlePrint = () => {
    if (!invoiceRef.current) return;

    const printContent = invoiceRef.current.innerHTML;
    const printWindow = window.open("", "", "width=900,height=650");

    if (!printWindow) return;

    // Creamos manualmente el contenido del documento
    const doc = printWindow.document;

    // Crear HTML básico
    const html = doc.createElement("html");
    const head = doc.createElement("head");
    const body = doc.createElement("body");

    const title = doc.createElement("title");
    title.textContent = "Comprobante de compra";

    const style = doc.createElement("style");
    style.textContent = `
    body { font-family: Arial, sans-serif; padding: 20px; }
    .receipt-container { width: 300px; border: 1px solid #ddd; padding: 10px; }
    h2 { text-align: center; }
  `;

    head.appendChild(title);
    head.appendChild(style);
    html.appendChild(head);

    const container = doc.createElement("div");
    container.innerHTML = printContent;

    body.appendChild(container);
    html.appendChild(body);

    // Reemplazar todo el documento
    doc.replaceChild(html, doc.documentElement);

    // Esperar a que el DOM del nuevo documento se renderice antes de imprimir
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }, 500);
  };

  if (isLoading) return <PageLoader />;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg w-[400px]">
        {/* Receipt Content for Printing */}

        <div ref={invoiceRef} className="p-4">
          {/* Receipt Header */}
          <div className="flex justify-center mb-4">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
              className="w-12 h-12 border-8 border-green-500 rounded-full flex items-center justify-center shadow-lg bg-green-500"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="text-2xl"
              >
                <FaCheck className="text-white" />
              </motion.span>
            </motion.div>
          </div>

          <h2 className="text-xl font-bold text-center mb-2">Order Receipt</h2>
          <p className="text-gray-600 text-center">Thank you for your order!</p>

          {/* Order Details */}

          <div className="mt-4 border-t pt-4 text-sm text-gray-700">
            <p>
              <strong>Order ID:</strong>
              {tableData?.currentOrder}
            </p>
            <p>
              <strong>Name:</strong> {orderInfo.customer.name}
            </p>
            <p>
              <strong>Phone:</strong> {orderInfo.customer.phone}
            </p>
            <p>
              <strong>Guests:</strong> {orderInfo.customer.guests}
            </p>
          </div>

          {/* Items Summary */}

          <div className="mt-4 border-t pt-4">
            <h3 className="text-sm font-semibold">Items Ordered</h3>
            <ul className="text-sm text-gray-700">
              {orderInfo.items.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-xs"
                >
                  <span>
                    {item.itemName} x{item.quantity}
                  </span>
                  <span>₹{item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bills Summary */}

          <div className="mt-4 border-t pt-4 text-sm">
            <p>
              <strong>Subtotal:</strong> ₹{orderInfo.bill.total}
            </p>
            <p>
              <strong>Tax:</strong> ₹{orderInfo.bill.tax}
            </p>
            <p className="text-md font-semibold">
              <strong>Grand Total:</strong> ₹{orderInfo.bill.totalWithTax}
            </p>
          </div>

          {/* Payment Details */}

          <div className="mb-2 mt-2 text-xs">
            {orderInfo.paymentMethod === "Cash" ? (
              <p>
                <strong>Payment Method:</strong> {orderInfo.paymentMethod}
              </p>
            ) : (
              <>
                <p>
                  <strong>Payment Method:</strong> {orderInfo.paymentMethod}
                </p>
                /*TODO: needs to update this with card payment details */
              </>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrint}
            className="text-blue-500 hover:underline text-xs px-4 py-2 rounded-lg"
          >
            Imprimir comprobante
          </button>
          <button
            onClick={() => setShowInvoice(false)}
            className="text-red-500 hover:underline text-xs px-4 py-2 rounded-lg"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
