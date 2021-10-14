import { userApi } from 'api';
import { PageContainer, PageContent, PageHeaderContainer, PageTitle } from 'components/Layout';
import { User } from 'models';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import tw from 'twin.macro';
import { UserForm } from './AddEditForm';

const TabButton = styled.span`
  ${tw`
    py-1 cursor-pointer text-sm font-medium
  `};
  ${({ active }: any) => (active ? tw`border-green-500 text-green-500 border-b ` : tw``)}
` as any;

const TabContent = styled.form`
  ${tw`
    mt-6
  `};
  ${({ active }: any) => (active ? tw`block` : tw`hidden`)}
` as any;

export const AddEditUserPage = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const { userId } = useParams<{ userId: string }>();
  const isEdit = Boolean(userId);
  const history = useHistory();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (!userId) return;

    // IFFE
    (async () => {
      try {
        const data: User = await userApi.getById(userId);
        setUser(data);
      } catch (error) {
        console.log('Failed to fetch student details', error);
      }
    })();
  }, [userId]);
  const initialValues: User = {
    email: '',
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
    ...user,
  } as User;

  const handleStudentFormSubmit = async (formValues: User) => {
    if (isEdit) {
      try {
        await userApi.updateUser(formValues);
        toast.success('Save user successfully!');
        // Redirect back to student list
        history.push('/users');
      } catch (error) {
        toast.error('This email has not existed');
      }
    } else {
      try {
        await userApi.createUser(formValues);
        toast.success('Save user successfully!');
        // Redirect back to student list
        history.push('/users');
      } catch (error) {
        toast.error('This email has been used');
      }
    }
  };

  return (
    <PageContainer>
      <PageContent>
        <PageHeaderContainer>
          <PageTitle>{isEdit ? 'Update user' : 'Create new user'}</PageTitle>
        </PageHeaderContainer>
        <div className="mt-8">
          <div className="flex  flex-row gap-6">
            <TabButton onClick={() => setActiveTab(1)} active={activeTab === 1}>
              Basic info
            </TabButton>
            <TabButton onClick={() => setActiveTab(2)} active={activeTab === 2}>
              Role & Permission
            </TabButton>
          </div>
          <TabContent active={activeTab === 1}>
            {(!isEdit || Boolean(user)) && (
              <UserForm initialValues={initialValues} onSubmit={handleStudentFormSubmit} />
            )}
          </TabContent>
          <TabContent active={activeTab === 2}>Tab 2</TabContent>
        </div>
      </PageContent>
    </PageContainer>
  );
};
