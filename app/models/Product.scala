package models

import play.api.libs.json._

case class Product(id: Long, name: String, description: String, category: Int, price: Int)

object Product {
  implicit val productFormat = Json.format[Product]
}
