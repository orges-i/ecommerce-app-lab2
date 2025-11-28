# Lab Course 2 – Fullstack E-Commerce App

Ky eshte nje aplikacion fullstack i zhvilluar si pjese e lendes Lab Course 2.
Projekti eshte nje platforme e-commerce ku perdoruesit mund te shfletojne produkte, te shtojne artikuj ne shporte, te bejne porosi dhe te kryejne pagesa testuese me Stripe.

Aplikacioni permban pjesen e klientit dhe panelin e administratorit.

---

## Funksionalitetet kryesore

- Regjistrim dhe hyrje me JWT Authentication
- Menaxhim i shportes (shtim, perditesim, ruajtje ne databaze)
- Proces i plote i porosise (checkout)
- Pagesa me Stripe ne Test Mode
- Faqe verifikimi per pagesen
- Shfaqja e porosive te perdoruesit
- Panel administratori per menaxhimin e produkteve dhe porosive
- Nderrim i statusit te porosise nga admin
- Deploy i frontend, backend dhe admin panel ne Vercel

---

## Teknologjite e perdorura

Frontend:

- React - ndertimi i komponenteve dhe UI te klientit dhe admin panelit
- React Router DOM - navigimi midis faqeve si SPA pa reload
- Axios - thirrjet HTTP nga frontend tek backend
- React Toastify - njoftimet/notifications e suksesit dhe errors ne UI
- Tailwind CSS - stilimi i faqes dhe responsive layout
- Framer Motion - animacionet e komponenteve

Backend:

- Node.js - runtime i serverit
- Express - rruget dhe API-t e backend-it
- MongoDB me Mongoose - Database per porosite, users, products
- JWT - autentikim dhe menaxhim i tokenit
- Stripe Checkout API (Test Mode) - pagesat testuese dhe verifikimi i porosive

Testim API:

- Postman & Thunderclient Extension - Testimi i API

Deploy:

- Vercel (Frontend, Backend, Admin Panel)

---

## Instalimi dhe nisja e projektit

### Backend

1. Hyr ne folderin "backend"
2. Instalo dependencies:
   npm install
3. Krijo file .env me keto variabla:
   MONGO_URI=
   JWT_SECRET=
   STRIPE_SECRET_KEY=
4. Nise serverin:
   npm run dev

### Frontend (Client)

1. cd frontend
2. npm install
3. npm run dev

### Admin Panel

1. cd admin
2. npm install
3. npm run dev

---

## Pagesat me Stripe

Projekti perdor Stripe Checkout ne Test Mode.
Kartat testuese te Stripe mund te gjenden ketu:
https://docs.stripe.com/testing

---

## Deployed ne Vercel

Projekti deployed ne Vercel

Secili modul (frontend, backend, admin) i projektit eshte deployed ne nje aplikacion te ndare ne Vercel

https://ecommerce-lab2-frontend.vercel.app/

---

## Qellimi i projektit

Qellimi i projektit ishte te aplikoja ne praktike njohurite e fituara gjate semestrave te meparshem ne nje aplikacion real. Projekti perfshin analizimin e kerkesave, dizajnimin modular te sistemeve dhe implementimin e plote te nje platforme e-commerce me funksionalitete moderne si autentikimi, menaxhimi i shportes, filtrat, kerkimi, sortimi, pagesat me Stripe dhe gjurmimi i porosive.

Gjate zhvillimit perdora Git per versionim, Trello per menaxhim detyrash dhe e strukturova aplikacionin me module te ndara (frontend, backend dhe admin panel). Projekti eshte bere deploy ne Vercel dhe shfrytezon MongoDB si databaze si dhe Stripe Checkout ne Test Mode si sistem pagesash.

Qellimi final ishte dorëzimi i nje aplikacioni funksional, te dokumentuar dhe me arkitekture te qarte, sipas specifikave te lendes Lab 2.

---
