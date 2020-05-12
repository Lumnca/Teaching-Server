package app.fileServer;

import app.reponseData.Response;

public interface Operation {
    Response createFile();
    Response deleteFile();
    //创建目录
    Response mkdir(String path);
    //删除文件
    Response delete(String file);
}
