from click import password_option
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm

#from .models import profile

class UserRegisterForm(UserCreationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={
        "type": "text",
        "id": "name", 
        "placeholder": "Enter Full Name"    
    }),label="Full Name")
    
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={
        "type": "password",
        "id": "password", 
        "placeholder": "Enter Password"    
    }), label="Password")
    
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={
        "type": "password",
        "id": "password2", 
        "placeholder": "Enter Password"    
    }), label="Password Confirmation")
    
    email = forms.CharField(widget=forms.EmailInput(attrs={
        "type": "email",
        "id": "email", 
        "placeholder": "Example@gamil.com"    
    }))
    
    
    
    class Meta:
       model = User
       fields = ['username', 'email', 'password1', 'password2']
       
class UserUpdateForm(forms.ModelForm):
    email = forms.EmailField()
    
    class Meta:
       model = User
       fields = ['username', 'email']
    
class userlogin(AuthenticationForm):
    def __init__(self, request, *args, **kwargs):
        super(userlogin, self).__init__(request, *args, **kwargs)
        
    # email = forms.CharField(widget=forms.EmailInput(attrs={
    #     "type": "email",
    #     "id": "email", 
    #     "placeholder": "Example@gamil.com"    
    # }))
    
    username = forms.CharField(widget=forms.TextInput(attrs={
        "type": "text",
        "id": "name", 
        "placeholder": "Enter Full Name"    
    }),label="Full Name")
    
    password = forms.CharField(widget=forms.PasswordInput(attrs={
        "type": "password",
        "id": "password", 
        "placeholder": "Enter Password"    
    }), label="Password")
    
    