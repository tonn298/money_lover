from django.urls import path, include
from .views import MyObtainTokenPairView, RegisterView, ChangePasswordView, UserViewSet, LogoutView
# ,UpdateProfileView
from rest_framework_simplejwt.views import TokenRefreshView
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'list-all-users',views.UserViewSet)

urlpatterns = [
    path('login/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('logout/', LogoutView.as_view(), name='auth_logout'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('change_password/<int:pk>/', ChangePasswordView.as_view(), name='auth_change_password'),
    # path('update_profile/<int:pk>/', UpdateProfileView.as_view(), name='auth_update_profile'),
    path('', include(router.urls)),
]