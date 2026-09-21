from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.database.models import Product
from app.schemas.product import ProductResponse

router = APIRouter(prefix="/api/products", tags=["Products"])

@router.get("/", response_model=list[ProductResponse])
def get_products(db: Session = Depends(get_db)):
    return db.query(Product).all()

@router.get("/{model_class}", response_model=ProductResponse)
def get_product(model_class: str, db: Session = Depends(get_db)):
    product = (
        db.query(Product)
        .filter(Product.model_class == model_class)
        .first()
    )
    if product is None:
        raise HTTPException(status_code=404, detail="Product not found")
    return product
