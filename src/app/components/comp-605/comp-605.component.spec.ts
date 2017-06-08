/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp605Component } from './comp-605.component';

describe('Comp605Component', () => {
  let component: Comp605Component;
  let fixture: ComponentFixture<Comp605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
