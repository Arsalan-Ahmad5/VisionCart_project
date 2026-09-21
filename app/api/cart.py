from fastapi import APIRouter
from app.services.cart_service import cart_service

router = APIRouter(prefix="/api/cart", tags=["Cart"])

@router.post("/add/{product_id}")
def add_product(product_id: int):
    cart_service.add_item(product_id)
    return {"message": "Product added", "cart": cart_service.get_cart()}

@router.delete("/remove/{product_id}")
def remove_product(product_id: int):
    cart_service.remove_item(product_id)
    return {"message": "Product removed", "cart": cart_service.get_cart()}

@router.get("/")
def get_cart():
    return {"cart": cart_service.get_cart()}

@router.delete("/clear")
def clear_cart():
    cart_service.clear()
    return {"message": "Cart cleared"}
