/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Orders() {
	const [orders, setOrders] = useState([]);
	const navigate = useNavigate();

	const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const token = localStorage.getItem("token");
				const response = await axios.get(`${API_URL}/order/get`, {
					headers: {
						Authorization: `Bearer ${token}`, // Attach token
					},
				});
				console.log(response.data.orders);
				setOrders(response.data.orders);
			} catch (err) {
				console.log(err);
			}
		};
		fetchOrders();
	}, []);

	return (
		<div className="flex items-center justify-center w-full md:mt-4 md:pt-24 ">
			<div className="bg-red-950/30 backdrop-blur p-8 rounded-lg shadow-lg w-full max-w-md min-h-screen">
				<div className="block w-full overflow-x-auto">
					<h2 className="text-2xl font-extrabold mb-6 text-center text-white uppercase tracking-wider relative">
						Orders
						<span className="block w-24 h-1 bg-orange-500 mx-auto mt-1 rounded-full" />
					</h2>

					<p className="text-red-300 text-center text-lg">
						{orders.length === 0 && "No orders found!"}
					</p>

					<ul className="grid grid-cols-1 gap-6">
						{orders.map((order) => (
							<li
								key={order._id}
								className="bg-black/40 p-5 rounded-lg shadow-lg transition hover:bg-black/80">
								{/* User Info */}
								<div className="mb-4">
									<h3 className="text-2xl font-semibold text-gray-300 py-2 tracking-wide">
										{order?.userId?.name || "Unknown"}
									</h3>
									<p className="text-sm text-gray-300 italic">
										{order?.userId?.email || "Unknown"}
									</p>
								</div>

								{/* Order Details */}
								<div className="space-y-4">
									<p className="text-gray-300">
										<span className="font-semibold text-green-400">
											Amount:
										</span>
										<span className="ml-2">
											$
											{order?.paymentId?.amount ||
												"Unknown"}
										</span>
									</p>

									<p className="text-gray-300 flex items-center">
										<span className="font-semibold text-yellow-400">
											Payment:
										</span>
										<span
											className={`ml-2 px-3 py-1 rounded-md text-sm font-bold ${
												order?.paymentId?.status ===
												"Succeeded"
													? "bg-green-600 text-white"
													: "bg-red-600 text-white"
											}`}>
											{order?.paymentId?.status ||
												"Unknown"}
										</span>
									</p>

									<p className="text-gray-300 flex items-center">
										<span className="font-semibold text-grey-600">
											Cart:
										</span>
										<span
											className={`ml-2 px-3 py-1 rounded-md text-sm font-bold ${
												order?.cartId?.status ===
												"Processed"
													? "bg-green-600 text-white"
													: "bg-red-600 text-white"
											}`}>
											{order?.cartId?.status || "Unknown"}
										</span>
									</p>
								</div>

								{/* View Details Btn*/}
								<button
									type="button"
									className="mt-4 w-full py-2 bg-orange-700 font-bold text-white rounded-lg hover:bg-orange-600 transition duration-500"
									onClick={() =>
										navigate(
											`/dashboard/single-order/${order._id}`
										)
									}>
									View Details
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Orders;
