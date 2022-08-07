/* eslint-disable @next/next/no-img-element */
import LayoutAdmin from '@/components/Layouts/admin'
import { NextPageWithLayout } from '@/models/layouts'
import React from 'react'
import Link from 'next/link'
import useFilms from '@/hooks/use-film'

// antd
import { Avatar, List, Button } from 'antd';
import { DeleteOutlined, PlusCircleOutlined, ToolOutlined} from "@ant-design/icons";
type Props = {}
const ListFilm = (props: NextPageWithLayout) => {
  const { data: films, error } = useFilms();
  if (error) return <div>failed to load...</div>
  if (!films) return <div> loading...</div>
  return (
    <div>
      {/* test Antd */}
      <Link href='/admin/films/add'>
      <Button  style={{color:'red'}} icon={<PlusCircleOutlined />} >Thêm Mới</Button>
      </Link>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 3,
        }}
        dataSource={films}
        footer={
          <div>
            <b>NetFlix</b>
          </div>
        }
        renderItem={(films: any, index) => (
          <List.Item
            key={films.title}
            extra={
              <img
                width={130}
                alt="logo"
                src={films.poster_path}
              />
            }
          >
            <List.Item.Meta
              title={<a href={films.href}>{films.title}</a>}
              description={films.overview}
            />
            {films.content}
          
            <Button icon={<ToolOutlined />}>
            <Link href={`/admin/films/${films.id}/edit`}>Sửa</Link>
              </Button>
            <Button type="primary" danger style={{ marginLeft: 8 }} icon={<DeleteOutlined/>}  onClick= {()=> {if(window.confirm('bạn có muốn xóa ko')) {(films._id)}}}>
              Xóa
            </Button>
          </List.Item>
        )}
      />


    </div>
  )
}
ListFilm.Layout = LayoutAdmin

export default ListFilm