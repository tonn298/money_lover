


# from django.contrib.auth.models import User
from rest_framework import serializers

from ..models import Transaction, Category


# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id','url', 'username', 'email', 'groups']
#         # fields = "__all__"


class TransactionSerializer(serializers.HyperlinkedModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')
    user_name = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Transaction
        fields = ['id','amount', 'description','user', 'user_name','category', 'category_name']
        # fields = '__all__'


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        # fields = ['name', 'id']
        fields = '__all__'
