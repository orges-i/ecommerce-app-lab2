import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import assets from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  // Merr te gjitha porosite per admin panel
  const fetchAllOrders = async () => {
    if (!token) {
      // nese admini s'ka token, mos bej kerkese
      return null;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {}, //nuk dergojme body
        { headers: { token } } // token i admin
      );

      //nese API kthen sukses, vendos porosite ne state
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  //funksioni qe ekzekutohet kur admini ndrron dropdown-in e statusit
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        {
          orderId, // cila porosi po ndryshohet
          status: event.target.value, // Statusi i ri i zgjedhur nga admini
        },
        { headers: { token } } // token i adminit
      );
      // Nese api kthen sukses ather rifresko listen e porosive
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message); // shfaq gabimin
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3>Faqja e Porosive</h3>
      <div>
        {orders.map((order, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
            key={index}
          >
            <img className="w-12" src={assets.parcel_icon}></img>
            <div>
              <div>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <p className="py-0.5" key={index}>
                        {item.name} x {item.quantity} <span>{item.size}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p className="py-0.5" key={index}>
                        {item.name} x {item.quantity} <span>{item.size}</span> ,
                      </p>
                    );
                  }
                })}
              </div>

              <p className="mt-3 mb-2 font-medium">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div>
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div>
              <p className="text-sm sm:text-[15px]">
                Produktet : {order.items.length}
              </p>
              <p className="mt-3">Metoda : {order.paymentMethod}</p>
              <p>Pagesa : {order.payment ? "U Përfundua" : "Në Pritje"}</p>
              <p>Data : {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className="text-sm sm:text-[15px]">
              {currency}
              {order.amount}
            </p>
            <select
              // Thirret sa here ndrron vlera e statusit
              onChange={(event) => statusHandler(event, order._id)}
              // e ben select-in "controlled", vjen nga databaza
              value={order.status}
              className="p-2 font-semibold"
            >
              <option value="Porosia u Vendos">Porosia u Vendos</option>
              <option value="Duke u Paketuar">Duke u Paketuar</option>
              <option value="Dërguar">Dërguar (Shipped)</option>
              <option value="Në shpërndarje">Në shpërndarje</option>
              <option value="U dorëzua">U dorëzua</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
