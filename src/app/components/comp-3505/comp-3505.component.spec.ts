/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3505Component } from './comp-3505.component';

describe('Comp3505Component', () => {
  let component: Comp3505Component;
  let fixture: ComponentFixture<Comp3505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
