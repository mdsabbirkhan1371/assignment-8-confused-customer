import React from 'react';

const Queston = () => {
    return (
        <div>
            <h2>1.What is the difference between props and state</h2>
            <p>স্টেট এবং প্রপস এর মদ্ধে ডিফারেনট হচ্ছে স্টেট চেঞ্জ হয় এবং প্রপস চেঞ্জ হয় না।

                ইওজার স্টেট চেঞ্জ করতে পারে কিন্তু প্রপস চেঞ্জ করতে পারে না।
                প্রপস শুধু দেখতে পারে ইওজার।
            </p>
            <h2>How React Works</h2>
            <p>রিয়াক্ট একমুখি ভাবে ডাটা প্রেরন করে। যখন একটি রিয়েক্ট অ্যাপ ডিজাইন করা হয়, তখন প্যারেন্ট ও চাইল্ড কম্পোনেন্টের মধ্যে কানেকশন তৈরী করতে হয়। </p>
        </div>
    );
};

export default Queston;