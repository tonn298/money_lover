from django.urls import path, include

# from rest_framework_simplejwt import TokenRefreshView
# 
from . import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'register',views.UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]


# from django.urls import path
# from ..account.views import MyObtainTokenPairView, RegisterView
# from rest_framework_simplejwt.views import TokenRefreshView
# urlpatterns = [
#     path('login/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
#     path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
#     path('register/', RegisterView.as_view(), name='auth_register'),
# ]