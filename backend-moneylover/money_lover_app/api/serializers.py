


# from django.contrib.auth.models import User
# libs
from rest_framework import serializers
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# written models
from ..models import Transaction, Category




class TransactionSerializer(serializers.HyperlinkedModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')
    user_name = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Transaction
        fields = ['id','amount', 'description','user', 'user_name','category', 'category_name']


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

