/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service935Service } from '../../services/service-935.service';

@Component({
  selector: 'app-comp-935',
  templateUrl: './comp-935.component.html',
  styleUrls: ['./comp-935.component.css']
})
export class Comp935Component implements OnInit {

  constructor(private _service: Service935Service) { }

  ngOnInit() {
  }

}
