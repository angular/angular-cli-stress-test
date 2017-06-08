/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service980Service } from '../../services/service-980.service';

@Component({
  selector: 'app-comp-980',
  templateUrl: './comp-980.component.html',
  styleUrls: ['./comp-980.component.css']
})
export class Comp980Component implements OnInit {

  constructor(private _service: Service980Service) { }

  ngOnInit() {
  }

}
