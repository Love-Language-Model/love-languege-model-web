import React, { useEffect, useState } from 'react';
import { topicsService, Topic } from '@/services';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TopicsList = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadTopics = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await topicsService.getAll();
      if (response.data) {
        setTopics(response.data);
      } else {
        setError(response.error || 'Failed to load topics');
      }
    } catch (err) {
      setError('Failed to load topics');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTopics();
  }, []);

  const handleCreateTopic = async () => {
    const newTopic = {
      name: {
        en: 'New Topic',
        pt: 'Novo Tópico',
      },
      description: {
        en: 'A new topic for testing',
        pt: 'Um novo tópico para teste',
      },
    };

    setLoading(true);
    try {
      await topicsService.create(newTopic);
      await loadTopics();
    } catch (err) {
      setError('Failed to create topic');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading topics...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">Error: {error}</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Topics</h2>
        <Button onClick={handleCreateTopic} disabled={loading}>
          Create Topic
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {topics?.map((topic) => (
          <Card key={topic.id} className="bg-black border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-lg">
                {topic.name.en} / {topic.name.pt}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {topic.description && (
                <p className="text-white/70">
                  {topic.description.en}
                  {topic.description.pt && ` / ${topic.description.pt}`}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      {topics?.length === 0 && (
        <div className="text-center py-8 text-white/60">
          No topics found. Create your first topic!
        </div>
      )}
    </div>
  );
};

export default TopicsList;
