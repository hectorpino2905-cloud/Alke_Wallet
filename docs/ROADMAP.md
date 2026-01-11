# ROADMAP: Alke Wallet Project

Este documento sirve como guía maestra para el desarrollo del proyecto Alke Wallet. Define la arquitectura, el flujo de trabajo y la división de tareas para el equipo de desarrollo.

## 1. Stack Tecnológico
Requerimientos técnicos obligatorios:
* **HTML5:** Estructura semántica.
* **CSS3:** Estilos personalizados.
* **Bootstrap 5:** Framework para diseño responsive y componentes.
* **JavaScript (ES6):** Lógica de negocio.
* **JQuery:** Manipulación del DOM y eventos.

## 2. Arquitectura del Proyecto

### Estructura de Carpetas
```text
alke-wallet/
│
├── assets/                 # Imágenes e iconos
├── css/
│   └── styles.css          # Estilos propios (overrides de Bootstrap)
├── js/
│   ├── auth.js             # Lógica de Login y Sesión
│   └── app.js              # Lógica de Billetera (Saldo, Transacciones)
│
├── index.html              # Landing / Redirección
├── login.html              # Inicio de sesión [cite: 65]
├── menu.html               # Dashboard principal [cite: 66]
├── deposit.html            # Pantalla de depósitos [cite: 78]
├── sendmoney.html          # Pantalla de transferencias [cite: 79]
├── transactions.html       # Historial de movimientos [cite: 80]
└── ROADMAP.md              # Este archivo
```
### Contrato de Datos (LocalStorage)
"Keys" exactas en el `localStorage` del navegador.

1. **Datos de Usuario** (`alke_user`):
```JSON
{
  "name": "User Name",
  "email": "user@alke.com",
  "pass": "123456"
}
```

2. **Datos Financieros** `(alke_wallet`):
```JSON
{
  "balance": 15000,
  "transactions": [
    {
      "type": "deposit",  // o "payment"
      "amount": 5000,
      "date": "10/01/2026",
      "description": "Depósito inicial"
    }
  ]
}
```

## 3. Flujo de Trabajo (Git Flow)
1. Rama Main: Código estable y aprobado.
2. Ramas Feature: `feature/nombre-tarea` (ej: `feature/login-logic`).
3. Pull Requests:
    - No se hace merge directo a main.
    - Se requiere revisión del compañero.
    -   Checklist de aprobación:
        - [ ] Funcionalidad cumple el ticket.
        - [ ] Responsive (Mobile/Desktop).
        - [ ] Código limpio y comentado.


## 4. Planificación de Tareas (Sprints)
**TICKET 1: Arquitectura & Auth**

- [ ] **Setup**: Crear estructura de carpetas y conectar Bootstrap/JQuery.
- [ ] **UI**: Maquetar ``login.html`` (Formulario centrado, validación visual).
- [ ] **JS**: Implementar lógica de inicio de sesión en ``auth.js``.
- [ ] **JS**: Guardar sesión en ``localStorage``.
- [ ] **Seguridad**: Script que redirige al login si se intenta entrar a ``menu.html`` sin sesión.

**TICKET 2: Billetera Core**

- [ ] **UI**: Maquetar `menu.html` (Navbar, Tarjetas de resumen).
- [ ] **UI**: Maquetar `deposit.html` (Formulario de ingreso).
- [ ] **JS**: Leer `balance` de `localStorage` y mostrarlo en el menú.
- [ ] **JS**: Lógica de depósito: Sumar monto al saldo y actualizar `localStorage`.
- [ ] **UX**: Feedback visual (Alerta de "Depósito Exitoso").

**TICKET 3: Transferencias**

- [ ] **UI**: Maquetar `sendmoney.html`.
- [ ] **JQuery**: Implementar autocompletado en búsqueda de contactos.
- [ ] **JS**: Validar que `monto <= saldo`.
- [ ] **JS**: Lógica de envío: Restar saldo y agregar objeto al array de transacciones en `localStorage`.

**TICKET 4: Historial & Visualización**

- [ ] **UI**: Maquetar `transactions.html` (Tabla responsive).
- [ ] **JS**: Leer array de transacciones desde `localStorage`.
- [ ] **JS/JQuery**: Renderizar dinámicamente las filas de la tabla (`.append()`).
- [ ] **UI**: Estilos condicionales (Verde para depósitos, Rojo para envíos).