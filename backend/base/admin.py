from django.contrib import admin
from .models import (Product, Review, Order, OrderItem, ShippingAdress)
# Register your models here.

admin.site.register([Product, Review, Order, OrderItem, ShippingAdress])
