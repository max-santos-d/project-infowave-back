import postMessageRepositorie from '../repositories/postMessage.repositorie.js';

const store = async ({ user, text }, post) => {
	const response = await postMessageRepositorie.store(post, user, text);
	return response;
};

const index = async (post) => {
	return await postMessageRepositorie.index(post);
};

const deleted = async (post, { comment }) => {
	if (!comment) throw new Error('Comment id required.');
	const findComment = await postMessageRepositorie.show(post, comment);
	if (!findComment.length) return 'Comment not found.';
	const response = postMessageRepositorie.deleted(post, comment);
	if (!response) throw new Error('Error when deleting');
	return 'Comment deleted.';
};

export default {
	store,
	index,
	deleted,
};
