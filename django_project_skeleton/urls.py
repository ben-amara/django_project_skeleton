"""django_project_skeleton URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
"""
# Django imports
from . import views
from .viewsClass import HomeView
from django.conf.urls import include, url, handler404
from django.contrib import admin
from django.contrib.auth import views as auth_views


urlpatterns = [
    # Examples:
    url(r'^$', HomeView.as_view(), name='home'),
    url(r'^reviews/', views.reviews_page, name='reviews'),
    url(r'^compare/', views.compare_page, name='compare'),
    url(r'^coupons/', views.coupons_page, name='coupons'),
    url(r'^resources/', views.resources_page, name='resources'),
    url(r'^blog/', views.blog_page, name='blog'),
    url(r'^login/$', auth_views.LoginView.as_view(template_name='core/login.html'),
        name='core_login'),
    url(r'^logout/$', auth_views.LogoutView.as_view(), name='core_logout'),
    url(r'^admin/', admin.site.urls),
]

handler404 = views.handler404
