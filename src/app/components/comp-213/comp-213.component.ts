/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service213Service } from '../../services/service-213.service';

@Component({
  selector: 'app-comp-213',
  templateUrl: './comp-213.component.html',
  styleUrls: ['./comp-213.component.css']
})
export class Comp213Component implements OnInit {

  constructor(private _service: Service213Service) { }

  ngOnInit() {
  }

}
