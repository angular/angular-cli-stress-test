/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service336Service } from '../../services/service-336.service';

@Component({
  selector: 'app-comp-336',
  templateUrl: './comp-336.component.html',
  styleUrls: ['./comp-336.component.css']
})
export class Comp336Component implements OnInit {

  constructor(private _service: Service336Service) { }

  ngOnInit() {
  }

}
