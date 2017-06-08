/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service146Service } from '../../services/service-146.service';

@Component({
  selector: 'app-comp-146',
  templateUrl: './comp-146.component.html',
  styleUrls: ['./comp-146.component.css']
})
export class Comp146Component implements OnInit {

  constructor(private _service: Service146Service) { }

  ngOnInit() {
  }

}
