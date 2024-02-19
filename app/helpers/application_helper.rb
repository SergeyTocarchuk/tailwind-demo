module ApplicationHelper

  def account_menu_active_status(menu_item)
    controller_name == menu_item ? 'active' : ''
  end

end
