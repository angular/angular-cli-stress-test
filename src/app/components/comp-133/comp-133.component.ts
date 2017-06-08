/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service133Service } from '../../services/service-133.service';

@Component({
  selector: 'app-comp-133',
  templateUrl: './comp-133.component.html',
  styleUrls: ['./comp-133.component.css']
})
export class Comp133Component implements OnInit {

  constructor(private _service: Service133Service) { }

  ngOnInit() {
  }

}
