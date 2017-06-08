/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service514Service } from '../../services/service-514.service';

@Component({
  selector: 'app-comp-514',
  templateUrl: './comp-514.component.html',
  styleUrls: ['./comp-514.component.css']
})
export class Comp514Component implements OnInit {

  constructor(private _service: Service514Service) { }

  ngOnInit() {
  }

}
