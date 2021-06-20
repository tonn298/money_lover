from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
# from api.serializers import UserSerializer
# from rest_framework_simplejwt.views import TokenObtainPairView
# from rest_framework.permissions import AllowAny
# from .serializers import MyTokenObtainPairSerializer



from ..models import Transaction, Category
from .serializers import TransactionSerializer, CategorySerializer


# class UserViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = User.objects.all().order_by('-date_joined')
#     serializer_class = UserSerializer
#     # permission_classes = [permissions.IsAuthenticated]


class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all().order_by('id')
    serializer_class = TransactionSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('name')
    serializer_class = CategorySerializer


#  for payload
# class MyObtainTokenPairView(TokenObtainPairView):
#     permission_classes = (AllowAny,)
#     serializer_class = MyTokenObtainPairSerializer
