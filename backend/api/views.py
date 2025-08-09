from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def hello(request):
    return Response({
        'message': 'Hello from Django API!',
        'status': 'success'
    })

@api_view(['GET'])
def items(request):
    sample_items = [
        {'id': 1, 'name': 'Item 1', 'description': 'First item'},
        {'id': 2, 'name': 'Item 2', 'description': 'Second item'},
        {'id': 3, 'name': 'Item 3', 'description': 'Third item'},
    ]
    return Response({
        'items': sample_items,
        'count': len(sample_items)
    })