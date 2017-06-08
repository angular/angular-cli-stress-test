/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service115Service } from '../../services/service-115.service';

@Component({
  selector: 'app-comp-115',
  templateUrl: './comp-115.component.html',
  styleUrls: ['./comp-115.component.css']
})
export class Comp115Component implements OnInit {

  constructor(private _service: Service115Service) { }

  ngOnInit() {
  }

}
