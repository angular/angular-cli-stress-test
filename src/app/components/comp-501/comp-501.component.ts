/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service501Service } from '../../services/service-501.service';

@Component({
  selector: 'app-comp-501',
  templateUrl: './comp-501.component.html',
  styleUrls: ['./comp-501.component.css']
})
export class Comp501Component implements OnInit {

  constructor(private _service: Service501Service) { }

  ngOnInit() {
  }

}
