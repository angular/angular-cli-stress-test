/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service606Service } from '../../services/service-606.service';

@Component({
  selector: 'app-comp-606',
  templateUrl: './comp-606.component.html',
  styleUrls: ['./comp-606.component.css']
})
export class Comp606Component implements OnInit {

  constructor(private _service: Service606Service) { }

  ngOnInit() {
  }

}
