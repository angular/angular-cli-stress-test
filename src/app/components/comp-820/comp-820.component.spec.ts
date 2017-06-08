/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp820Component } from './comp-820.component';

describe('Comp820Component', () => {
  let component: Comp820Component;
  let fixture: ComponentFixture<Comp820Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp820Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
