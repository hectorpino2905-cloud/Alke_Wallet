# Alke Wallet

**Alke Wallet** es una billetera digital moderna y segura que te permite gestionar tus finanzas de manera intuitiva. Con una interfaz limpia y fácil de usar, puedes realizar depósitos, transferir dinero a tus contactos y mantener un control completo de tus movimientos financieros a través de un historial detallado de transacciones.

Diseñada con las mejores prácticas de desarrollo web, Alke Wallet ofrece una experiencia de usuario fluida y responsive, adaptándose perfectamente a cualquier dispositivo.

---

## 🚀 Inicio Rápido

---

## Inicio Rápido


### Instalación

1. Clona o descarga el repositorio
2. Abre `login.html` en tu navegador
3. ¡Listo para usar!

> **Nota:** La aplicación utiliza `localStorage` del navegador para almacenar datos. Los datos persisten mientras no se limpie el caché del navegador.

---

## Inicio de Sesión

Para acceder a la aplicación, utiliza las siguientes credenciales:

- **Correo:** `admin@alke.com`
- **Contraseña:** `1234`

Al iniciar sesión por primera vez, tu billetera se inicializará con un saldo de **$5,000**.

---

## Funcionalidades

### 1. **Menú Principal** (`menu.html`)

El menú principal es tu centro de control. Desde aquí puedes:

- **Ver tu saldo disponible** en tiempo real
- **Navegar** a las diferentes secciones de la aplicación
- **Cerrar sesión** cuando termines

#### Opciones disponibles:
- **Depositar** - Agrega dinero a tu billetera
- **Enviar dinero** - Transfiere fondos a tus contactos
- **Movimientos** - Consulta tu historial de transacciones

---

### 2. **Depositar Dinero** (`deposit.html`)

Agrega fondos a tu billetera de forma sencilla.

#### Pasos:
1. Desde el menú principal, haz clic en **"Ir a depósito"**
2. Ingresa el monto que deseas depositar (debe ser mayor a 0)
3. Haz clic en **"Depositar"**
4. Verás una confirmación verde de éxito
5. Tu saldo se actualizará automáticamente

#### Características:
- Validación de montos positivos
- Actualización instantánea del saldo
- Confirmación visual del depósito
- Registro automático en el historial

---

### 3. **Enviar Dinero** (`sendmoney.html`)

Transfiere dinero a tus contactos registrados.

#### Pasos:
1. Desde el menú principal, haz clic en **"Ir a transferir"**
2. Escribe el nombre del destinatario en el campo **"Destinatario"**
   - El sistema tiene autocompletado con tus contactos
3. Ingresa el monto a transferir
4. Verifica que tengas saldo suficiente (se muestra en la parte inferior)
5. Haz clic en **"Confirmar Envío"**

#### Contactos disponibles:
- Ana María
- Betzabeth Gonzalez
- Carlos Perez
- David Loza
- Elena Nito
- Federico Diaz
- Goku Son

#### Validaciones:
- El destinatario debe existir en tu lista de contactos
- El monto debe ser mayor a 0
- Debes tener saldo suficiente para la transferencia
- El saldo se actualiza automáticamente después del envío

---

### 4. **Historial de Transacciones** (`transactions.html`)

Consulta todos tus movimientos financieros en un solo lugar.

#### Características:
- **Fecha** de cada transacción
- **Descripción** del movimiento
- **Tipo** de transacción (Depósito o Envío)
- **Monto** con indicador visual:
  - 🟢 Verde (`+`) para depósitos
  - 🔴 Rojo  (`-`) para envíos

#### Información mostrada:
- Las transacciones más recientes aparecen primero
- Formato de moneda chileno (CLP)
- Tabla responsive que se adapta a diferentes tamaños de pantalla

---

## Características Técnicas

### Tecnologías Utilizadas

- **HTML5** - Estructura de las páginas
- **CSS3** - Estilos y diseño responsive
- **JavaScript (jQuery)** - Lógica de la aplicación
- **Bootstrap 4.6.2** - Framework CSS para diseño responsive
- **localStorage** - Almacenamiento local de datos

### Almacenamiento de Datos

La aplicación utiliza `localStorage` del navegador para guardar:

- **Información de sesión** (`alke_user`): Datos del usuario logueado
- **Datos de la billetera** (`alke_wallet`): Saldo y transacciones

> ⚠️ **Importante:** Los datos se almacenan localmente en tu navegador. Si limpias el caché o cambias de navegador, perderás tus datos.

---

## 📁 Estructura del Proyecto
```text
Alke_Wallet/
│
├── assets/            # Imágenes y recursos
├── css/               # Hojas de estilo
├── js/                # Archivos JavaScript
│ ├── app.js           # Lógica principal de la aplicación
│ └── auth.js          # Lógica de autenticación
├── docs/              # Documentación adicional
│     
├── login.html         # Página de inicio de sesión
├── menu.html          # Menú principal
├── deposit.html       # Página de depósitos
├── sendmoney.html     # Página de envío de dinero
├── transactions.html  # Página de historial
└── README.md
```


---

## Seguridad

> ⚠️ **Nota de Seguridad:** Esta es una aplicación de demostración. Las credenciales están hardcodeadas y los datos se almacenan localmente. **NO utilices esta aplicación para manejar dinero real.**

### Limitaciones de seguridad:
- Credenciales fijas en el código
- Sin encriptación de datos
- Almacenamiento local (no persistente entre dispositivos)
- Sin validación del lado del servidor

---

**¡Disfruta usando Alke Wallet! 💰**