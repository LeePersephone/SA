from django.urls import path


from .views import (
    UserView,
    GetAuthUserView,
    ProfileView,
    ProfilesView,
    SingleProfileView,
    PostView,
    LikeUnlikeView,
    CommentView
)

urlpatterns = [
    path('users', UserView.as_view()),
    path('auth', GetAuthUserView.as_view()),

    path('posts', PostView.as_view()),
    path('posts/<int:id>', PostView.as_view()),
    path('posts/<int:id>/like', LikeUnlikeView.as_view()),
    path('posts/<int:id>/comments', CommentView.as_view()),
    path('posts/comments/<int:id>', CommentView.as_view()),

    path('profile', ProfileView.as_view()),
    path('profiles', ProfilesView.as_view()),
    path('profile/me', ProfileView.as_view()),
    
    path('profile/<int:id>', SingleProfileView.as_view()),

]
