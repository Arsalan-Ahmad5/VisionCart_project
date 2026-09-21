import os
from dotenv import load_dotenv
from inference_sdk import InferenceHTTPClient

load_dotenv()

ROBOFLOW_API_KEY = os.getenv("ROBOFLOW_API_KEY")
MODEL_ID = os.getenv("ROBOFLOW_MODEL_ID")
CONFIDENCE_THRESHOLD = float(os.getenv("CONFIDENCE_THRESHOLD", "0.50"))

if not ROBOFLOW_API_KEY:
    raise RuntimeError("ROBOFLOW_API_KEY is not set in .env")

if not MODEL_ID:
    raise RuntimeError("ROBOFLOW_MODEL_ID is not set in .env")

client = InferenceHTTPClient(
    api_url="https://detect.roboflow.com",
    api_key=ROBOFLOW_API_KEY
)

def detect_objects(image_path: str):
    result = client.infer(image_path, model_id=MODEL_ID)

    detections = []

    for prediction in result.get("predictions", []):
        confidence = prediction.get("confidence", 0)

        if confidence < CONFIDENCE_THRESHOLD:
            continue

        detections.append({
            "class_name": prediction["class"],
            "confidence": confidence,
            "x": prediction["x"],
            "y": prediction["y"],
            "width": prediction["width"],
            "height": prediction["height"]
        })

    return detections
