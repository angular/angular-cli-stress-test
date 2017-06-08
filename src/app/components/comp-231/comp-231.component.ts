/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service231Service } from '../../services/service-231.service';

@Component({
  selector: 'app-comp-231',
  templateUrl: './comp-231.component.html',
  styleUrls: ['./comp-231.component.css']
})
export class Comp231Component implements OnInit {

  constructor(private _service: Service231Service) { }

  ngOnInit() {
  }

}
