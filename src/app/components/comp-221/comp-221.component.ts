/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service221Service } from '../../services/service-221.service';

@Component({
  selector: 'app-comp-221',
  templateUrl: './comp-221.component.html',
  styleUrls: ['./comp-221.component.css']
})
export class Comp221Component implements OnInit {

  constructor(private _service: Service221Service) { }

  ngOnInit() {
  }

}
