from django.shortcuts import render,redirect
from books.models import Book
from django.shortcuts import get_object_or_404




def show_mainadmin(request):
    books = Book.objects.all()
    return render(request,'mainadmin/main-admin.html',{'books': books})

def show_add(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        author = request.POST.get('author')
        # cover_image = request.FILES.get('cover') 
        description = request.POST.get('description')
        category = request.POST.get('category')
        
        if 'cover' in request.FILES:
            cover_image = request.FILES['cover']
        else:
            cover_image = 'covers/default.jpg'
            
        Book.objects.create(
            title=title,
            author=author,
            photos=cover_image,
            description=description,
            category=category,
            avaliable=True  
        )

        return redirect('mainadmin')
    
    
    return render(request, 'mainadmin/admin_add.html')


def show_edit(request):
    return render(request,'mainadmin/editbook.html')



def delete_book(request, book_id):
    book = get_object_or_404(Book,id=book_id)
    book.delete()
    return redirect('mainadmin')  
