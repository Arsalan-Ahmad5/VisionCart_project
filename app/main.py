from fastapi import FastAPI
from app.database.database import Base, engine
from app.api import detection, products, cart

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="VisionCart API",
    description="Computer Vision Based Smart Shopping Cart",
    version="1.0.0"
)

app.include_router(detection.router)
app.include_router(products.router)
app.include_router(cart.router)

@app.get("/")
def root():
    return {"application": "VisionCart", "status": "running"}

@app.get("/health")
def health():
    return {"status": "healthy"}
