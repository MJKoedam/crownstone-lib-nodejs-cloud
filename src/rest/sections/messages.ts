import { cloudApiBase } from "./cloudApiBase";

export const messages : messages = {

  createMessage: function (data, background) {
    return cloudApiBase._setupRequest(
      'POST',
      '/Spheres/{id}/messages',
      { data: data, background: background },
      'body'
    );
  },

  receivedMessage: function (cloudMessageId, background) {
    return cloudApiBase._setupRequest(
      'POST',
      '/Messages/' + cloudMessageId + '/delivered',
      { background: background },
      'body'
    );
  },

  readMessage: function (cloudMessageId, background) {
    return cloudApiBase._setupRequest(
      'POST',
      '/Messages/' + cloudMessageId + '/read',
      { background: background },
      'body'
    );
  },


  getMessage: function (cloudMessageId, background = true) {
    return cloudApiBase._setupRequest(
      'GET',
      '/Messages/' + cloudMessageId,
      { data: {filter:{"include":["recipients","delivered","read"]}}, background: background }
    );
  },

  getNewMessagesInSphere: function (background = true) {
    return cloudApiBase._setupRequest(
      'GET',
      '/Spheres/{id}/myNewMessages',
      { background: background }
    );
  },

  getAllMessagesInSphere: function (background = true) {
    return cloudApiBase._setupRequest(
      'GET',
      '/Spheres/{id}/myMessages',
      { background: background }
    );
  },

  getNewMessagesInLocation: function (cloudLocationId, background = true) {
    return cloudApiBase._setupRequest(
      'GET',
      '/Spheres/{id}/myNewMessagesInLocation/' + cloudLocationId,
      { background: background }
    );
  },

  getActiveMessages: function(background = true) {
    return cloudApiBase._setupRequest(
      'GET',
      '/Spheres/{id}/myActiveMessages/',
      { background : background }
    );
  },

  addRecipient: function(recipientId, background = true) {
    // recipientId is a userId, these are the same in the cloud as locally.
    return cloudApiBase._setupRequest(
      'PUT',
      '/Messages/{id}/recipients/rel/' + recipientId,
      { background: background }
    );
  },

  deleteMessage: function (cloudMessageId, background = true) {
    return cloudApiBase._setupRequest(
      'DELETE',
      '/Spheres/{id}/messages/' + cloudMessageId,
      { background: background }
    );
  },

  deleteAllMessages: function (background = true) {
    return cloudApiBase._setupRequest(
      'DELETE',
      '/Spheres/{id}/deleteAllMessages',
      { background: background }
    );
  },
};