package com.neo.ppln.repository;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.auth.EnvironmentVariableCredentialsProvider;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.ObjectListing;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3ObjectSummary;

public enum S3 {
    INSTANCE();
    AmazonS3Client s3;
    String bucket = "pplndata";
    String SUFFIX = "/";

    private S3() {
        s3 = new AmazonS3Client(new EnvironmentVariableCredentialsProvider());
    }

    public List<String> findObject(String folder) {
        ObjectListing objList = s3.listObjects(bucket);
        List<String> result = new ArrayList<String>();
        for (S3ObjectSummary o : objList.getObjectSummaries()) {
            String key = o.getKey();
            String thisFolder = key.substring(0, key.indexOf(SUFFIX));
            if (thisFolder.contentEquals(folder)) {
                result.add(s3.getResourceUrl(bucket, key));
            }
        }
        return result;
    }

    public String upload(String folder, String title, File file) {
        if (!s3.doesBucketExist(bucket)) {
            s3.createBucket(bucket);
        }
        String key = folder + SUFFIX;
        createFolder(bucket, key, s3);
        if (title.trim().length() == 0) {
            title = file.getName();
        }
        key = key + title;
        PutObjectRequest request = new PutObjectRequest(bucket, key, file).withCannedAcl(CannedAccessControlList.PublicRead);
        s3.putObject(request);
        return s3.getResourceUrl(bucket, key);
    }

    private void createFolder(String bucketName, String folderName, AmazonS3 client) {
        GetObjectRequest getRequest = new GetObjectRequest(bucketName, folderName);
        try {
            client.getObject(getRequest);
        } catch (Exception e) {
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentLength(0);
            InputStream emptyContent = new ByteArrayInputStream(new byte[0]);
            PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName,
                    folderName, emptyContent, metadata);
            client.putObject(putObjectRequest);
        }
    }

}
