from django.shortcuts import render



from django.contrib.auth.models import User
from .serializers import RegisterSerializer, ChangePasswordSerializer
# ,UpdateUserSerializer
from rest_framework import generics,viewsets
from rest_framework.permissions import IsAuthenticated


# Create your views here.

from .serializers import MyTokenObtainPairSerializer, UserSerializer
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView

#for log out
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView


# from rest_framework_simplejwt import OutstandingToken, BlacklistedToken


class MyObtainTokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


class ChangePasswordView(generics.UpdateAPIView):

    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = ChangePasswordSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


# class UpdateProfileView(generics.UpdateAPIView):

#     queryset = User.objects.all()
#     permission_classes = (IsAuthenticated,)
#     serializer_class = UpdateUserSerializer


class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)
            

    def post(self, request):
        print("this run")
        try:
            print("start here")
            refresh_token = request.data["refresh_token"]
            print("got refresh_token")
            token = RefreshToken(refresh_token)
            print("see token >> this pass", token)
            token.blacklist()
            print("blacklist work")


            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

# class LogoutAllView(APIView):
#     permission_classes = (IsAuthenticated,)

#     def post(self, request):
#         tokens = OutstandingToken.objects.filter(user_id=request.user.id)
#         for token in tokens:
#             t, _ = BlacklistedToken.objects.get_or_create(token=token)

#         return Response(status=status.HTTP_205_RESET_CONTENT)