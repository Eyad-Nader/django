from django.urls import path
from . import views

urlpatterns = [
   path('', views.show_books,name='books'),
   path('books/<int:bookid>/', views.show_details, name='book_detail'),
   path('html/', views.show_html,name='html'),

    
]
