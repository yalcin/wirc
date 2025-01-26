class Conversation < ApplicationRecord
  belongs_to :user
  belongs_to :room

  after_create :broadcast_message
  # broadcasts_to ->(conversation) { "converations" }, insert_by: :append

  def broadcast_message
    broadcast_append_to "conversations",
                        target: "conversations",
                        partial: "conversations/conversation",
                        locals: { message: self }
  end
end
