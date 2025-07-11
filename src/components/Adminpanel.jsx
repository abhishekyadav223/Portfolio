import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Mail, User, Calendar, MessageSquare, RefreshCw } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AdminPanel = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/contact`);
      setMessages(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch messages');
      console.error('Error fetching messages:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (messageId, newStatus) => {
    try {
      await axios.put(`${API}/contact/${messageId}/status`, null, {
        params: { status: newStatus }
      });
      // Refresh messages after status update
      fetchMessages();
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500';
      case 'read':
        return 'bg-yellow-500';
      case 'replied':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading messages...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Admin Panel</h1>
          <p className="text-gray-300">Contact Messages Dashboard</p>
          <Button
            onClick={fetchMessages}
            className="mt-4 bg-purple-600 hover:bg-purple-700"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-100 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}

        <div className="space-y-4">
          {messages.length === 0 ? (
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardContent className="p-8 text-center">
                <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No messages yet</p>
                <p className="text-gray-500 text-sm">Contact messages will appear here</p>
              </CardContent>
            </Card>
          ) : (
            messages.map((message) => (
              <Card key={message.id} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl mb-2">
                        {message.subject}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {message.name}
                        </div>
                        <div className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          {message.email}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(message.timestamp)}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={`${getStatusColor(message.status)} text-white`}>
                        {message.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {message.message}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateStatus(message.id, 'read')}
                      disabled={message.status === 'read'}
                      className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white"
                    >
                      Mark as Read
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateStatus(message.id, 'replied')}
                      disabled={message.status === 'replied'}
                      className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                    >
                      Mark as Replied
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(`mailto:${message.email}?subject=Re: ${message.subject}`)}
                      className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
                    >
                      Reply via Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;