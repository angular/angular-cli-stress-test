/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1511Component } from './comp-1511.component';

describe('Comp1511Component', () => {
  let component: Comp1511Component;
  let fixture: ComponentFixture<Comp1511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1511Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
