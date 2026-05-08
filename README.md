# Stock Calendar Web

Web simple para ver fechas estrategicas de inversion en acciones.

## Abrir rapido

1. Abre `index.html` directamente en el navegador.
2. O levanta un server local:

```powershell
cd C:\Users\misat\Desktop\stock-calendar-web
python -m http.server 8080
```

Luego entra a `http://127.0.0.1:8080`.

## Editar eventos

Los eventos estan en `script.js` en el array `events`.

Campos:

- `date` en formato `YYYY-MM-DD`
- `type`: `earnings`, `macro`, `watch`
- `impact`: `high`, `medium`, `low`
- `title`, `meta`, `note`, `source`

## Nota

Este calendario ayuda a planificar entradas/salidas con contexto.
No garantiza rentabilidad ni reemplaza gestion de riesgo.
Incluye eventos confirmados y eventos estimados para planeacion tactica.
