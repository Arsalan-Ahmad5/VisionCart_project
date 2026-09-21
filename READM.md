# VisionCart Backend

FastAPI backend for the VisionCart smart shopping cart.

## Current architecture

Camera/Frontend -> FastAPI -> Roboflow RF-DETR -> detections

The current version includes:
- FastAPI
- Roboflow inference
- Product database with SQLite
- Cart APIs
- Swagger documentation

Tracking with ByteTrack and real-time WebSocket processing can be added as the next stage.

## Setup

### 1. Create a virtual environment

Windows:

```bash
python -m venv venv
venv\Scripts\activate
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Configure Roboflow

Copy `.env.example` to `.env` and set:

```env
ROBOFLOW_API_KEY=your_key
ROBOFLOW_MODEL_ID=your_model_id
CONFIDENCE_THRESHOLD=0.50
```

Use the model ID of your unified VisionCart RF-DETR model.

### 4. Start the API

```bash
uvicorn app.main:app --reload
```

Open:

http://127.0.0.1:8000/docs

## API endpoints

### Detection

`POST /api/detection/detect`

Upload a JPG, JPEG or PNG image.

### Products

`GET /api/products/`

`GET /api/products/{model_class}`

### Cart

`GET /api/cart/`

`POST /api/cart/add/{product_id}`

`DELETE /api/cart/remove/{product_id}`

`DELETE /api/cart/clear`

## Important

Do not commit `.env` or your Roboflow API key to GitHub.
