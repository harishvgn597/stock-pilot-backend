# Salary Config API

One config record per franchise. All rates are applied franchise-wide — `ratePerSalesCall` is multiplied by the number of calls each engineer makes, slab percentages apply to the corresponding sales category.

All routes require `Authorization: Bearer <token>`.

---

## Fields

| Field | Type | Description |
|---|---|---|
| `ratePerSalesCall` | Float | Fixed payout (₹) per sales call, multiplied by engineer's call count |
| `rateCustomerSatisfaction` | Float | Fixed payout (₹) per customer satisfaction event |
| `slabAccessory` | Float | Commission rate (%) applied to accessory sales value |
| `slabSpare` | Float | Commission rate (%) applied to spare sales value |
| `slabEssential` | Float | Commission rate (%) applied to essential sales value |

---

## Endpoints

### GET `/salary-config`
Get the franchise salary config.

**Response** `200`
```json
{
  "id": "uuid",
  "ratePerSalesCall": 150,
  "rateCustomerSatisfaction": 200,
  "slabAccessory": 5,
  "slabSpare": 3,
  "slabEssential": 4,
  "createdAt": "2026-05-04T10:00:00.000Z",
  "updatedAt": "2026-05-04T10:00:00.000Z"
}
```

| Error | Reason |
|---|---|
| `404` | No config set yet — call PUT first |

---

### PUT `/salary-config`
Create or replace the franchise salary config (upsert). All fields required.

**Body**
```json
{
  "ratePerSalesCall": 150,
  "rateCustomerSatisfaction": 200,
  "slabAccessory": 5,
  "slabSpare": 3,
  "slabEssential": 4
}
```

**Response** `200` — same shape as GET.

---

### PATCH `/salary-config`
Partially update — send only the fields you want to change.

**Body** (all optional)
```json
{
  "ratePerSalesCall": 175
}
```

**Response** `200` — same shape as GET.

| Error | Reason |
|---|---|
| `404` | No config exists yet — call PUT first |
