package app.fileServer;

import app.response.Response;

import java.io.File;

/**
 * 文件服务器
 */
public class FileManage implements Operation {

    /**
     * 暂用
     * @return
     */
    @Override
    public Response createFile() {
        return null;
    }

    /**
     * 暂用
     * @return
     */
    @Override
    public Response deleteFile() {
        return null;
    }

    /**
     *创建文件目录
     * @param path 文件目录（相对路径如:/demo）必须加一个“/”
     * @return
     */
    @Override
    public  Response mkdir(String path) {
        Response res = new Response(0,"");
        File  dir = new File(System.getProperty("user.dir")+path);
        if(dir.exists()){
            res.setCode(403);
            res.setMessage("文件目录已存在");
        }
        else{
            if(dir.mkdir()){
                res.setCode(400);
                res.setMessage("文件目录创建成功! url:"+System.getProperty("user.dir")+path);
            }
            else{
                res.setCode(401);
                res.setMessage("文件目录创建失败，请检查路径是否正确！url:"+System.getProperty("user.dir")+path);
            }
        }
        return res;
    }

    @Override
    public Response delete(String file) {
        Response res = new Response(0,"");
        try {
            File file1 = new File(System.getProperty("user.dir")+"/"+file);
            if( file1.delete()){
                res.setCode(106);
                res.setMessage("删除成功！");
            }
            else{
                res.setCode(110);
                res.setMessage("删除失败!");
            }
        }
        catch (Exception e){

        }
        return res;
    }
}
