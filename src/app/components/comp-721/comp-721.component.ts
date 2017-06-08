/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service721Service } from '../../services/service-721.service';

@Component({
  selector: 'app-comp-721',
  templateUrl: './comp-721.component.html',
  styleUrls: ['./comp-721.component.css']
})
export class Comp721Component implements OnInit {

  constructor(private _service: Service721Service) { }

  ngOnInit() {
  }

}
