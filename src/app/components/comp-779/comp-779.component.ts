/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service779Service } from '../../services/service-779.service';

@Component({
  selector: 'app-comp-779',
  templateUrl: './comp-779.component.html',
  styleUrls: ['./comp-779.component.css']
})
export class Comp779Component implements OnInit {

  constructor(private _service: Service779Service) { }

  ngOnInit() {
  }

}
