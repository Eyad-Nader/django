from django.urls import path
from . import views

urlpatterns = [
    path('', views.show_books,name='books'),
    path('bookpage/', views.show_details,name='bookpage'),
    
]
