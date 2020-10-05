from django.shortcuts import render
from django.views import View

# Create your views here.
class HomeView(View):
    template_name = 'core/home.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)

    def post(self, request, *args, **kwargs):
        pass
# def home_page(request):
#     return render(request, 'core/home.html')

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
