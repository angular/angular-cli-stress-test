/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1711Component } from './comp-1711.component';

describe('Comp1711Component', () => {
  let component: Comp1711Component;
  let fixture: ComponentFixture<Comp1711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
