from django.shortcuts import render
from books.models import Book
def show_mainadmin(request):
    return render(request,'mainadmin/main-admin.html')

def show_add(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        author = request.POST.get('author')
        cover_image = request.POST.get('cove')
        description = request.POST.get('description')
        category = request.POST.get('category')

        Book.objects.create(
            title=title,
            author=author,
            cover_image=cover_image,
            description=description,
            category=category,
            avaliable=True  
        )

        return render(request, 'mainadmin/main-admin.html', {'message': 'Book added successfully!'})
    
    return render(request, 'mainadmin/admin_add.html')


def show_edit(request):
    return render(request,'mainadmin/editbook.html')