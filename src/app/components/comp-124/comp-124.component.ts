/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service124Service } from '../../services/service-124.service';

@Component({
  selector: 'app-comp-124',
  templateUrl: './comp-124.component.html',
  styleUrls: ['./comp-124.component.css']
})
export class Comp124Component implements OnInit {

  constructor(private _service: Service124Service) { }

  ngOnInit() {
  }

}
