/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3713Component } from './comp-3713.component';

describe('Comp3713Component', () => {
  let component: Comp3713Component;
  let fixture: ComponentFixture<Comp3713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
