from pydantic import BaseModel, ConfigDict

class ProductResponse(BaseModel):
    id: int
    model_class: str
    name: str
    category: str
    price: float
    stock: int

    model_config = ConfigDict(from_attributes=True)
