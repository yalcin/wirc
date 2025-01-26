json.extract! conversation, :id, :user_id, :room_id, :message, :created_at, :updated_at
json.url conversation_url(conversation, format: :json)
