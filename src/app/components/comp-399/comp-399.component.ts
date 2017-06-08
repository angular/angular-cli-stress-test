/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service399Service } from '../../services/service-399.service';

@Component({
  selector: 'app-comp-399',
  templateUrl: './comp-399.component.html',
  styleUrls: ['./comp-399.component.css']
})
export class Comp399Component implements OnInit {

  constructor(private _service: Service399Service) { }

  ngOnInit() {
  }

}
