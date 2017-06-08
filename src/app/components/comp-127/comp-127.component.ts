/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service127Service } from '../../services/service-127.service';

@Component({
  selector: 'app-comp-127',
  templateUrl: './comp-127.component.html',
  styleUrls: ['./comp-127.component.css']
})
export class Comp127Component implements OnInit {

  constructor(private _service: Service127Service) { }

  ngOnInit() {
  }

}
