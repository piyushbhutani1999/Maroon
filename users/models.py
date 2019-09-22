from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)


class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        """
        Create and saves user with given email
        and password
        """
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model
