import { useState } from "react";
import "./OrderPage.css";

function OrderPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    qty: 1,
  });

  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function validate(v) {
    const e = {};

    if (v.name.trim().length < 2)
      e.name = "Name too short";

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email))
      e.email = "Enter a valid email";

    if (Number(v.qty) < 1)
      e.qty = "Qty must be ≥ 1";

    return e;
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const found = validate(form);

    setErrors(found);

    if (Object.keys(found).length === 0) {
      setDone(true);
    }
  }

  if (done) {
    return (
      <div className="success-box">
        <h2>✅ Order Successful!</h2>

        <p>
          Thank you, <strong>{form.name}</strong>.
        </p>

        <p>Your order has been received.</p>
      </div>
    );
  }

  return (
    <div className="order-container">
      <h2>🍽️ Place Your Order</h2>

      <form className="order-form" onSubmit={handleSubmit}>

        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && (
          <p className="error">{errors.name}</p>
        )}

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <label>Quantity</label>
        <input
          type="number"
          name="qty"
          min="1"
          value={form.qty}
          onChange={handleChange}
        />
        {errors.qty && (
          <p className="error">{errors.qty}</p>
        )}

        <button type="submit">
          Place Order
        </button>

      </form>
    </div>
  );
}

export default OrderPage;