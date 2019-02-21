from django.shortcuts import render

# Create your views here.

def main_body(request):

	return render(request, "index.html")

def about(request):

	return render(request, "about.html")

def course(request):

	return render(request, "course.html")

def event(request):

	return render(request, "event.html")

def blog(request):

	return render(request, "blog.html")	

def contact(request):

	return render(request, "contact.html")					
