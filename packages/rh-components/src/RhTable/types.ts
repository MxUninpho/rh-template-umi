import { ListToolBarProps } from '@ant-design/pro-components';
import { ActionType, ProColumns, ProTableProps } from '@ant-design/pro-table';
import { PageInfo } from '@ant-design/pro-utils/lib/typing';
import { BaseButtonProps } from 'antd/lib/button/button';
import { TableMulSelectProps } from '../RhTableMulSelected';
import { RhObservable } from './hooks/useTable';

export declare type RecordKey = React.Key | React.Key[];

// ExtraBtn type
type ExtraBtnAType = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>[];
interface RightExtraBtnByKeyType {
  key: string;
  // accessKey 按钮的 key，是否权限控制
  accessKey?: string;
  func: (selectedRowKeys: React.Key[]) => any;
}

type rightExtraBtn = ExtraBtnAType | RightExtraBtnByKeyType[];

export type RhActionMeta = {
  name: string;
  action: string;
  isMore?: boolean;
  className?: string;
  children?: any[];
} & Omit<BaseButtonProps, 'key' | 'children'>;

export type RhToolbarMeta = {
  actions?: RhActionMeta[];
} & Omit<ListToolBarProps, 'actions'>;

/**
 * 配置化开发表格meta type
 */
export type RhTableMeta = {
  columns: RhColumns[];
  /**
   * 表格多选方式 'multiple' | 'single'
   * @default ''
   */
  rowSelectionType?: string;
  /**
   * 工具条，参数和 ProTable 一致，但支持配置化
   */
  toolbar?: RhToolbarMeta;
  /**
   * 表格内行操作
   */
  tableActions?: RhActionMeta[];
} & Pick<RhTableProps<any, any, any>, 'searchPlacement' | 'headerTitle'>;

/**
 * RhTable 扩展的属性
 */
export type RhTableSelfProps = {
  /**
   * 配置化开发表格属性
   */
  meta?: RhTableMeta;
  /**
   * rxjs Subject Observable
   * 用于事件流处理，使用 useTable hook获取
   */
  observable$?: RhObservable<any>;

  /**
   * 查询表单渲染位置 'header' | 'toolbar'
   * @default 'header'
   */
  searchPlacement?: string;
  /**
   * 隐藏request 请求 loading效果
   */
  hideLoading?: boolean;
  /**
   * title是否和toolbar同一行
   */
  titleInline?: boolean;
  /**
   * 可编辑表格，和 virtual 冲突不能同时使用
   */
  editable?: {
    saveApi?: string;
    handleSave?: (key: any, record: any, originRow?: any) => void;
  };
  /**
   * 虚拟表格
   */
  virtual?: boolean;
  /**
   * 是否重置查询分页
   */
  resetPageIndex?: boolean;
  /**
   * resetPageInParams 是否重置查询条件
   */
  resetPageInParams?: boolean;
  /**
   * extraParams 请求额外传入参数，使用在查询表单以外的查询条件
   */
  extraParams?: Record<string, any>;
  /**
   * tableAlertRenderProps 选择显示行的额外配置 (如需全部覆盖可使用 table 自带的 tableAlertRender)
   */
  tableAlertRenderProps?: {
    /**
     * 清空选择项方法 （用于重置默认清空方法）
     */
    cleanMethod?: () => any;
    /**
     * 左侧额外渲染的按钮 (内容为多个a 元素)
     */
    leftExtraBtn?: ExtraBtnAType;
    /**
     * 右侧额外渲染的按钮 (内容为多个a 元素)
     */
    rightExtraBtn?: rightExtraBtn;
    /**
     * 表单多选功能内容
     */
    tableMulSelectProps?: TableMulSelectProps;
  };
  /**
   * 左侧输入框 / 选择框中每个表单占据的格子大小
   * 总宽度 = searchSpan * colSize
   * colSize 默认为 1
   */
  searchSpan?: number;
  toolBarClassName?: string;
  /**
   * 自定义渲染右侧toolbar
   */
  customToolBarRender?: () => /* action: ActionType | undefined
    rows: {
      selectedRowKeys?: (string | number)[];
      selectedRows?: T[];
    } */
  React.ReactNode[];
};

export type RhTableProps<DataType, Params, ValueType> = ProTableProps<
  DataType,
  Params,
  ValueType
> &
  RhTableSelfProps;

export type RhColumns<T = any, ValueType = 'text'> = ProColumns<
  T,
  ValueType
> & {
  /**
   * 查询展示方式
   * @string 'query' | 'light'
   * @default 'query'
   */
  searchType?: 'query' | 'light';
  /**
   * 联动的孩子key，但父节点修改时，清空子节点的数据
   * 目前只用于下拉选择框
   */
  linkChildrenKey?: string[];

  /**
   * 编辑单元格
   */
  quickEdit?: Record<string, any>;
};

export type RhActionType = ActionType & {
  pageInfo: PageInfo & { params: Record<string, any> };
};
