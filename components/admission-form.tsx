"use client";

import { FormEvent, useState } from "react";

export function AdmissionForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch("/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("failed");
      setStatus("success");
      setMessage("Arizangiz qabul qilindi. Tez orada siz bilan bog‘lanamiz.");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage(
        "Yuborishda xatolik yuz berdi. Iltimos, telefon orqali bog‘laning.",
      );
    }
  }

  return (
    <form className="real-admission-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Ota-ona ismi
          <input name="parentName" required placeholder="Ism familiya" />
        </label>
        <label>
          Telefon
          <input
            name="phone"
            required
            type="tel"
            placeholder="+998 90 123 45 67"
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          O‘quvchi ismi
          <input name="childName" required placeholder="Farzandingiz ismi" />
        </label>
        <label>
          Sinf
          <select name="grade" required defaultValue="">
            <option value="" disabled>
              Tanlang
            </option>
            {Array.from({ length: 11 }, (_, index) => (
              <option key={index + 1}>{index + 1}-sinf</option>
            ))}
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>
          Ta’lim tili
          <select name="language" required defaultValue="">
            <option value="" disabled>
              Tanlang
            </option>
            <option>O‘zbek tili</option>
            <option>Rus tili</option>
          </select>
        </label>
        <label>
          Filial
          <input
            name="branch"
            required
            defaultValue="Farg‘ona viloyati, Furqat tumani"
          />
        </label>
      </div>
      <label>
        Xabar
        <textarea
          name="message"
          rows={4}
          placeholder="Qo‘shimcha savolingiz bo‘lsa yozing"
        />
      </label>
      <button
        className="button button-gold"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Yuborilmoqda…" : "Arizani yuborish"}
      </button>
      {message && (
        <p
          className={status === "success" ? "form-success" : "form-error"}
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}
