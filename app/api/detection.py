import os
import uuid
from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.detector import detect_objects

router = APIRouter(prefix="/api/detection", tags=["Detection"])

@router.post("/detect")
async def detect(file: UploadFile = File(...)):
    extension = os.path.splitext(file.filename or "")[1].lower()

    if extension not in [".jpg", ".jpeg", ".png"]:
        raise HTTPException(
            status_code=400,
            detail="Only JPG, JPEG and PNG images are supported"
        )

    filename = f"temp_{uuid.uuid4()}{extension}"

    with open(filename, "wb") as buffer:
        buffer.write(await file.read())

    try:
        detections = detect_objects(filename)
        return {
            "count": len(detections),
            "detections": detections
        }
    finally:
        if os.path.exists(filename):
            os.remove(filename)
