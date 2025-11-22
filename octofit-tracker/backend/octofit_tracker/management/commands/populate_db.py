from django.core.management.base import BaseCommand
from octofit_tracker.models import Team, User, Activity, Workout, Leaderboard
from pymongo import MongoClient

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Connect to MongoDB and ensure unique index on email
        client = MongoClient('localhost', 27017)
        db = client['octofit_db']
        db.users.create_index('email', unique=True)

        # Clear existing data
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        User.objects.all().delete()
        Team.objects.all().delete()
        Workout.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='Marvel', description='Marvel Superheroes')
        dc = Team.objects.create(name='DC', description='DC Superheroes')

        # Create users
        users = [
            User(email='tony@marvel.com', name='Tony Stark', team=marvel, is_superhero=True),
            User(email='steve@marvel.com', name='Steve Rogers', team=marvel, is_superhero=True),
            User(email='clark@dc.com', name='Clark Kent', team=dc, is_superhero=True),
            User(email='diana@dc.com', name='Diana Prince', team=dc, is_superhero=True),
        ]
        User.objects.bulk_create(users)

        # Create workouts
        workouts = [
            Workout(name='Super Strength', description='Strength training for superheroes', difficulty='Hard'),
            Workout(name='Flight Training', description='Learn to fly like Superman', difficulty='Medium'),
        ]
        Workout.objects.bulk_create(workouts)

        # Create activities
        for user in User.objects.all():
            Activity.objects.create(user=user, type='Workout', duration=60)

        # Create leaderboard
        Leaderboard.objects.create(team=marvel, points=200)
        Leaderboard.objects.create(team=dc, points=180)

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data'))
