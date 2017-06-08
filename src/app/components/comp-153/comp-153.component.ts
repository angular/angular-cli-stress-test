/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service153Service } from '../../services/service-153.service';

@Component({
  selector: 'app-comp-153',
  templateUrl: './comp-153.component.html',
  styleUrls: ['./comp-153.component.css']
})
export class Comp153Component implements OnInit {

  constructor(private _service: Service153Service) { }

  ngOnInit() {
  }

}
