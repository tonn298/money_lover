


# from django.contrib.auth.models import User
# libs
from rest_framework import serializers
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# written models
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




#  for payload
# class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

#     @classmethod
#     def get_token(cls, user):
#         token = super(MyTokenObtainPairSerializer, cls).get_token(user)

#         # Add custom claims
#         token['username'] = user.username
#         return token