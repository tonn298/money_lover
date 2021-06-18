from django.db import models
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated


# Create your models here.

# TODOS add create and modified

class Category(models.Model):
    name = models.CharField(max_length=100)
    is_expense = models.BooleanField(default=True)
    permission_classes = [IsAuthenticated]
    def __str__(self):
        return self.name
        
class Transaction(models.Model):
    amount = models.DecimalField(max_digits=20, decimal_places=2)
    description = models.CharField(max_length=1000, default=None)
    is_expense = models.BooleanField(default=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE,default=None)
    # created = models.DateTimeField(auto_now_add=True)
    # modified = models.DateTimeField(auto_now=True)
    def __str__(self):
        if (self.is_expense == True): 
            transaction_type = '+'
        else: transaction_type = '-'
        value = transaction_type + ' ' +  str(self.amount) + ' from user ' + str(self.user.username)
        return  value
