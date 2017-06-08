/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service794Service } from '../../services/service-794.service';

@Component({
  selector: 'app-comp-794',
  templateUrl: './comp-794.component.html',
  styleUrls: ['./comp-794.component.css']
})
export class Comp794Component implements OnInit {

  constructor(private _service: Service794Service) { }

  ngOnInit() {
  }

}
