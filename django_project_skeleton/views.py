from django.shortcuts import render


# Create your views here.

def home_page(request):
    return render(request, 'core/home.html')

def reviews_page(request):
    return render(request, 'core/reviews.html')

def compare_page(request):
    return render(request, 'core/compare.html')

def coupons_page(request):
    return render(request, 'core/coupons.html')

def resources_page(request):
    return render(request, 'core/resources.html')

def blog_page(request):
    return render(request, 'core/blog.html')


def handler404(request, exception):
    return render(request, 'core/home.html')
