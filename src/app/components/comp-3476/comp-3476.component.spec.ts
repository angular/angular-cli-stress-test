/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3476Component } from './comp-3476.component';

describe('Comp3476Component', () => {
  let component: Comp3476Component;
  let fixture: ComponentFixture<Comp3476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3476Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
