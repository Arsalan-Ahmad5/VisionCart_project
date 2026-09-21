from collections import defaultdict

class CartService:
    def __init__(self):
        self.items = defaultdict(int)

    def add_item(self, product_id: int):
        self.items[product_id] += 1

    def remove_item(self, product_id: int):
        if self.items[product_id] > 0:
            self.items[product_id] -= 1

        if self.items[product_id] <= 0:
            self.items.pop(product_id, None)

    def get_cart(self):
        return dict(self.items)

    def clear(self):
        self.items.clear()

cart_service = CartService()
