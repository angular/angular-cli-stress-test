/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service904Service } from '../../services/service-904.service';

@Component({
  selector: 'app-comp-904',
  templateUrl: './comp-904.component.html',
  styleUrls: ['./comp-904.component.css']
})
export class Comp904Component implements OnInit {

  constructor(private _service: Service904Service) { }

  ngOnInit() {
  }

}
