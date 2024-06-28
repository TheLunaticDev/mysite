from django.shortcuts import render


def index(request):
    navItems = ['Blogs', 'About Me']
    return render(request, 'mysite/index.html', {'navItems': navItems})
