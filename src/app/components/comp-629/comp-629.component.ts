/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service629Service } from '../../services/service-629.service';

@Component({
  selector: 'app-comp-629',
  templateUrl: './comp-629.component.html',
  styleUrls: ['./comp-629.component.css']
})
export class Comp629Component implements OnInit {

  constructor(private _service: Service629Service) { }

  ngOnInit() {
  }

}
