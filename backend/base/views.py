from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product
# from .products import products
from .serializers import ProductSerializer

# Create your views here.


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
  @classmethod
  def get_token(cls, user):
    token = super().get_token(user)

    # Add custom claims
    token['username'] = user.username
    token['message'] = 'hello'
    # ...

    return token


class MyTokenObtainPairView(TokenObtainPairView):
  serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
  routes = [
      'api/products/',
      'api/products/create/',

      'api/products/upload/',

      'api/products/<id>/reviews/',

      'api/products/top/',
      'api/products/<id>/',

      'api/products/detete/<id>/',
      'api/products/<udpate>/<id>/',
  ]
  return Response(routes)


@api_view(['GET'])
def getProducts(request):
  products = Product.objects.all()
  serializer = ProductSerializer(products, many=True)
  return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
  product = Product.objects.get(_id=pk)
  serializer = ProductSerializer(product)
  return Response(serializer.data)
