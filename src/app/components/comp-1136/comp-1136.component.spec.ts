/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1136Component } from './comp-1136.component';

describe('Comp1136Component', () => {
  let component: Comp1136Component;
  let fixture: ComponentFixture<Comp1136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
