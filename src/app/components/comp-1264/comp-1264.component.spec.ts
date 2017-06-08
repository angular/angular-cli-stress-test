/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1264Component } from './comp-1264.component';

describe('Comp1264Component', () => {
  let component: Comp1264Component;
  let fixture: ComponentFixture<Comp1264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
